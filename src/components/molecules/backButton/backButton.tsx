import { FC } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, IconButtonProps } from "@mui/material";

export const BackButton: FC<IconButtonProps> = (props) => {
  return (
    <IconButton {...props}>
      <ArrowBackIcon />
    </IconButton>
  );
};
