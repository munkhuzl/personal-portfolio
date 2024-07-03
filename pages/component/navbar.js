import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
export function Navbar () {
    return (
        <div className="flex bg-white dark: bg-slate-800 text-black  justify-between align h-10 items-center">
             <div className="dark:text-white   " > logo </div> 
            <span className="text-right gap-10 flex text-left">
               <a href="" className="hidden lg:block text-right"> About </a>
               <a href="" className="hidden lg:block text-right"> Work </a>
               <a href="" className="hidden lg:block text-right"> Testimonials </a>
               <a href="" className="hidden lg:block text-right "> Contact</a>
                <div className="hidden lg:block text-right">
                <MdOutlineDarkMode />
                </div>
                <button className="bg-slate-800 dark:text-white rounded hidden lg:block gap-10"> Download CV</button>
            </span>    
                <div className="lg:hidden pr-5">
                <GiHamburgerMenu />
                </div>
        </div>
    )
}