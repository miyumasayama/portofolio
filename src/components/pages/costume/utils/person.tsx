import { scale } from "@/utils/costume";
import { FC } from "react";

export const Person: FC = () => {
  return (
    <svg
      width={61 * scale}
      height={126 * scale}
      viewBox="0 0 61 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5 30L8.5 32.5L1 65.5H4L12 40.5H14.5L21 125.5H27.5V74H32.5V125.5H39L47 40.5H49L57 65.5H60L52 32.5L32.5 30H27.5Z"
        fill="#FFFCEB"
        stroke="#FFFCEB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="15" r="15" fill="#FFFCEB" />
    </svg>
  );
};
