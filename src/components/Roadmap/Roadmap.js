/* eslint-disable no-unused-vars */
import React from "react";
import image from "../../assets/roar-mobile 3.png";
import frameImage from "../../assets/Frame 1000001061.png";
import "./roadmap.css";
import logo from "../../assets/logo.png";

const Roadmap = () => {
  return (
    <div className=" w-[100%] relative flex flex-col font-barlow-condensed roadmap_wrapper bg-black flex justify-center items-center">
      <div className="timeline_wrap relative w-[95%] bg-[#F19D00] flex flex-col roadmap_content_wrap rounded-[40px] mt-9 sm:h-[400px]">
       <div className="timeline_main_wrap">
       <h1 className="text-[#FAFAFA] uppercase font-[700] text-[32px] md:text-[72px] leading-[60px] bold flex">
          Our Journey
        </h1>
        <div className="timeline sm:py-6 sm:right-0  flex sm:flex-col md:py-12 ">
          <div className="line flex flex-col sm:flex-row ml-8  sm:w-full sm:-ml-12">
            <div className="line1 bg-[#4C1638] sm:w-2/4 sm:h-[1px] w-[2px] h-[150px]"></div>
            <div className="line2 sm:w-2/4 sm:h-[1px] h-[150px] w-[2px] bg-[#FAFAFA] opacity-30"></div>
          </div>
          <div className=" viewjourney flex flex-col sm:flex-row   items-starts justify-between -ml-3 sm:w-full sm:-ml-12 sm:-mt-2 ">
            <div className="image_Icon h-[32px] w-[32px] rounded-full flex items-center justify-center bg-black">
              <img src={logo} className=" h-[15px] w-[15px]" />
            </div>
            <button className="jouneyButton uppercase rounded bg-[#4C1638] py-[8px] px-[20px] flex justify-center items-center text-white cursor-pointer -ml-2 sm:-mt-4">ViewFull Timeline</button>
            <div className="bullet w-[15px] h-[15px] bg-[#4C1638] rounded-full ml-1"></div>
          </div>
        </div>
        <div className="bottom sm:w-3/4 sm:right-0  absolute sm:static sm:flex sm:flex-col  top-[12%] left-16  ">
          
        <h3 className="text-[#FAFAFA]  font-[400] text-[20px] md:text-[25px] md:py-3 leading-[32px] flex  ">
          7th August 2021
        </h3>
        <p className="text-[#FAFAFA]  font-[400] text-[16px] leading-[16px] flex ">
          Original collection launched August 7th 2021
        </p>
        </div>
      <div className="tiger_images sm:absolute sm:bottom-0 sm:left-0">
        <img className="md:h-[550px]"
          src={image}
          alt="image"
        />
      </div>
       </div>
      </div>
    </div>
  );
};

export default Roadmap;
