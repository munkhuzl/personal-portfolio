import { useReducer, useRef } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { PiCopySimpleDuotone } from "react-icons/pi";



export function Contact() {

    return (
        <div className=" flex flex-col items-center w-full ">
            <button className=" items-center rounded-full bg-gray-200 my-5 dark:bg-gray-900 p-2">Get in touch</button>
            <p className="lg:w-[576px] text-wrap text-center text-gray-600">What's next? Feel free to reach out
                to me if you're looking for a developer, have a query,
                or simply want to connect.</p>
            <div className="text-3xl  pt-5 flex gap-4">
                <AiOutlineMessage />
                reachsagarshah@gmail.com 
                <button>   <PiCopySimpleDuotone  /></button>
            </div>               
            <div className="text-3xl py-5">+918980500565</div>
            <div className=" py-5 ">You may also find me on these platforms:
                <div className="flex  gap-3 justify-center mt-3">
                    <img src="http://localhost:3000/images/Icon%20Button.png" />
                    <img src="http://localhost:3000/images/Icon%20Twitter.png" />
                    <img src="http://localhost:3000/images/Icon%20Figma.png" />
                </div>
            </div>

        </div>

    )
}

// const CopyButton = () => {
//   const { copy, state } = useClipboard()

//   if (state.status === "unsupported") {
//     return null
//   }

//   if (state.status === "error") {
//     return <button>{state.message}</button>
//   }

//   if (state.status === "copied") {
//     return <button>Already copied!</button>
//   }

//   return <button onClick={() => copy("Some content to copy")}>Copy</button>
// }