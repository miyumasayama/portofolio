import { RegExpType } from "@/types/validation";

export const numberOfCharacters: RegExpType[] = [
  {
    name: "More than 5 characters",
    regExp: /^.{5,}$/,
  },
  {
    name: "More than 6 characters",
    regExp: /^.{6,}$/,
  },
  {
    name: "More than 7 characters",
    regExp: /^.{7,}$/,
  },
  {
    name: "More than 8 characters",
    regExp: /^.{8,}$/,
  },
];

export const kindsOfCharacters: RegExpType[] = [
  {
    name: "Contains some lowercase character",
    regExp: /^(?=.*[a-z]).+$/,
  },
  {
    name: "Contains some uppercase character",
    regExp: /^(?=.*[A-Z]).+$/,
  },
  {
    name: "Contains some number",
    regExp: /^(?=.*\d).+$/,
  },
  {
    name: "Contains some special character",
    regExp: /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
  },
];

export const prviousCharacters = (prev: string): RegExpType[] => {
  return [
    {
      name: "前回入力したパスワードと同じ",
      regExp: new RegExp(`^${prev}$`),
    },
  ];
};
