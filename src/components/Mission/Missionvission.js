
import React from "react";
import "./Mission.css";
import Vince1 from "../../assets/img/Vince1.png";
import Missionv2 from '../../assets/mission-v2.png'

const MissionVission = () => {
  return (
    <>
      <div className="m-section mission_vison_section bg-[#68487C] text-white">
        <div className=" mission_container page_container">
        <div className="about_mission">
       
        <div className="about_wrapper  hidden lg:block  mt-6">
          
          <h3>Lazy Lions: The Kings and Queens <br/>
         of web3, revolutionizing <br/>
          entertainment</h3>
        </div>
        </div>
         <div className="mission_vision_wrap">
         <div className="leftSection">
            <img src={Missionv2} className="" />
          </div>
          <div className="rightSection">
            <div className="rightSection_wrap">
            <div className="vission">
              <h3 className="text-[80px] font-bold  lg:text-6xl ">ViSION</h3>
              <p className="">
                To dominate the future of entertainment and digital ownership
                through co-creation and innovation.
              </p>
            </div>

            <div className="mission py-4 flex flex-col ">
              <h3 className="text-[80px] font-bold lg:text-6xl">MISSION</h3>
              <p className="">
                To provide our right-holding us with a powerful & decentralized
                brand and to empower them in easily exploting their opportunity
                of IP across game,TV,Film and entertainment.
              </p>
            </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default MissionVission;
