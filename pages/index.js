import Image from "next/image";
import { Hero} from "./component/hero";
import {Navbar} from "./component/navbar"
import { Aboutme } from "./component/aboutme";
import { Skills } from "./component/skills";
import { Experience } from "./component/experience";
import {Work} from "./component/work";



export default function Home() {
  return (
    <main> 
       <div>
        <Navbar/>
        <Hero/>
        <Aboutme/>
        <Skills/>
        <Experience/>
        <Work />
        </div>
    
    </main>
  )
}
