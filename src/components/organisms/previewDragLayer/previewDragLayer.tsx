import { Box } from "@mui/material";
import { FC, useMemo } from "react";
import { useDragLayer } from "react-dnd";
import { DndData } from "@/types/costume";
// import { ItemTypes } from "@/utils/rack";
// import { SwitchCostume } from "@/components/pages/costume/fragments/switchCostume";

type Props = {
  scale?: number;
};

type Item = {
  data?: DndData;
};

export const PreviewDragLayer: FC<Props> = () => {
  const { itemType, isDragging, item, clientOffset } = useDragLayer(
    (monitor) => ({
      item: monitor.getItem<Item | undefined>(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      clientOffset: monitor.getClientOffset(),
      isDragging: monitor.isDragging(),
    })
  );

  const transform = useMemo(() => {
    if (!clientOffset) return;
    const { x, y } = clientOffset;

    return `translate(${x * 2.5}px, ${y * 2.5}px) scale(${2.5})`;
  }, [clientOffset]);

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

        WebkitTransform: transform,
      }}
    >
      {item?.data && (
        <Preview itemType={itemType as string} dndData={item.data} />
      )}
    </Box>
  );
};

const Preview: FC<{ itemType: string; dndData: DndData }> = ({
  itemType,
  dndData,
}) => {
  switch (itemType) {
    // case ItemTypes.ITEM: {
    //   // return <SwitchCostume name={dndData} />;
    // }

    default:
      return <></>;
  }
};
