import { Languages } from "./languages"
export function Skills (){
    return (
        <div className="relative bg-white dark:bg-slate-950 ">
            <div className="text-center">Skills</div>
            <div className="text-center md:text-wrap">The skills, tools and technologies
                 I am really good at: </div>
            {/* <div className="grid grid-rows-2 md:grid-rows-6 "> */}
                <Languages apps="mk"/>
                <Languages logo="" apps="lan"/>
              
                {/* <div className="w-78px h-96px relative">
                    <img className="w-64px h-64px " src=""/>
                </div> */}
            {/* </div> */}
        </div>
        
    )
}