import { BackButton } from "@/components/molecules/backButton/backButton";
import { paths } from "@/utils/navigation";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC } from "react";

export const SpError: FC = () => {
  const router = useRouter();
  return (
    <Box sx={{ display: { sm: "none", md: "none", lg: "none" } }}>
      <BackButton onClick={() => router.push(paths.home)} />
      <Typography fontSize={24}>Sorry!</Typography>
      <Typography>Please use Your PC or Tablet to see this page</Typography>
    </Box>
  );
};
