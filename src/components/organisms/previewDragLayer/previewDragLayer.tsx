import { Box } from "@mui/material";
import { FC, useMemo } from "react";
import { useDragLayer } from "react-dnd";
import { DndData } from "@/types/costume";
import { ItemTypes } from "@/utils/rack";

type Props = {
  scale?: number;
};

type Item = {
  data?: DndData;
};

export const PreviewDragLayer: FC<Props> = ({ scale = 1 }) => {
  const { itemType, isDragging, item, clientOffset } = useDragLayer(
    (monitor) => ({
      item: monitor.getItem<Item | undefined>(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      clientOffset: monitor.getClientOffset(),
      isDragging: monitor.isDragging(),
    })
  );

  const offsets = useMemo(() => {
    const zeroOffset = { x: 0, y: 0 };
    if (!item?.data) return zeroOffset;
    const { costume } = item.data;
    switch (itemType) {
      case ItemTypes.ITEM: {
        // const { width, height } = product.shape.size.actual;
        // return { x: width / 2, y: height / 2 };
      }

      default:
        return zeroOffset;
    }
  }, [item?.data, itemType]);

  const transform = useMemo(() => {
    if (!clientOffset) return;
    let { x, y } = clientOffset;

    return `translate(${x * 2.5}px, ${y * 2.5}px) scale(${2.5})`;
  }, [clientOffset, offsets]);

  if (!isDragging || !clientOffset) {
    return <></>;
  }
  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        zIndex: 100,
        pointerEvents: "none",
        transform,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- Property should use UpperCase for vendor prefix
        WebkitTransform: transform,
      }}
    >
      {item?.data && (
        <Preview
          itemType={itemType as string}
          dndData={item.data}
          // index={item.index}
        />
      )}
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/naming-convention -- Property should use UpperCase
const Preview: FC<{ itemType: string; dndData: DndData }> = ({
  itemType,
  dndData: { costume },
  // index,
}) => {
  switch (itemType) {
    case ItemTypes.ITEM: {
      return <img src={costume.component} />;
    }

    default:
      return <></>;
  }
};
