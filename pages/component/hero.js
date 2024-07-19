import Image from "next/image";


export function Hero (){
    return (
        <div className="pt-10 pb-10  bg-gray dark:bg-black ">
           <div className="ml-20 mr-20  md:flex gap-0 ">
            
                <img className="w-[240px] h-[280px]  border-r-8 border-gray-200 border-b-8 border-gray-200" src="http://localhost:3000/images/Pic.png"/>
                
                <div className="text-2xl font-bold my-5 md:flex-1">Hi I'm Sagar 🙋‍♂️  </div>
                    <p className="text-align-center text-gray-600">I'm full stack developer (React & Node.js) with a focus on creating
                        (and occasionally designing ) 
                        exceptional digital experiences that are the fast, accessible, visually
                        appelling, and responsive. Even though I have been creating web appliciations for over 7 years, I still love it was as if was something new.
                    </p>
                    <div className="flex mt-0 gap-4 mt-5 my-2">
                        <img src="http://localhost:3000/images/location.png" className="w-5 h-5 dark:bg-white"/>
                        <p >Ahmedebad, India</p>
                    </div>
                    <div className="flex gap-4">
                        <img src="http://localhost:3000/images/check.png" className="w-5 h-5"/>
                        <p >Available for new project</p>
                    </div>              
                    <div className="flex gap-3 mt-10">
                        <img src="http://localhost:3000/images/Icon%20Button.png"/>
                        <img src="http://localhost:3000/images/Icon%20Twitter.png"/>
                        <img src="http://localhost:3000/images/Icon%20Figma.png"/>
                      </div>
            </div> 
        </div>
   
    )
}
{/* <div className="flex-1 items-center order-1 flex-grow-0 w-[280px] h-[300px] justify-center"></div> */}