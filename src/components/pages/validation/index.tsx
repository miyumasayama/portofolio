import { Box, Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Timer } from "./fragments/timer";
import { total } from "@/utils/validation";
import { useTimer } from "@/hooks/useTimer";
import { AlertDialog } from "@/components/molecules/alertDialog/alertDialog";

export const Validation: FC = () => {
  const [isTimeUpOpen, setIsTimeUpOpen] = useState(false);
  const { time, reset, isTimerOn, handleStartTimer } = useTimer(() =>
    setIsTimeUpOpen(true)
  );

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#d6e9ca",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          p: 12,
          color: "gray",
        }}
      >
        <Typography fontSize={30} color="gray">
          🕰️ Validation Time Attack 🕰️
        </Typography>
        <Box
          fontSize={20}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Typography>
            Come up with a password that meets the requirements.
          </Typography>
          <Typography>
            The shorter the time it takes to answer all questions correctly, the
            better!
          </Typography>
          <Typography>total : {total}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <Timer time={time} />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#2e8b57" }}
            onClick={handleStartTimer}
            disabled={isTimerOn}
          >
            Start
          </Button>
        </Box>
        <TextField />
        <Button color="error" onClick={reset}>
          Quit
        </Button>
      </Box>
      <AlertDialog
        title={"Oops! Time is over!"}
        open={isTimeUpOpen}
        handleClose={() => setIsTimeUpOpen(false)}
      />
    </>
  );
};
