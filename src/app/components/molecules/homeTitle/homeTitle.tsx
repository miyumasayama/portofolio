import { Typography } from "@mui/material"
import { FC } from "react"

type Props = {
    text: string
}

export const HomeTitle: FC<Props> = ({ text }) => {
    return (
        <Typography fontSize={40} margin={4} color="#eebbcb">
            {text}
        </Typography>
    )
}