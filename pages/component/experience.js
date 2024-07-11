import { Upwork } from "./upwork";

export function Experience (){
    return (
        <div className="relative bg-zinc-100 dark:bg-gray-950 align-items-center pt-10 ">
            <h1 className="text-center pt-5 ">Experience</h1>
            <p className="text-center">Here is a quick summary of my most recent experiences:</p>
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
                projects="{lorem ipsum} {dotrgar}"   
            />
        </div>
    )
}