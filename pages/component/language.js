
export function Language (props){
    return(
        <div className="">
            <img className="w-[64px] h-[64px]" src={props.img}/>
            <p className="text-start">{props.name}</p>
        </div>
    )
}