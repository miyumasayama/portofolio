'use client'
import { AppBar } from "../components/molecules/appBar/appBar";
import { CherryBlossoms } from "../components/organisms/cherryBlossoms/cherryBlossoms";
import { About } from "../components/organisms/about/about";
import { Skills } from "../components/organisms/skills/skills";
import { Products } from "../components/organisms/products/products";
import { Footer } from "../components/molecules/footer/footer";
import { History } from "../components/organisms/history/history";

export default function Home() {
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
}
