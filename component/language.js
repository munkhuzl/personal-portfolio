
export function Language (props){
    return(
        <div className=" jusify-center ml-10 items-center flex flex-col  mb-5  w-[64px] h-[64px] md:ml-20 ">
            <img className="rounded w-[56px] h-[64px]" src={props.img}/>
            <p className="text-center">{props.name}</p> 
        </div>
    )
}
