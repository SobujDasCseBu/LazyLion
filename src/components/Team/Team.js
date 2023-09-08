import React, { useState } from "react";
import "./Team.css";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import cofounder from "../../assets/teamImg/cofounder.png";
import communityManager from "../../assets/teamImg/communityManager.png";
import creativeArts from "../../assets/teamImg/creativearts.png";
import markettingassistant from "../../assets/teamImg/marketingassistant.png";
import projectmanager from "../../assets/teamImg/projectmanager.png";
import communityManagerbg from "../../assets/teamImg/communitymanagerbg.png";
import creativeartsbg from "../../assets/teamImg/creativeartsbg.png";
import markettingassistantbg from "../../assets/teamImg/markettingassitatnbg.png";
import projectmanagerbg from "../../assets/teamImg/projectmanagerbg.png";
import ninabMb from "../../assets/img/nibab-mb.png";
import ninabBig from "../../assets/img/nineb8.png";
import teamBG from "../../assets/img/teamBg.png"


const Team = () => {
  const [profileimg, setProfileimg] = useState(cofounder);
  const [designamtion, setDesignation] = useState("Co-Founder");
  const [color, setColor] = useState("#972342");
  const [name, setName] = useState("NINEB");
  const [activeDiv, setActiveDiv] = useState("box1");

  const handleDivClick = (divId) => {
    setActiveDiv(divId);
  };

  const handleClick = (img, des, name, color) => {
    setProfileimg(img);
    setDesignation(des);
    setName(name);
    setColor(color);
  };
  // console.log(profileimg, designamtion);
  return (
    <div className="team">
      <div className="page_container">
        <div className="aboutteam">
          <div className="teamLeft">
            <h2 className="lg:text-[80px] text-[35px] sm:text-[45px] xl:text-[100px] font-bold text-[#CFA817] ">
              THE TEAM
            </h2>
          </div>
          <div className="teamRight">
            <h3>PIONEERING WEB3 INNOVAION <br/>
            AND REVOLUTIONIZING <br/>
            ENTERTAINMENT</h3>
          </div>
        </div>
      </div>

      <div className="nineb">
        <div className="teamBg">
        <img src={teamBG} />

        </div>
        <div className={`ninab_main bg-[${color}]`}>
          <div className="page_container">
            <div className="team_wrap">
            
              <div className="team_items_wrap ">
                <div className="ninebLeft flex">
                  <img src={profileimg} />
                </div>
                <div className="ninebRight">
                <div className="ninebIcon pt-5 flex flex-row justify-between ">
                <div className="left"></div>
                <ul className="">
                  <li>
                    <a href="#">
                      <FaTwitter className="text-white text-[15px] mx-2" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <FaLinkedinIn className="text-white bg-none text-[15px] mx-4 " />
                    </a>
                  </li>
                </ul>
              </div>
                  <div className="ninebTitle">
                    <h2 className="font-bold text-[#CFA817] md:text-[100px] text-[40px] xl:text-[140px]">
                      {name}
                    </h2>
                    <p className="text-white text-[1.2rem]">{designamtion}</p>
                  </div>
                  <div className="shortProfile">
                   <div className="shortprofile_WRAP">
                   <div
                      className={` img px-2 box ${
                        activeDiv === "box1" ? "active" : ""
                      }`}
                    >
                      <img
                        src={cofounder}
                        onClick={() => {
                          handleClick(
                            cofounder,
                            "Co-Founder",
                            "NINEB",
                            "#972342"
                          );
                          handleDivClick("box1");
                        }}
                        className=" cursor-pointer nineb_img"
                      />
                    </div>

                    <div
                      className={` img px-2 box ${
                        activeDiv === "box3" ? "active" : ""
                      }`}
                    >
                      <img
                        src={communityManager}
                        onClick={() => {
                          handleClick(
                            communityManager,
                            "Community Manager",
                            "AARON",
                            "#8183D0"
                          );
                          handleDivClick("box3");
                        }}
                        className=" cursor-pointer bg-[#8183D0]"
                      />
                    </div>

                    <div
                      className={` img px-2 box ${
                        activeDiv === "box4" ? "active" : ""
                      }`}
                    >
                      <img
                        src={projectmanager}
                        onClick={() => {
                          handleClick(
                            projectmanager,
                            "Project Manager",
                            "RENGAR",
                            "#8183D0"
                          );
                          handleDivClick("box4");
                        }}
                        className=" cursor-pointer bg-[#8183D0]"
                      />
                    </div>

                    <div
                      className={` img px-2 box ${
                        activeDiv === "box5" ? "active" : ""
                      }`}
                    >
                      <img
                        src={creativeArts}
                        onClick={() => {
                          handleClick(
                            creativeArts,
                            "Creative arts",
                            "WOTS",
                            "#4E6350"
                          );
                          handleDivClick("box5");
                        }}
                        className=" bg-[#4E6350] cursor-pointer"
                      />
                    </div>

                    <div
                      className={` img px-2 box ${
                        activeDiv === "box6" ? "active" : ""
                      }`}
                    >
                      <img
                        src={markettingassistant}
                        onClick={() => {
                          handleClick(
                            markettingassistant,
                            "Marketing Assistant",
                            "ERIKA",
                            "#6B6C44"
                          );
                          handleDivClick("box6");
                        }}
                        className=" bg-[#6B6C44] cursor-pointer"
                      />
                    </div>

                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
