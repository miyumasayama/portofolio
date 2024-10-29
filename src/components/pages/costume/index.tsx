import { BackButton } from "@/components/molecules/backButton/backButton";
import { paths } from "@/utils/navigation";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC } from "react";

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
    </Box>
  );
};
