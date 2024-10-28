import { RegExpType } from "@/types/validation";
import { ChangeEvent, useState } from "react";

// 実際のバリデーションを行うhooks
export const useValidate = (regExps: RegExpType[]) => {
  const [text, setText] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.currentTarget.value);
  };

  const handleCheck = () => {
    if (
      regExps.every((pattern) => {
        const regex = new RegExp(pattern.regExp);
        return regex.test(text);
      })
    ) {
      setIsError(false);
      return "ok";
    }
    setIsError(true);
    return "failed";
  };

  const reset = () => {
    setText("");
    setIsError(false);
  };

  return {
    text,
    isError,
    handleChange,
    handleCheck,
    reset,
  };
};
