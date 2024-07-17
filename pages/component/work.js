import { Fiskill } from "./Fiskill"



export function Work (props){
    return (
        <div className="relative bg-slate-900">
            <div className="text-center dark:bg-black">
            <button className=" items-center rounded-full  my-5 dark:bg-gray-800 p-2">Work</button>
                <p className="text-center ">Some of the noteworthy projects i have built:</p>
          
           <div className="bg-black">
                <Fiskill 
               
                skill="Fiskill"
                text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in 
                faucibus orci luctus et ultrices posuere cubilia curae."
                web="http://localhost:3000/images/Picture.png"/>
                <Fiskill 
                web="http://localhost:3000/images/Picture.png"
                skill="Fiskill"
                text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in 
                faucibus orci luctus et ultrices posuere cubilia curae."/>
                <Fiskill 
                web="http://localhost:3000/images/Picture.png"
                skill="Fiskill"
                text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in 
                faucibus orci luctus et ultrices posuere cubilia curae."/>
             </div>
            </div>
            
           
        </div>
       
    )
}