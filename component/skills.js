import { Language } from "./language"
export function Skills (){
    return (
        <div className="bg-white dark:bg-gray-950 pb-10 text-center w-full">
            <button className="rounded-full bg-gray-200 my-5 dark:bg-gray-800 p-2">Skills</button>
            <p className="text-center pb-10">The skills, tools and technologies I am really good at:</p>
            <div className="grid grid-cols-3 md:grid md:grid-cols-8 gap-2 md:justify-items-center">
            <Language 
                img="pages/images/icon-typescript.jpg"
                name="Typescript"/>
                <Language 
                img="http://localhost:3000/images/icon-nest.png"
                name="Nest.js"/>
                <Language 
                img="http://localhost:3000/images/icon-react.png"
                name="React"/>
                    <Language 
                img="http://localhost:3000/images/icon-git.png"
                name="Git"/>
                  <Language 
                img="http://localhost:3000/images/icon-nextjs.png"
                name="Next.js"/>
               
                <Language 
                img="http://localhost:3000/images/icon-tailwindcss.png"
                name="Tailwind.css"/>
                    <Language 
                img="http://localhost:3000/images/icon-nodejs.png"
                name="Node.js"/>
                <Language 
                img="http://localhost:3000/images/icon-nextjs.png"
                name="Next.js"/>
               
                    <Language 
                img="http://localhost:3000/images/icon-figma.png"
                name="Figma"/>
                <Language 
                img="http://localhost:3000/images/icon-sass.png"
                name="Sass"/>
                 <Language 
                img="http://localhost:3000/images/icon-storybook.png"
                name="Storybook"/>
                 <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="Typescript"/>
                <Language 
                img="http://localhost:3000/images/icon-nest.png"
                name="Nest.js"/>
                <Language 
                img="http://localhost:3000/images/icon-react.png"
                name="React"/>
                    <Language 
                img="http://localhost:3000/images/icon-git.png"
                name="Git"/>
                 </div> 
        </div>
    )
}
