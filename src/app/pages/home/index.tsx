import { AppBar } from "@/app/components/appBar/appBar";
import { Box } from "@mui/material";
import { FC } from "react";

export const Home: FC = () => {
    return (
        <>
        <AppBar />
        <Box>
            こんにちは
        </Box>
        </>
    )
}