import { total } from "@/utils/validation";
import { useState } from "react";

export const useQuizProgress = (
  handleCheck: () => "ok" | "failed",
  getQuestion: (prevText?: string) => void,
  resetText: () => void,
  handleSucceed: () => void
) => {
  const [okCount, setOkCount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const reset = () => {
    setOkCount(0);
    setIsSuccess(false);
  };

  const handleClickNext = (text: string) => {
    const result = handleCheck();

    if (result === "ok") {
      resetText();
      if (okCount === total - 1) {
        handleSucceed();
        setIsSuccess(true);
      } else {
        getQuestion(text);
        setOkCount((pre) => pre + 1);
      }
    } else {
    }
  };

  return {
    isSuccess,
    handleClickNext,
    reset,
    okCount,
  };
};
