// const month= new Date().getMonth();
// const currentYear = Date().getFullYear();
export function Upwork (props){
return (
    <div className="bg-gray-300 relative">
         <div className="bg-white text-center  md:flex  justify-center  p-10 border-2 dark:bg-gray-800 ">
            <h1 className="text-green-500 md:flex-1 ">Upwork</h1>
            <div className="md:flex-1">
                <p> {props.date}</p>
            </div>
            <div>
                <h1 className="font-bold flex-1">{props.position}</h1>
                <ul>
                    <li>{props.projects} </li>
                    <li>{props.projects}</li>
                
                </ul>
            </div>
        

         </div>
    </div>
   
)
}