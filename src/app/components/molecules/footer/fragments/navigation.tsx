import { Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  href: string,
  title: string
}

export const Navigation: FC<Props> = ({ href, title}) => {
  return (
    <Typography component='a' href={href} color="white">{title}</Typography>
  )
}