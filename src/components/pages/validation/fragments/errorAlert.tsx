import * as React from "react";
import Alert from "@mui/material/Alert";
import { FC } from "react";

export const ErrorAlert: FC = () => {
  return <Alert severity="error">validation error</Alert>;
};
