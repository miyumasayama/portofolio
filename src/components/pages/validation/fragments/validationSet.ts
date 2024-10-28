import { RegExpType } from "@/types/validation";

export const numberOfCharacters: RegExpType[] = [
  {
    name: "5文字以上",
    regExp: /^.{5,}$/,
  },
  {
    name: "6文字以上",
    regExp: /^.{6,}$/,
  },
  {
    name: "7文字以上",
    regExp: /^.{7,}$/,
  },
  {
    name: "8文字以上",
    regExp: /^.{8,}$/,
  },
];

export const kindsOfCharacters: RegExpType[] = [
  {
    name: "小文字が含まれている",
    regExp: /^(?=.*[a-z]).+$/,
  },
  {
    name: "大文字が含まれている",
    regExp: /^(?=.*[A-Z]).+$/,
  },
  {
    name: "数字が含まれている",
    regExp: /^(?=.*\d).+$/,
  },
  {
    name: "特殊文字が含まれている",
    regExp: /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
  },
];
