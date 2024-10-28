import { total } from "@/utils/validation";
import { useState } from "react";

export const useQuizProgress = (
  handleCheck: () => "ok" | "failed",
  getQuestion: () => void,
  resetText: () => void
) => {
  const [okCount, setOkCount] = useState(0);

  const reset = () => {
    setOkCount(0);
  };

  const handleClickNext = () => {
    const result = handleCheck();

    if (result === "ok") {
      resetText();
      if (okCount === total - 1) {
      } else {
        getQuestion();
        setOkCount((pre) => pre + 1);
      }
    } else {
    }
  };

  return {
    handleClickNext,
    reset,
  };
};
