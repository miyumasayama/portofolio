import { useDnD } from "@/hooks/useDnD";
import { Box } from "@mui/material";
import { FC, PropsWithChildren, useRef } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import { DndData } from "@/types/costume";
import { ItemTypes } from "@/utils/rack";

type DraggableProps = {
  itemType: ItemTypes;
  data: DndData;
  canDrag?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
};

const opacityWhenDragging = 0.4;

export const Draggable: FC<PropsWithChildren<DraggableProps>> = ({
  children,
  data,
  itemType,
  canDrag,
  onDragStart,
  onDragEnd,
}) => {
  const ref = useRef<HTMLDivElement>();
  const { dragRef, dropRef, handlerId, isDragging, preview } = useDnD({
    itemType,
    data,
    canDrag,
    onDragStart,
    onDragEnd,
  });
  // preview(getEmptyImage(), { captureDraggingState: true });
  dragRef(dropRef(ref));
  return (
    <Box
      data-handler-id={handlerId}
      ref={ref}
      component="div"
      sx={{
        opacity: isDragging ? opacityWhenDragging : 1,
      }}
    >
      {children}
    </Box>
  );
};
