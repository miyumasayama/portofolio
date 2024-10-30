import { Box } from "@mui/material";
import { FC } from "react";
import { useDrop } from "react-dnd";
import { Person } from "../data/person";
import { ItemTypes } from "@/utils/rack";
import { DndData } from "@/types/costume";
import { add } from "@/reducers/costume";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectCostume } from "@/reducers/costume/selectors";

type Item = {
  data: DndData;
};

export const Board: FC = () => {
  const dispatch = useAppDispatch();
  const { costume, position } = useAppSelector(selectCostume);
  const [{ item }, drop] = useDrop<Item, unknown, { item?: Item }>(
    () => ({
      accept: [ItemTypes.ITEM],
      collect: (monitor) => ({
        item: monitor.getItem(),
      }),
      drop: (item, monitor) => {
        dispatch(
          add({
            costume: item.data.costume,
            position: {
              x: monitor.getClientOffset()?.x ?? undefined,
              y: monitor.getClientOffset()?.y ?? undefined,
            },
          })
        );
      },
    }),
    []
  );

  return (
    <Box
      component="div"
      ref={drop}
      border="solid #FEEBF6 1px"
      height="100%"
      width="50%"
      sx={{ backgroundColor: "#FEEBF6" }}
      borderRadius="10px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Person />
      {position && (
        <img
          style={{
            position: "absolute",
            top: (position.y ?? 0) - (59 * 2.5) / 2,
            left: (position.x ?? 0) - (61 * 2.5) / 2,
            width: 61 * 2.5,
            height: 59 * 2.5,
          }}
          src={costume?.component}
        />
      )}
    </Box>
  );
};
