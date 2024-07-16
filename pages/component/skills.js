import { Language } from "./language"
export function Skills (){
    return (
        <div className="bg-white dark:bg-slate-800 pb-10 text-center">
            <button className="rounded-full bg-gray-200 my-5 dark:bg-gray-800 p-2">Skills</button>
            <p className="text-center pb-10">The skills, tools and technologies I am really good at:</p>
            <div className="columns-5 md:flex  gap-10 ">
            <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="React"/>
                <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="MongoDb"/>
                <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="Cypress"/>
                <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="React"/>
                    <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="Git"/>
                <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="Tailwind.css"/>
                    <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="Node.js"/>
                <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="Next.js"/>
                <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name=""/>
                    <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="Javascript"/>
                <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="Typescript"/>
                 </div> 
        </div>
    )
}