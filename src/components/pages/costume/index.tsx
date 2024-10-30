import { BackButton } from "@/components/molecules/backButton/backButton";
import { paths } from "@/utils/navigation";
import { Box, Grid2, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { costumes, costumes2 } from "./utils/costumes";
import { Card } from "./fragments/card";
import { Person } from "./data/person";
import { Board } from "./fragments/board";
import { Draggable } from "@/components/organisms/draggable/draggable";
import { ItemTypes } from "@/utils/rack";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PreviewDragLayer } from "@/components/organisms/previewDragLayer/previewDragLayer";

export const Costume: FC = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundColor: "rgba(246, 181, 199, 0.5)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        p: 12,
        color: "gray",
        gap: 2,
        position: "relative",
      }}
    >
      <Box
        width="100%"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box width="100%">
          <BackButton onClick={() => router.push(paths.home)} />
        </Box>
        <Typography fontSize={30} color="gray">
          👗Costume👗
        </Typography>
        <Box
          fontSize={20}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Typography>Pick your favorite costume</Typography>
          <Typography>put on it to your doll by drag and drop</Typography>
        </Box>
      </Box>
      <DndProvider backend={HTML5Backend}>
        <Box display="flex" width="100%" height="100%" gap={1}>
          <Board />
          <Box
            border="solid white 1px"
            height="100%"
            width="50%"
            sx={{ backgroundColor: "white" }}
            borderRadius="10px"
            p={2}
          >
            <Grid2 container rowSpacing={2} columnSpacing={2} width="100%">
              {costumes2.map((costume) => {
                return (
                  <Grid2 size={4} key={costume.name}>
                    <Draggable data={{ costume }} itemType={ItemTypes.ITEM}>
                      <Card>
                        {/* <costume.component /> */}
                        <img src={costume.component} />
                      </Card>
                    </Draggable>
                  </Grid2>
                );
              })}
            </Grid2>
          </Box>
          <PreviewDragLayer />
        </Box>
      </DndProvider>
    </Box>
  );
};