export function Aboutme(){
    return ( 
        <div className="relative bg-zinc-100 dark:bg-gray-900  ">
            <div className="text-center" >
                  <button className="rounded-full bg-gray-200 my-5 dark:bg-gray-800 p-2">About me</button>
            </div>
          
             <div className=" md:flex">
                <img src="http://localhost:3000/images/aboutme.png" className=" py-3  md:align-items-center pl-20"/>
                <div className="p-20">
                    <p className="font-bold ">Curious about me? Here you have it:</p>
                    <p className="text-gray-600">I'm passionate, <a href ="" className="underline underline-offset-1 ">self-proclaimed designer</a>who speacializes in full stack development (React.js & Node.js)
                    I am very enthusiastic about bringing the technical and visual aspects of digital
                    products to life.User experience, pixel perpect design, and writing clear, readeble, 
                    highly performant code matters to me. <br className="pt-3"/>
                    </p>
                    <p className="py-3 text-gray-600">I began my journey as a web developer in 2015, and since then i've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey.  
                    </p>
                    <p className="py-3 text-gray-600">I'm building cutting-edge web appliciations using modern technologies such as
                        Next.js Typescript, Nestjs, Tailwindcss, Suoavase and much more</p>
                    <p className="py-3 text-gray-600">Finally, some quick bits about me.</p>
                    <ul className="columns-2 text-gray-600 list-disc pl-5">
                            <li>B.E in Computer Engineering</li>
                            <li>Avid learner</li>
                            <li>Full time freelancer</li>
                            <li>Aspiring indie hacker</li>
                    </ul>
                    <p className="py-3 text-gray-600">One last thing, I'm available for freelance work, so feel free to reach out and say hello! 
                            I promise i don't bite 😉.</p>
                </div>
            </div>
        </div>
       
        
    )
}