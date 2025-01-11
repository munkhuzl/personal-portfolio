import { isRedirectError } from "next/dist/client/components/redirect";
import Link from "next/link";
import { CiShare1 } from "react-icons/ci";

const worksData = [
  {
    skill: "E-Commerce",
    text1:
      "Client, admin web site, Client can search products by size, color and price. And can save products to wishlist, and buy them. Admin can add, update, delete product by size, color and price",
    web: "/images/e-commerce.png",
    link: "https://ecommercefrontend-beige.vercel.app/",
  },
  {
    web: "/images/amidos.png",
    skill: "Amido's",
    text1:
      "Restaurant web site. Admin and client side. Clients can see special food, and order food by quantity. Also can book table. And see where delivery staff going on google map. Admin can add, update, delete food by price, ingredients and name etc, ",
    link: "https://amidos.vercel.app/",
  },
  {
    skill: "HR-leave request",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    web: "/images/hr.png",
    link: "",
  },
  {
    skill: "Sassy nail bar",
    text1:"Nail booking web site",
    web: "/images/sassy.png",
    link: "sassy.png",
  },
];
export function Works() {
  return (
    <div className="relative dark:bg-gray-900 w-full bg-white gap-4">
      <div className="text-center dark:bg-black">
        <button className=" items-center rounded-full bg-gray-200 my-5 dark:bg-gray-800 p-2 dark:text-white">
          Work
        </button>
        <p className="text-center dark:text-white">
          Some of the noteworthy projects i have built:
        </p>
        <div className="dark:bg-black ">
          {worksData.map((work, index, LanName) => (
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
    <div
      className={`text-center shadow rounded-md ${
        isReverse ? "md:flex-row-reverse" : ""
      }  md:flex  m-10 shadow`}
    >
      <div className="  bg-gray-200 dark:bg-gray-800 fit-content flex justify-center rounded-md md:flex-1 align-center ">
        <a href={work.link}>
        <img className="w-full  shadow  h-[480px] " src={`${work.web}`} />  
        </a> 
      </div>
      <div className=" md:flex-1 bg-gray-100 dark:bg-gray-900 rounded-md">
        <h1 className="font-bold text-2xl text-start py-5 px-5">
          {work.skill}
        </h1>
        <div className="">
          <p className="text-start pb-5 px-5">{work.text1}</p>
        </div>
        <div className="columns-3   md:flex md:flex-wrap text-start  ">
          <LanName LanName="React" />
          <LanName LanName="GraphQl" />
          <LanName LanName="Typescript" />
          <LanName LanName="Nest.js" />
          <LanName LanName="PostgreSQL" />
          <LanName LanName="Tailwind.css" />
          <LanName LanName="Figma" />
          <LanName LanName="PostgreSQL" />
          <LanName LanName="Git" />
          <LanName LanName="Github" />
          <LanName LanName="MySQL" />
          <LanName LanName="MongoDB" />
          <LanName LanName="GraphQl" />
        </div>
        <a href={work.link}>
          <CiShare1 size={36} className="text-2xl ml-6 my-6 md:mb-8 "  />
        </a>
      </div>
        
    </div>
    
  );
}
function LanName(props) {
  return (
    <div>
      <button className="rounded-full p-1 m-3 bg-gray-200 dark:bg-gray-800">
        {props.LanName}
      </button>
    </div>
  );
}
