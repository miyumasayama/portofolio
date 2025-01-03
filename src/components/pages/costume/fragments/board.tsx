import { Box } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { Person } from "../data/person";
import { ItemTypes } from "@/utils/rack";
import { DndData } from "@/types/costume";
import { add } from "@/reducers/costume";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectCostume } from "@/reducers/costume/selectors";
import { Draggable } from "@/components/organisms/draggable/draggable";

type Item = {
  data: DndData;
};

export const Board: FC = () => {
  const dispatch = useAppDispatch();
  const { costume } = useAppSelector(selectCostume);
  const [, drop] = useDrop<Item, unknown, { item?: Item }>(
    () => ({
      accept: [ItemTypes.ITEM],
      collect: (monitor) => ({
        item: monitor.getItem(),
      }),
      drop: (item) => {
        dispatch(
          add({
            costume: item.data,
          })
        );
      },
    }),
    []
  );

  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      drop(boxRef);
    }
  }, [drop]);

  return (
    <Box
      component="div"
      ref={boxRef}
      border="solid #FEEBF6 1px"
      height="100%"
      width="50%"
      sx={{ backgroundColor: "#FEEBF6", position: "relative" }}
      borderRadius="10px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {costume && (
        <Draggable
          itemType={ItemTypes.ITEM}
          data={costume}
          sx={{ position: "absolute", zIndex: 10, top: "136px" }}
        >
          <img
            style={{
              width: costume.width * 2.5,
              height: costume.height * 2.5,
            }}
            src={`https://costumes-miyumasayama.s3.us-east-1.amazonaws.com/${costume.image}`}
          />
        </Draggable>
      )}
      <Person />
    </Box>
  );
};
