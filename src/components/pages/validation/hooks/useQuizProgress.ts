import { total } from "@/utils/validation";
import { useState } from "react";

export const useQuizProgress = (
  handleCheck: () => "ok" | "failed",
  getQuestion: () => void,
  resetText: () => void
) => {
  const [okCount, setOkCount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const reset = () => {
    setOkCount(0);
    setIsSuccess(false);
  };

  const handleClickNext = () => {
    const result = handleCheck();

    if (result === "ok") {
      resetText();
      if (okCount === total - 1) {
        setIsSuccess(true);
      } else {
        getQuestion();
        setOkCount((pre) => pre + 1);
      }
    } else {
    }
  };

  return {
    isSuccess,
    handleClickNext,
    reset,
  };
};
