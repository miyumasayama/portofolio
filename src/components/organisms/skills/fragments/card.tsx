import { FC } from "react";
import {
  Box,
  CardActionArea,
  Card as MuiCard,
  Typography,
} from "@mui/material";

type Props = {
  name: string;
  image?: string;
};

export const Card: FC<Props> = ({ name, image }) => {
  return (
    <MuiCard sx={{ cursor: "none", pointerEvents: "none" }} elevation={4}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={1} width="100%">
          {image && <img src={image} alt={name} width={25} height={25} />}
          <Typography fontSize={20} fontWeight={500}>
            {name}
          </Typography>
        </Box>
      </CardActionArea>
    </MuiCard>
  );
};
