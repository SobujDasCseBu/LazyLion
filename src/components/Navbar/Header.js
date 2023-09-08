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
import about from '../../assets/img/about.png'
import "./Header.css";

const Header = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="  navsection shadow-md    ">  
    {/* <img src={about}/> */}
    </div>
  );
};

export default Header;
