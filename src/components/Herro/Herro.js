/* eslint-disable no-unused-vars */
import React from "react";
import "./Herro.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Navbar/Header";
import about from '../../assets/img/about.png'

const Herro = () => {
  return (
    <div className="navSection absolute top-0 left-0 "   >
    {/* <div className="innerNav"> */}
    <img src={about}/>

    {/* </div>  */}
    </div>
  );
};

export default Herro;
