import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { FC } from "react";

type Props = {
  title: string;
  open: boolean;
  handleClose: () => void;
};

export const AlertDialog: FC<Props> = ({ title, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button color="error" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
