import { Language } from "./language"
import { LanName } from "./LanName"

export function Fiskill(props){
    return (

        <div className=" text-center md:flex mx-10">
             <div className="md:flex-1 mt-10 bg-gray-200 dark:bg-gray-800">
                <img className=" justify-center items-center " src={props.web}/>  
             </div>
           <div className=" md:flex-1 bg-gray-100 dark:bg-gray-900">
                <h1 className="font-bold text-start py-5">{props.skill}</h1>
                <p className="text-start pb-5">{props.text1}</p>
                 <div className="columns-3 md:flex columns-5 gap-15 text-start p-3">
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
