import { RegExp } from "@/types/validation";
import { ChangeEvent, useState } from "react";

export const useValidate = (regExps: RegExp[]) => {
  const [text, setText] = useState<string>();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  return {
    text,
    handleChange,
  };
};
