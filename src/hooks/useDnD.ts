import { useDrag, useDrop, XYCoord } from "react-dnd";
import { DndData } from "@/types/costume";
import { ItemTypes } from "@/utils/rack";

type Props = {
  itemType: ItemTypes;
  data?: DndData;
  canDrag?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
};

export const useDnD = (props: Props) => {
  const [{ isDragging }, dragRef, preview] = useDrag({
    type: props.itemType,
    item: () => {
      console.log(props);
      // if (props?.onDragStart) {
      //   props.onDragStart();
      // }
      return {
        data: props.data,
      };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => {
      if (props.onDragEnd) {
        console.log(props);
        props.onDragEnd();
      }
    },
    canDrag: props.canDrag,
  });

  const [{ handlerId }, dropRef] = useDrop({
    accept: [ItemTypes.ITEM],
    collect: (monitor) => {
      console.log(monitor);
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    drop: (monitor) => {
      console.log(monitor, "a");
      return {};
    },
  });
  return {
    handlerId,
    dropRef,
    dragRef,
    isDragging,
    preview,
  };
};
