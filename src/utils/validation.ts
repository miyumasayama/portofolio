export const maxMinutes = 1;
export const total = 10;

export const formatTimeToPad = (time: number) => {
  return String(time).padStart(2, "0");
};

export const isValid = (text: string, pattern: RegExp) => {
  return new RegExp(pattern).test(text);
};
