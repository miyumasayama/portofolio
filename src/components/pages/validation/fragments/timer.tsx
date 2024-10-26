import { Time } from "@/types/validation";
import { formatTimeToPad } from "@/utils/validation";
import { Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  time: Time;
};

export const Timer: FC<Props> = ({ time }) => {
  return (
    <Typography fontSize={20}>
      {formatTimeToPad(time.minutes)} : {formatTimeToPad(time.seconds)}
    </Typography>
  );
};
