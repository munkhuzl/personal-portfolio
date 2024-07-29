import Image from "next/image";
import { Hero } from "../component/hero";
import { Navbar } from "../component/navbar"
import { Aboutme } from "../component/aboutme";
import { Skills } from "../component/skills";
import { Experience } from "../component/experience";
import {Works} from "../component/work";
import { Contact } from "../component/contactme";
import {Footer} from "../component/footer";


export default function Home() {
  return (
    <main> 
       <div className="mx-auto">
        <Navbar/>
        <Hero/>
        <Aboutme/>
        <Skills/>
        <Experience/>
        <Works />
        <Contact/>
        <Footer/>
        </div>
    
    </main>
  )
}
