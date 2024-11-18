import Image from "next/image";


export function Hero (){
    return (
        <div className="p-20 bg-gray dark:bg-black ">
           <div className="ml-20 mr-20 my-8 md:flex md:is-reverse  md:flex-row-reverse gap-4">
            
                <img className="md:w-[250px] md:h-full md:flex-1  border-r-8 border-b-8 border-gray-200 shadow rounded-md" src="/images/IMG_0007.jpg"/>
                
                <div assName=" mt-5 md:mr-20 md:flex-1 ">
                    <div className="italic text-2xl mt-16 ">I'am Munkhzul </div>
                    <p className="text-md text-align-center text-gray-600 pt-5 mb-4 text-wrap rounded-md">I'm full stack developer (React & Node.js) with a focus on creating
                        (and occasionally designing ) 
                        exceptional digital experiences that are the fast, accessible, visually
                        appelling, and responsive. Even though I have been creating web appliciations for over one year I still love it was as if was something new.
                    </p>
                    <div className="flex text-md  gap-4 mt-8">
                            <img src="/images/location.png" className="w-5 h-5 dark:bg-white "/>
                            <p >Ulaanbator, Mongolia</p>
                    </div>
                        <div className="text-md flex gap-4">
                            <img src="http://localhost:3000/images/check.png" className="w-5 h-5"/>
                            <p >Available for new project</p>
                        </div>              
                        <div className="flex gap-3 mt-10">
                            <img src="http://localhost:3000/images/Icon%20Button.png" className=""/>
                            <img src="http://localhost:3000/images/Icon%20Twitter.png"/>
                            <img src="http://localhost:3000/images/Icon%20Figma.png"/>
                        </div>
                         </div>
            </div> 
        </div>
   
    )
}
{/* <div className="flex-1 items-center order-1 flex-grow-0 w-[280px] h-[300px] justify-center"></div> */}