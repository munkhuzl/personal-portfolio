// const month= new Date().getMonth();
// const currentYear = Date().getFullYear();
export function Upwork (props){
return (
    <div className="bg-gray-300 relative flex flex-col ">
         <div className="bg-white text-center  md:flex  justify-center  p-10 border-2 dark:bg-gray-800 ">
            <h1 className="text-green-500 text-start md:flex-1 my-2  text-2xl ">Upwork</h1>
            <div className="md:flex-1 my-3 text-start text-gray-600 ">
                <p> {props.date}</p>
            </div>
            <div className="my-2">
                <h1 className="font-bold flex-1 dark:text-white">{props.position}</h1>
                <ul className="ml-4 list-disc text-gray-600 dark:text-white">
                    <li>{props.projects} </li>
                    <li>{props.projects}</li>
                
                </ul>
            </div>
        

         </div>
    </div>
   
)
}

