import { useDrag, useDrop } from "react-dnd";
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
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    drop: () => {
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
