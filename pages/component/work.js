import { Fiskill } from "./Fiskill"



export function Work (props){
    return (
        <div className="">
            <div className="relative">
                <h1 className="mt-5 text-center rounded-full  w-16 h-5 bg-green-500 md:text-center  ">Work</h1>
                <p className="text-center ">Some of the noteworthy projects i have built:</p>
           
            <Fiskill 
            web="http://localhost:3000/images/Picture.png"
            skill="Fiskill"
            text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in 
            faucibus orci luctus et ultrices posuere cubilia curae."/>
        
            </div>
            
           
        </div>
       
    )
}