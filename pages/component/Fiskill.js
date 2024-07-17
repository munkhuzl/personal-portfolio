import { Language } from "./language"
import { LanName } from "./LanName"

export function Fiskill(props){
    return (

        <div className=" text-center  md:flex  m-10">
             <div className=" mt-10 bg-gray-200 dark:bg-gray-800   justify-center items-center md:flex-1">
                <img className="  " src={props.web}/>  
             </div>
           <div className=" md:flex-1 bg-gray-100 dark:bg-gray-900">
                <h1 className="font-bold text-start py-5">{props.skill}</h1>
            <div className="w-[279px] md:w-[480px]">
                <p className="text-start pb-5">{props.text1}</p>
            </div> 
               
                 <div className="columns-3 w-[279px]   md:flex flex-wrap gap-15 text-start p-3 md:w-[480px]">
                      <LanName LanName="React"/>
                       <LanName LanName="Storybook"/>
                        <LanName LanName="Typescript"/>
                         <LanName LanName="Nest.js"/>
                          <LanName LanName="PostgreSQL"/>
                           <LanName LanName="Tailwind.css"/>
                            <LanName LanName="Figma"/>
                             <LanName LanName="Cypress"/>
                              <LanName LanName="PostgreSQL"/>
                                <LanName LanName="Git"/>
                                <LanName LanName="Git"/>
                 </div>
                
           
            </div> 
           
        </div>
    )
}
