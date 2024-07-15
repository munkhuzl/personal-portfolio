import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
export function Navbar () {
    return (
        <div className="flex bg-white dark: bg-slate-800 text-black  justify-between align h-10 items-center">
             <div className="dark:text-white " > logo </div> 
            <span className="text-right gap-10 flex text-left mr-20">
               <a href="" className="hidden lg:block text-right font-bold"> About </a>
               <a href="" className="hidden lg:block text-right font-bold"> Work </a>
               <a href="" className="hidden lg:block text-right font-bold"> Testimonials </a>
               <a href="" className="hidden lg:block text-right font-bold"> Contact</a>
                <div className="hidden lg:block text-right">
                <MdOutlineDarkMode />
                </div>
                <button className="bg-slate-200 dark:text-white rounded hidden lg:block gap-10 font-bold"> Download CV</button>
            </span>    
                <div className="lg:hidden pr-5">
                <GiHamburgerMenu />
                </div>
        </div>
    )
}