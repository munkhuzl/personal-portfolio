import { Upwork } from "./upwork";

export function Experience (){
    return (
        <div className="relative bg-zinc-100 dark:bg-gray-900 align-items-center pt-10 text-center w-full">
            <button className=" items-center rounded-full bg-gray-200 my-5 dark:bg-gray-800 p-2">Experience</button>
            <p className="text-center  ">Here is a quick summary of my most recent experiences:</p>
            <div className="flex flex-col justify-center items-center gap-[48px] my-5 text-start  pb-20">
            <Upwork 
                date="Nov 2021-Present"
                position="Sr.Frontend Developer"  
                projects="{lorem ipsum} {dotrgar}"   
            />
             <Upwork 
                date="Nov 2021-Present"
                position="Sr.Frontend Developer"  
                projects="{lorem ipsum} {dotrgar}"   
            />
             <Upwork 
                date="Nov 2021-Present"
                position="Sr.Frontend Developer"  
                projects="mt mgri anrga, agrag,"  
            />     
             </div>
        </div>
    )
}