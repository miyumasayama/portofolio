import { useDnD } from "@/hooks/useDnD";
import { Box, SxProps } from "@mui/material";
import { FC, PropsWithChildren, useRef } from "react";
import { DndData } from "@/types/costume";
import { ItemTypes } from "@/utils/rack";
import { useAppSelector } from "@/store";
import { selectCostume } from "@/reducers/costume/selectors";

type DraggableProps = {
  itemType: ItemTypes;
  data: DndData;
  canDrag?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  sx?: SxProps;
};

const opacityWhenDragging = 0.4;

export const Draggable: FC<PropsWithChildren<DraggableProps>> = ({
  children,
  data,
  itemType,
  canDrag,
  onDragStart,
  onDragEnd,
  sx,
}) => {
  const ref = useRef<HTMLDivElement>();
  const { costume } = useAppSelector(selectCostume);
  const { dragRef, dropRef, handlerId, isDragging } = useDnD({
    itemType,
    data,
    canDrag,
    onDragStart,
    onDragEnd,
  });
  dragRef(dropRef(ref));

  return (
    <Box
      data-handler-id={handlerId}
      ref={ref}
      component="div"
      sx={{
        ...sx,
        opacity: isDragging ? opacityWhenDragging : 1,
      }}
    >
      {children}
    </Box>
  );
};
