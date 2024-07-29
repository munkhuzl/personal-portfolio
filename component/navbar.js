import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
export function Navbar () {
    const [open, setOpen] = useState();
     function openMenu(){
        setOpen(true);
     }

     function closeMenu(){
        setOpen(false);
     }

    return (
        <div className="flex fixed bg-white text-gray-900 dark:bg-black dark:text-white  align h-10  w-full  items-center z-10 ">
         <div className="ml-5 dark:text-white flex-1 " >
             SS/
         </div>
            <span className="text-right gap-10 flex text-left  items-end mr-20">
                <Link href={'/aboutme.js'} className="hidden lg:block text-right text-gray-600">About</Link>
                <Link href={'work'} className="hidden lg:block text-right text-gray-600">Work</Link>
                <Link href={'/'} className="hidden lg:block text-right text-gray-600">Testimonials</Link>
                <Link href={'/contactme'} className="hidden lg:block text-right text-gray-600">Contact</Link>
                <Link href={'/about'} className="hidden lg:block text-right text-gray-600">Switch theme</Link>
                <div className="hidden lg:block text-right flex order-last">
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
                    <span className="flex flex-col">
                    <Link href={'/aboutmw.js'} className="py-1">About</Link>
                        <Link href={'/about'} className="py-1">Work</Link>
                        <Link href={'/about'} className="py-1">Testimonials</Link>
                        <Link href={'/about'} className="py-1">Contact</Link>
                        <div className="flex justify-between px-3 pb-3">
                        <p className="dark:text-white py-1">Switch Theme</p>
                        <MdOutlineDarkMode className="dark:text-white"/>
                    </div>
                    </span>
                       

                         {/* <div  className=" py-1"> <a href="" className="py-3"> About </a>  </div> 
                         <div  className=" py-1">  <a href="text-gray-600" > Work </a></div>
                         <div  className=" py-1"> <a href=""> Testimonials </a></div>
                        <div  className=" py-1"> <a href="" > Contact</a></div> */}
                    </div>
                   
                    <button className="flex justify-center py-[6px] px-[16] w-[280px] h-[36px]
                    bg-black text-gray-200 rounded  font-bold py-3 dark:bg-white dark:text-black"> Download CV</button>     
                                    
                    </div>
                 </div>
        </div>
    )
}

