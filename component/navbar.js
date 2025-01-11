import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
export function Navbar() {
  const [open, setOpen] = useState();
  const [download, setDownload] = useState();
  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }
  function DownloadCV() {
    {
      /* <script>
  document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'http://example.com/files/sample.pdf';
    link.download = 'sample.pdf'; // optional
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
</script> */
    }
  }
  return (
    <div className="flex fixed bg-white text-gray-900 dark:bg-black dark:text-white  align h-16 text-md  w-full  items-center z-10 ">
      <div className="ml-5 dark:text-white flex-1 ">SS/</div>
      <span className="text-right gap-10 flex  items-end mr-20">
        <Link
          href="#/aboutme"
          className="hidden lg:block text-right text-gray-600 hover:font-bold "
        >
          About
        </Link>
        <Link
          href="#work"
          className="hidden lg:block text-right text-gray-600 hover:font-bold "
        >
          Work
        </Link>
        <Link
          href="#/testimonials"
          className="hidden lg:block text-right text-gray-600 hover:font-bold "
        >
          Testimonials
        </Link>
        <Link
          href="/contactme"
          className="hidden lg:block text-right text-gray-600 hover:font-bold "
        >
          Contact
        </Link>

        <div className="hidden lg:block text-right  order-last">
          <MdOutlineDarkMode className="hidden lg:block text-right text-gray-600 hover:font-bold mx-auto" />
        </div>
        <GiHamburgerMenu
          onClick={openMenu}
          className="lg:hidden mr-0 text-lg "
        />
      </span>
      <div className={open ? "block" : "hidden"}>
        <div
          className="fixed inset-0 bg-slate-500/90 z-10"
          onClick={closeMenu}
        ></div>
        <div className="fixed top-0 bottom-0 right-0 w-64 text-black bg-white shadow-lg dark:bg-slate-800 z-10">
          <div className="flex justify-between p-3">
            <div className="dark:text-white "> logo </div>
            <IoMdCloseCircleOutline
              onClick={closeMenu}
              className="mr-3 dark:text-white"
            />
          </div>
          <div className="p-3 dark:text-white ">
            <span className="flex flex-col">
              <div link={"/aboutme.js"} className="py-1">
                About
              </div>
              <div href="/work" className="py-1">
                Work
              </div>
              <div href="/testimonials" classame="py-1">
                Testimonials
              </div>
              <div href="/contact" className="py-1">
                Contact
              </div>
              {/* <div className="flex justify-between px-3 pb-3">
                <p className="dark:text-white py-1">Switch Theme</p>
                <MdOutlineDarkMode className="dark:text-white" />
                <div></div>
              </div> */}
            </span>
          </div>
          <button
            className="flex justify-center p-[6px]  w-full h-[36px] m-6
                    bg-black text-gray-200 rounded  font-bold dark:bg-white dark:text-black hover:font-bold"
          >
            {" "}
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
