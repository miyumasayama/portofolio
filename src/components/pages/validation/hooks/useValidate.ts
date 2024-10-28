import { RegExpType } from "@/types/validation";
import { ChangeEvent, useState } from "react";

// 実際のバリデーションを行うhooks
export const useValidate = (regExps: RegExpType[]) => {
  const [text, setText] = useState<string>("");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.currentTarget.value);
  };

  const handleCheck = () => {
    if (
      regExps.every((pattern) => {
        const regex = new RegExp(pattern.regExp);
        console.log(pattern, regex.test(text));
        return regex.test(text);
      })
    ) {
      return "ok";
    }
    return "failed";
  };

  const reset = () => {
    setText("");
  };

  return {
    text,
    handleChange,
    handleCheck,
    reset,
  };
};
