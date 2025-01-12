import { Language } from "./language"
export function Skills (){
    return (
        <div className="bg-white dark:bg-gray-950 p-10 text-center w-full ">
            <button className="rounded-full bg-gray-200 my-5 dark:bg-gray-800 p-2">Skills</button>
            <p className="text-center pb-10">The skills, tools and technologies I am really good at:</p>
            <div className="grid grid-cols-3 md:grid md:grid-cols-8 gap-2 md:justify-items-center justify-center">
            <Language 
                img="/images/html.png"
                name="HTML "/>
                <Language 
                img="/images/icon-nest.png"
                className="hover: --tw-rotate: 3deg transform: translate(var(--tw-translate-x)"
                name="Nest.js"/>
                <Language 
                img="http:/images/icon-react.png"
                name="React"/>
                    <Language 
                img="/images/icon-git.png"
                name="Git"/>
                  <Language 
                img="/images/icon-nextjs.png"
                name="Next.js"/>
               
                <Language 
                img="/images/icon-tailwindcss.png"
                name="Tailwind.css"/>
                    <Language 
                img="/images/icon-nodejs.png"
                name="Node.js"/>
                <Language 
                img="http://localhost:3000/images/Icon%20Button.png"
                name="Github"
                classNam="border "/>
               
                <Language 
                img="/images/icon-figma.png"
                name="Figma"
                className="h-[56px] w-[56px]"/>
                 <Language 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
                name="Typescript"/>
                <Language 
                img="/images/icon-nest.png"
                name="Nest.js"/>
                <Language 
                img="/images/icon-react.png"
                name="React"/>
                    <Language 
                img="/images/graphql.png"
                name="GraphQl"/>
                 <Language 
                img="/images/express-js.png"
                name="Express.js"/>
                 </div> 
        </div>
    )
}
