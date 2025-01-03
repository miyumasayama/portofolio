import { FC } from "react";
import { CardActionArea, Card as MuiCard } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export const Card: FC<Props> = ({ children }) => {
  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        pointerEvents: "none",
        height: 90,
      }}
      elevation={4}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 1,
          height: "100%",
        }}
      >
        {children}
      </CardActionArea>
    </MuiCard>
  );
};
