export function Aboutme(){
    return ( 
        <div className="relative bg-zinc-100 dark:bg-gray-900 p-10 ">
            <div className="text-center" >
                  <button className="rounded-full bg-gray-200 my-5 dark:bg-gray-800 p-2">About me</button>
            </div>
             <div className=" md:flex md:gap-16 ">
                <img src="/images/me.jpg"  className="py-5 md:h-full my-auto h-[380px] w-[200px] md:align-items-center mx-auto md:flex-1 rounded-lg"/>
                <div className="py-5 mx-auto md:flex-1">
                    <p className="font-bold text-md my-4 ">Curious about me? Here you have it:</p>
                    <p className="text-gray-600">I'm passionate, <a href ="" className="underline underline-offset-1 ">self-proclaimed designer</a> who speacializes in full stack development (React.js & Node.js)
                    I am very enthusiastic about bringing the technical and visual aspects of digital
                    products to life.User experience, pixel perpect design, and writing clear, readeble, 
                    highly performant code matters to me. <br className="pt-3"/>

                    
                    </p>
                    <p className="text-gray-600 py-2">
                    And i'm proffesional <a href="" className="font-bold underline underline-offset-1">athlete.</a> I have been shooting for 12 years. 
                    </p>
                    <p className="py-3 text-gray-600">I began my journey as a web developer in 2024, and since then i've continued to grow and evolve as a developer, 
                        taking on new challenges and learning the latest 
                        technologies and learning the latest technologies along the way. 
                    </p>
                    <p className="py-3 text-gray-600">I'm building cutting-edge web
                         appliciations using modern technologies such as
                        Next.js Typescript, Nestjs, Tailwindcss, Shadcn and much more</p>
                    <p className="py-3 text-gray-600">Finally, some quick bits about me.</p>
                    <ul className="columns-2 text-gray-600 list-disc pl-5">
                            <li>B.E in Computer Engineering</li>
                            <li>Avid learner</li>
                            <li>Full time freelancer</li>
                            <li>Aspiring indie hacker</li>
                    </ul>
                    <p className="py-3 text-gray-600">One last thing, I'm available for freelance work, so feel free to reach out and say hello! </p>
                </div>
            </div>
        </div>
        
    )
}