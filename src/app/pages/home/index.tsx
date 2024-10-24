import { AppBar } from "@/app/components/molecules/appBar/appBar";
import { CherryBlossoms } from "@/app/components/organisms/cherryBlossoms/cherryBlossoms";
import { FC } from "react";

export const Home: FC = () => {
    return (
        <>
        <AppBar />
        <CherryBlossoms />
        </>
    )
}