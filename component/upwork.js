// const month= new Date().getMonth();
// const currentYear = Date().getFullYear();
export function Upwork (props){
return (
    <div className="bg-gray-300 relative md:flex md:justify-between rounded-md">
         <div className="bg-white text-center  md:flex   md:gap-10 p-5  rounded-md dark:bg-gray-800 md:content-start md:pt-0">
            <h1 className="text-green-500 text-start md:flex-1 my-2  text-2xl ">Upwork</h1>
           <div className="md:flex md:flex-row-reverse gap-4">
                <div className="md:flex-1 my-3 text-start text-gray-600 md:flex-row-reverse ">
                    <p> {props.date}</p>
                </div>

                <div className="my-2 text-gray-600 "> 
                    <h1 className="font-bold flex-1 dark:text-white">{props.position}</h1>
                    <ul className="ml-4 list-disc text-gray-600 dark:text-white">
                        <li>{props.projects} </li>
                        <li>{props.projects}</li>
                         <li>{props.projects} </li>
                        <li>{props.projects}</li>
                    
                    </ul>
                </div>
            
           </div>
            

         </div>
    </div>
   
)
}

