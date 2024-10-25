import { AppBar } from "@/app/components/molecules/appBar/appBar";
import { Footer } from "@/app/components/molecules/footer/footer";
import { About } from "@/app/components/organisms/about/about";
import { CherryBlossoms } from "@/app/components/organisms/cherryBlossoms/cherryBlossoms";
import { History } from "@/app/components/organisms/history/history";
import { Products } from "@/app/components/organisms/products/products";
import { Skills } from "@/app/components/organisms/skills/skills";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <AppBar />
      <CherryBlossoms />
      <About />
      <Skills />
      <History />
      <Products />
      <Footer />
    </>
  )
}