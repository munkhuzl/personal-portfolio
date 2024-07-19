import { Language } from "./language"

export function Fiskill(props){
    return (

        <div className=" text-center shadow rounded-md   md:flex  m-10 shadow">
             <div className="  bg-gray-200 dark:bg-gray-800 fit-content flex justify-center rounded-md md:flex-1 align-center ">
                <img className="w-full shadow lg:w-[576px] h-[480px] " src={props.web}/>  
             </div>
           <div className=" md:flex-1 bg-gray-100 dark:bg-gray-900 rounded-md">
                <h1 className="font-bold text-start py-5 pl-5">{props.skill}</h1>
            <div className="">
                <p className="text-start pb-5 pl-5">{props.text1}</p>
            </div> 
               
                <div className="columns-3   md:flex flex-wrap text-start  ">
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
 function LanName(props) {
    return (
         <div>
        <button className="rounded-full p-1 m-3 bg-gray-200 dark:bg-gray-800">{props.LanName}</button>
    </div> )
}
   
   