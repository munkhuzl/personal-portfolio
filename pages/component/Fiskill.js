import { Language } from "./language"
export function Fiskill(props){
    return (

        <div className=" text-center p-10 pt-10 md:flex">
             <div className="md:flex-1 m-5">
                <img className="" src={props.web}/>  
            
             </div>
           <div className="m-10 md:flex-1">
                <h1 className="font-bold">{props.skill}</h1>
                <p className="text-start">{props.text1}</p>
                  <Language name="React"/>
             <Language name="React"/>
             <Language name="React"/>
            </div> 
           
        </div>

        
    )
}
