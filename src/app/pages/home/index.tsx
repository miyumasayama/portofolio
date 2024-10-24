import { AppBar } from "@/app/components/molecules/appBar/appBar";
import { About } from "@/app/components/organisms/about/about";
import { CherryBlossoms } from "@/app/components/organisms/cherryBlossoms/cherryBlossoms";
import { Skills } from "@/app/components/organisms/skills/skills";
import { FC } from "react";

export const Home: FC = () => {
    return (
        <>
            <AppBar />
            <CherryBlossoms />
            <About />
            <Skills />
        </>
    )
}