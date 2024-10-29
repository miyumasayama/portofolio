import { Time } from "@/types/validation";
import { maxMinutes } from "@/utils/validation";
import { useEffect, useRef, useState } from "react";

export const useTimer = (handleIsTimeUp: () => void, clear: () => void) => {
  const timeRef = useRef<Time>({ seconds: 0, minutes: 0 });

  const [isTimerOn, setIsTimerOn] = useState(false);

  const handleStartTimer = () => {
    setIsTimerOn(true);
  };

  const handleTimeUp = () => {
    handleIsTimeUp();
    setIsTimerOn(false);
    clear();
  };

  const reset = () => {
    timeRef.current = {
      seconds: 0,
      minutes: 0,
    };
  };

  useEffect(() => {
    if (!isTimerOn) return;
    const interval = setInterval(() => {
      if (
        timeRef.current.minutes >= maxMinutes - 1 &&
        timeRef.current.seconds === 59
      ) {
        handleTimeUp();
        clearInterval(interval);
        return;
      }

      if (timeRef.current.seconds === 59) {
        timeRef.current = { seconds: 0, minutes: timeRef.current.minutes + 1 };
      } else {
        timeRef.current = {
          seconds: timeRef.current.seconds + 1,
          minutes: timeRef.current.minutes,
        };
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerOn]);

  return {
    time: timeRef.current,
    isTimerOn,
    reset,
    handleStartTimer,
    handleTimeUp,
  };
};
