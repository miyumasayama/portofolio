import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { FC } from "react";

export const SuccessAlert: FC = () => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      well done!
    </Alert>
  );
};
