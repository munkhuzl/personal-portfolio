import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
export function Navbar () {
    const [open, setOpen] = useState();
     function openMenu(){
        setOpen(true);
     }

     function closeMenu(){
        setOpen(false);
     }

    return (
        <div className="flex text-gray-600  dark:bg-black  text-white justify-between align h-10 items-center">
         <div className="ml-5 dark:text-white " >logo</div>
            <span className="text-right gap-10 flex text-left mr-20">
               <a href="" className="hidden lg:block text-right font-bold"> About </a>
               <a href="" className="hidden lg:block text-right font-bold"> Work </a>
               <a href="" className="hidden lg:block text-right font-bold"> Testimonials </a>
               <a href="" className="hidden lg:block text-right font-bold"> Contact</a>
                <div className="hidden lg:block text-right">
                <MdOutlineDarkMode />
                </div>
                <button className="bg-slate-200 dark:text-black bg-white rounded hidden lg:block gap-10 font-bold"> Download CV</button>
                 <GiHamburgerMenu onClick={openMenu} className="lg:hidden mr-0 "/>        
            </span> 
               
                 <div className={open ? "block" : "hidden"} >
                    <div className="fixed inset-0 bg-slate-500/90 z-10" onClick={closeMenu}></div>
                    <div className="fixed top-0 bottom-0 right-0 w-64 text-black bg-white shadow-lg dark:bg-slate-800 z-10">
                        <div className="flex justify-between p-3">
                            <div className="dark:text-white " > logo  </div>
                            <IoMdCloseCircleOutline onClick={closeMenu} className="mr-3 dark:text-white"/>  
                        </div>
                     <div className="p-3 dark:text-white ">
                         <div  className=" py-1"> <a href="" className="py-3"> About </a>  </div> 
                         <div  className=" py-1">  <a href="text-gray-600" > Work </a></div>
                         <div  className=" py-1"> <a href=""> Testimonials </a></div>
                        <div  className=" py-1"> <a href="" > Contact</a></div>
                    </div>
                    <div className="flex justify-between px-3 pb-3">
                        <p className="dark:text-white">Switch Theme</p>
                        <MdOutlineDarkMode className="dark:text-white"/>
                    </div>
                    <button className="flex justify-center py-[6px] px-[16] w-[280px] h-[36px]
                    bg-black text-gray-200 rounded  font-bold py-3 dark:bg-white dark:text-black"> Download CV</button>     
                                    
                    </div>
                 </div>
        </div>
    )
}
/* Background */

