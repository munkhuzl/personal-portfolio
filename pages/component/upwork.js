// const month= new Date().getMonth();
// const currentYear = Date().getFullYear();
export function Upwork (props){
return (
    <div className="bg-gray-300 w-30 md:flex p-10 border-2 ">
        <h1 className=" md:flex-1 ">Upwork</h1>
        <div className="md:flex-1">
             <p> {props.date}</p>
        <h1 className="font-bold">{props.position}</h1>
        <ul>
            <li>{props.projects}
            </li>
        </ul>
        </div>
       

    </div>
)
}