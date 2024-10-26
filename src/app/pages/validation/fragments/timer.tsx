import { formatTimeToPad, maxMinutes } from "@/utils/validation";
import { Box } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";

type Props = {
  isTimerOn: boolean;
  handleTimeUp: () => void;
};

export const Timer: FC<Props> = ({ isTimerOn, handleTimeUp }) => {
  const [time, setTime] = useState<{ seconds: number; minutes: number }>({
    seconds: 0,
    minutes: 0,
  });

  const getTime = useCallback(() => {
    if (time.minutes >= maxMinutes - 1 && time.seconds === 59) {
      handleTimeUp();
    }
    setTime((pre) => {
      if (pre.seconds === 59) {
        return {
          seconds: 0,
          minutes: pre.minutes + 1,
        };
      } else {
        return {
          seconds: pre.seconds + 1,
          minutes: pre.minutes,
        };
      }
    });
  }, []);

  useEffect(() => {
    if (!isTimerOn) return;
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, [getTime, isTimerOn]);

  return (
    <Box>
      {formatTimeToPad(time.minutes)} : {formatTimeToPad(time.seconds)}
    </Box>
  );
};
