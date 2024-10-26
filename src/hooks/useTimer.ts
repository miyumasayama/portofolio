import { Time } from "@/types/validation";
import { maxMinutes } from "@/utils/validation";
import { useCallback, useEffect, useState } from "react";

export const useTimer = (handleIsTimeUp: () => void) => {
  const [time, setTime] = useState<Time>({
    seconds: 0,
    minutes: 0,
  });

  const [isTimerOn, setIsTimerOn] = useState(false);

  const handleStartTimer = () => {
    setIsTimerOn(true);
  };

  const handleTimeUp = () => {
    handleIsTimeUp();
    setIsTimerOn(false);
  };

  const reset = () => {
    setTime({
      seconds: 0,
      minutes: 0,
    });
  };

  const getTime = useCallback(() => {
    setTime((pre) => {
      if (pre.minutes >= maxMinutes - 1 && pre.seconds === 59) {
        handleTimeUp();
        return {
          seconds: 0,
          minutes: 0,
        };
      }
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
  }, [isTimerOn, getTime]);

  return {
    time,
    isTimerOn,
    reset,
    handleStartTimer,
    handleTimeUp,
  };
};
