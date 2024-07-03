import Image from "next/image";


export function Header (){
    return (
        <div className="flex h-50 p-10 border-2 border-rose-200 bg-gray dark:bg-slate-800">
            <img src="http://localhost:3000/images/Pic.png"/>
            <h1 className="">Hi I'm Sagar 🙋‍♂️</h1>
            <p>I'm full stack developer (React & Node.js) with a focus on creating (and occasionally designing ) exceptional digital experiences that are the fast, accessible, visually
                appe
            </p>
        </div>
   
    )
}