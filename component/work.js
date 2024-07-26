import { isRedirectError } from "next/dist/client/components/redirect";
import { CiShare1 } from "react-icons/ci";

const worksData = [
    {
        skill: "Fiskill",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        web: "/images/fisk.png",
    },
    {
        web: "/public/images/fisk.png",
        skill: "Skill",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
        skill: "Fiskill",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        web: "/Users/24LP1786/Desktop/personal-portfolio/public/images/Fisk.png",
    },
]
export function Works() {
    return (
        <div className="relative dark:bg-gray-900 w-full bg-white ">
            <div className="text-center dark:bg-black">
                <button className=" items-center rounded-full bg-gray-200 my-5 dark:bg-gray-800 p-2 dark:text-white">Work</button>
                <p className="text-center dark:text-white">Some of the noteworthy projects i have built:</p>

                <div className="dark:bg-black">
                    {worksData.map((work, index) => (
                        <div key={work.skill}>
                            <WorkCard work={work} isReverse={index % 2 === 1} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function WorkCard({ work, isReverse }) {
    return (
        <div className={`text-center shadow rounded-md ${isReverse ? "md:flex-row-reverse" : ""}  md:flex  m-10 shadow`}>
            <div className="  bg-gray-200 dark:bg-gray-800 fit-content flex justify-center rounded-md md:flex-1 align-center ">
                <img className="w-full shadow lg:w-[576px] h-[480px] " src={`${work.web}`} />
            </div>
            <div className=" md:flex-1 bg-gray-100 dark:bg-gray-900 rounded-md">
                <h1 className="font-bold text-start py-5 pl-5">{work.skill}</h1>
                <div className="">
                    <p className="text-start pb-5 pl-5">{work.text1}</p>
                </div>

                <div className="columns-3   md:flex md:flex-wrap text-start  ">
                    <LanName LanName="React" />
                    <LanName LanName="Storybook" />
                    <LanName LanName="Typescript" />
                    <LanName LanName="Nest.js" />
                    <LanName LanName="PostgreSQL" />
                    <LanName LanName="Tailwind.css" />
                    <LanName LanName="Figma" />
                    <LanName LanName="Cypress" />
                    <LanName LanName="PostgreSQL" />
                    <LanName LanName="Git" />
                    <LanName LanName="Git" />
                </div>
                <CiShare1 className="text-2xl ml-3 my-3 md:mt-8 " />
            </div>
        </div>
    )
}
function LanName(props) {
    return (
        <div>
            <button className="rounded-full p-1 m-3 bg-gray-200 dark:bg-gray-800">{props.LanName}</button>
        </div>)
}