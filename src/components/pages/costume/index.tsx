import { BackButton } from "@/components/molecules/backButton/backButton";
import { paths } from "@/utils/navigation";
import { Box, Grid2, Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Card } from "./fragments/card";
import { Board } from "./fragments/board";
import { Draggable } from "@/components/organisms/draggable/draggable";
import { ItemTypes } from "@/utils/rack";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useGetCostumesQuery } from "@/reducers/appsApi/injections/costumesApi";
import { SpError } from "@/components/organisms/spError/spError";

export const Costume: FC = () => {
  const router = useRouter();

  const { data } = useGetCostumesQuery();

  const [tab, setTab] = useState<"dress">("dress");

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
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
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
        <Box
          display="flex"
          width="100%"
          height="100%"
          gap={1}
          sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex" } }}
        >
          <Board />
          <Box
            border="solid white 1px"
            height="100%"
            width="50%"
            sx={{ backgroundColor: "white" }}
            borderRadius="10px"
          >
            <Box width="100%" height="40px">
              <Tabs value={tab}>
                <Tab
                  label="dress"
                  value={tab}
                  sx={{
                    color: tab === "dress" ? "primary" : "",
                  }}
                />
              </Tabs>
            </Box>
            <Grid2
              container
              rowSpacing={2}
              columnSpacing={2}
              width="100%"
              p={2}
            >
              {data?.map((costume) => {
                return (
                  <Grid2 size={4} key={costume.name}>
                    <Draggable data={costume} itemType={ItemTypes.ITEM}>
                      <Card>
                        <img
                          src={`https://costumes-miyumasayama.s3.us-east-1.amazonaws.com/${costume.image}`}
                        />
                      </Card>
                    </Draggable>
                  </Grid2>
                );
              })}
            </Grid2>
          </Box>
        </Box>
      </DndProvider>
      <SpError />
    </Box>
  );
};
