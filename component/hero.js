import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export function Hero() {
  return (
    <div className="p-20 bg-gray dark:bg-black ">
      <div className="ml-20 mr-20 my-8 md:flex md:is-reverse  md:flex-row-reverse gap-4">
        <img
          className="md:w-[250px] md:h-full md:flex-1  border shadow rounded-lg"
          src="/images/IMG_0007.jpg"
        />
        <div assName=" mt-5 md:mr-20 md:flex-1 ">
          <div className="italic text-2xl mt-16 ">I'am Munkhzul </div>
          <p className="text-md text-align-center text-gray-600 pt-5 mb-4 text-wrap rounded-md">
            I'm full stack developer (React & Node.js) with a focus on creating
            (and occasionally designing ) exceptional digital experiences that
            are the fast, accessible, visually appelling, and responsive. Even
            though I have been creating web appliciations for over one year I
            still love it was as if was something new.
          </p>
          <div className="flex text-md  gap-4 mt-8">
            <img
              src="/images/location.png"
              className="w-5 h-5 dark:bg-white "
            />
            <p>Ulaanbator, Mongolia</p>
          </div>
          <div className="text-md flex gap-4 mt-2">
            <img
              src="http://localhost:3000/images/check.png"
              className="w-5 h-5"
            />
            <p className="">Available for new project</p>
          </div>
          <div className="flex gap-3 mt-10">
            <a href="https://github.com/munkhuzl">
              <FiGithub
                className=" text-gray-400 hover:text-black hover:size-8"
                size={24}
              />
            </a>
            <a href="">
              <CiTwitter
                className=" text-gray-400 hover:text-black hover:size-8"
                size={26}
              />
            </a>
            <a href="https://www.instagram.com/zulaaa.o/">
              <FaInstagram      className=" text-gray-400 hover:text-black hover:size-8"
                size={24}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="flex-1 items-center order-1 flex-grow-0 w-[280px] h-[300px] justify-center"></div> */
}
