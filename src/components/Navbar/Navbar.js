/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from "../../assets/logo.png";
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaLinkedinIn,
} from "react-icons/fa";



const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-[65px] top-3 mx-9 sticky z-50   bg-black">
      {/* logo section */}
      <div className=" ml-5 font-bold text-2xl cursor-pointer flex items-center gap-1">
        {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/>
                <span>Inscribe</span> */}
        <img src={logo} alt="Logo" className="h-[40px] w-[40px] " />
      </div>
      {/* Menu icon */}

      {/* linke items */}
      <ul
        className={` bg-black lg:bg-none lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-6 pr-6 lg: mr-[-20%] xl:mr-[-35%] 2xl:mr-[-45%] transition-all duration-500  ease-in md:space-x-8 ${
          open ? "top-20" : "top-[-490px]"
        }`}
      >
        <li className="hidden"></li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="text-[#CFA817]  hover:bg-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 pl-3 pr-4 py-2 lg:hover:text-[#CFA817] lg:p-0 font-medium flex items-center justify-between w-full lg:w-auto  "
          >
            Glitch's Army
          </a>
        </li>

        <li>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="text-white hover:bg-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 pl-3 pr-4 py-2 lg:hover:text-[#CFA817] lg:p-0 font-medium flex items-center justify-between w-full lg:w-auto"
          >
            Members
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="dropdownNavbar"
            className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
          ></div>
        </li>
        <li>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="text-white hover:bg-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 pl-3 pr-4 py-2 lg:hover:text-[#CFA817] lg:p-0 font-medium flex items-center justify-between w-full lg:w-auto"
          >
            More{" "}
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="dropdownNavbar"
            className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
          ></div>
        </li>
        <li>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="text-white hover:bg-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 pl-3 pr-4 py-2 lg:hover:text-[#CFA817] lg:p-0 font-medium flex items-center justify-between w-full lg:w-auto"
          >
            Buy
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="dropdownNavbar"
            className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
          ></div>
        </li>
        <li></li>


      </ul>
      <ul  className={`ul_manu_links hidden sm:block sm:flex sm:items-center sm:pb-0 pb-12 absolute sm:static  sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-6 pr-6 ease-in sm:space-x-8  transition-all duration-500 sm:mr-[-30%] md:mr-[-45%] lg:mr-0`} >
      <li>
          <FaDiscord className="text-white text-[20px] hidden sm:block" />
        </li>

        <li>
          <FaTwitter className="text-white text-[20px] hidden sm:block" />
        </li>

        <li>
          <FaInstagram className="text-white text-[20px] hidden sm:block " />
        </li>

        <li>
          <FaLinkedinIn className="text-white bg-none text-[20px] hidden sm:block " />
        </li>

        <li></li>
        <li
          className={`${
            open
              ? ""
              : "border solid border-white  px-[20px] py-[12px] p-1 rounded hidden sm:block "
          } `}
        >
          <a href="#" className="text-white text-[16px] leading-normal font-[500] ">
            CONNECT
          </a>
        </li>
      </ul>

      {/* button */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer lg:hidden w-9 h-9 mr-5 nav_icon"
      >
        {open ? (
          <XMarkIcon className="text-white  " />
        ) : (
          <Bars3BottomRightIcon className="text-white  " />
        )}
      </div>
    </div>
  );
};

export default Navbar;
