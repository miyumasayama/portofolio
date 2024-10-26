import { RegExp } from "@/types/validation";
import { ChangeEvent, useState } from "react";

// 実際のバリデーションを行うhooks
export const useValidate = (regExps: RegExp[]) => {
  const [text, setText] = useState<string>();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.currentTarget.value);
    console.log(regExps);
  };
  return {
    text,
    handleChange,
  };
};
