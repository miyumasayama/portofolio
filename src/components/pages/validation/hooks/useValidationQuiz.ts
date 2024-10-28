import {
  kindsOfCharacters,
  numberOfCharacters,
} from "@/components/pages/validation/fragments/validationSet";
import { RegExpType } from "@/types/validation";
import { useCallback, useState } from "react";

// validationQuizのセットアップ

export const useValidationQuiz = () => {
  const [regExps, setRegExps] = useState<RegExpType[]>([]);

  const getQuestion = useCallback(() => {
    // 文字数制限をランダムで選択
    const numberOfCharacterIndex = Math.floor(
      Math.random() * numberOfCharacters.length
    );
    const selectedNumerOfCharacters =
      numberOfCharacters[numberOfCharacterIndex];

    // 条件をランダムでランダム個(1個以上)選択
    const kindsOfCharactersCount =
      Math.floor(Math.random() * kindsOfCharacters.length) ?? 1;
    const kindsOfCharactersArr = [...kindsOfCharacters];
    const selectedKindsOfCharacters = kindsOfCharactersArr
      .sort(() => Math.random() - 0.5)
      .slice(0, kindsOfCharactersCount);

    setRegExps([selectedNumerOfCharacters, ...selectedKindsOfCharacters]);
  }, []);

  const reset = () => {
    setRegExps([]);
  };

  return {
    regExps,
    getQuestion,
    reset,
  };
};
