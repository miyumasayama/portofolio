import { Box } from "@mui/material";
import { FC } from "react";
import { useDrop } from "react-dnd";
import { Person } from "../data/person";
import { ItemTypes } from "@/utils/rack";
import { DndData } from "@/types/costume";
import { add } from "@/reducers/costume";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectCostume } from "@/reducers/costume/selectors";
import { Draggable } from "@/components/organisms/draggable/draggable";
import { SwitchCostume } from "./switchCostume";

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
            costume: item.data.costume,
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
      sx={{ backgroundColor: "#FEEBF6", position: "relative" }}
      borderRadius="10px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {costume && (
        <Draggable
          itemType={ItemTypes.ITEM}
          data={{ costume }}
          sx={{ position: "abosolute", zIndex: 10 }}
        >
          <SwitchCostume
            name={costume.name}
            style={{
              width: 61 * 2.5,
              height: 59 * 2.5,
            }}
          />
        </Draggable>
      )}
      <Person />
    </Box>
  );
};
