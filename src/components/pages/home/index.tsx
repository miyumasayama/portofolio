import { AppBar } from "@/components/molecules/appBar/appBar";
import { Footer } from "@/components/molecules/footer/footer";
import { About } from "@/components/organisms/about/about";
import { CherryBlossoms } from "@/components/organisms/cherryBlossoms/cherryBlossoms";
import { Products } from "@/components/organisms/products/products";
import { Skills } from "@/components/organisms/skills/skills";
import { History } from "@/components/organisms/history/history";
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
  );
};
