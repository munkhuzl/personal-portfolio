// const month= new Date().getMonth();
// const currentYear = Date().getFullYear();
export function Upwork (props){
return (
    <div className="bg-gray-300 relative">
         <div className="bg-white w-[343px] text-center  md:flex w-[848px] justify-center  p-10 border-2 dark:bg-gray-800 ">
            <h1 className="text-green-500 md:flex-1  text-2xl ">Upwork</h1>
            <div className="md:flex-1">
                <p> {props.date}</p>
            </div>
            <div>
                <h1 className="font-bold flex-1">{props.position}</h1>
                <ul className="list-disc">
                    <li>{props.projects} </li>
                    <li>{props.projects}</li>
                
                </ul>
            </div>
        

         </div>
    </div>
   
)
}