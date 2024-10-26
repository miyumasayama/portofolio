import { Box, Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Timer } from "./fragments/timer";
import { total } from "@/utils/validation";

export const Validation: FC = () => {
  const [isTimerOn, setIsTimerOn] = useState(false);

  const handleStartTimer = () => {
    setIsTimerOn(true);
  };

  const handleTimeUp = () => {
    setIsTimerOn(false);
  };

  return (
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
      <Box display="flex" alignItems="center" gap={1}>
        <Timer isTimerOn={isTimerOn} handleTimeUp={handleTimeUp} />
        <Button
          variant="contained"
          onClick={handleStartTimer}
          disabled={isTimerOn}
        >
          Start
        </Button>
      </Box>
      <TextField />
    </Box>
  );
};
