import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";

type Props = {
  title: string;
  open: boolean;
  handleClose: () => void;
};

export const SuccessDialog: FC<Props> = ({ title, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
