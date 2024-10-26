import {
  kindsOfCharacters,
  numberOfCharacters,
} from "@/components/pages/validation/fragments/validationSet";
import { RegExp } from "@/types/validation";
import { useState } from "react";

export const useValidationQuiz = () => {
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [regExps, setRegExps] = useState<RegExp[]>([]);

  const getQuestion = () => {
    // 文字数制限をランダムで選択
    const numberOfCharacterIndex = Math.floor(
      Math.random() * numberOfCharacters.length
    );
    const selectedNumerOfCharacters =
      numberOfCharacters[numberOfCharacterIndex];

    // 条件をランダムで選択
    const kindsOfCharactersCount = Math.floor(
      Math.random() * kindsOfCharacters.length
    );
    const kindsOfCharactersArr = [...kindsOfCharacters];
    const selectedKindsOfCharacters = kindsOfCharactersArr
      .sort((_) => Math.random() - 0.5)
      .slice(0, kindsOfCharactersCount);

    setRegExps([selectedNumerOfCharacters, ...selectedKindsOfCharacters]);
  };

  return {
    numOfQuestions,
    regExps,
    getQuestion,
  };
};
