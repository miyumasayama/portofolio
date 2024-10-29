import { BackButton } from "@/components/molecules/backButton/backButton";
import { paths } from "@/utils/navigation";
import { Box, Grid2, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { costumes } from "./utils/costumes";
import { Card } from "./fragments/card";
import { Person } from "./utils/person";

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
      <Box display="flex" width="100%" height="100%" gap={1}>
        <Box
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
        </Box>
        <Box
          border="solid white 1px"
          height="100%"
          width="50%"
          sx={{ backgroundColor: "white" }}
          borderRadius="10px"
          p={2}
        >
          <Grid2 container rowSpacing={2} columnSpacing={2} width="100%">
            {costumes.map((costume) => {
              return (
                <Grid2 size={4} key={costume.name}>
                  <Card>
                    <costume.component />
                  </Card>
                </Grid2>
              );
            })}
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
};
