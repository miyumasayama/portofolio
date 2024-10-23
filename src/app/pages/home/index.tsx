import { AppBar } from "@/app/components/appBar/appBar";
import { CherryBlossoms } from "@/app/components/cherryBlossoms/cherryBlossoms";
import { Box } from "@mui/material";
import { FC } from "react";

export const Home: FC = () => {
    return (
        <>
        <AppBar />
        <CherryBlossoms />
        </>
    )
}