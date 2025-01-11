import { useReducer, useRef } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { PiCopySimpleDuotone } from "react-icons/pi";

export function Contact() {
  return (
    <div className=" flex flex-col items-center w-full ">
      <button className=" items-center rounded-full bg-gray-200 my-5 dark:bg-gray-900 p-2">
        Get in touch
      </button>
      <p className="lg:w-[400px] text-wrap text-center text-gray-600">
        What's next? Feel free to reach out.
      </p>
      <div className="text-3xl  pt-5 flex gap-4">
        <AiOutlineMessage />
        munkhzul.odonkhuu@gmail.com
        <button>
          {" "}
          <PiCopySimpleDuotone />
        </button>
      </div>

      <div className="text-3xl py-5">+976 99477808</div>
      <div className=" py-5 ">
        You may also find me on these platforms:
        <div className="flex  gap-3 justify-center mt-3">
          <a href="">
            <img
              src="http://localhost:3000/images/Icon%20Button.png/"
              className="hover:bg-black hover:size-12"
            />
          </a>
          <a href="">
            <img
              src="http://localhost:3000/images/Icon%20Twitter.png"
              className="hover:bg-black hover:size-12"
            />
          </a>
          <a href="">
            <img
              src="http://localhost:3000/images/Icon%20Figma.png"
              className="hover:bg-black hover:size-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
