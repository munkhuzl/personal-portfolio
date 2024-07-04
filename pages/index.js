import Image from "next/image";
import { Hero} from "./component/hero";
import {Navbar} from "./component/navbar"
import { Aboutme } from "./component/aboutme";
import { Skills } from "./component/skills";

export default function Home() {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Aboutme/>
        <Skills/>
    </main>
  );
}
