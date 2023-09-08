import React from "react";
import { FaTwitter } from "react-icons/fa";
import "./Card.css";

const Card = ({img,name,designamtion,about,cardimg}) => {
  return (
    <div className="scrollCard w-[420px] rounded items-center px-[24px] py-[32px]  mx-4 bg-[#0B0B0B] ">
        <div className=" CardInner w-[400px]  flex flex-col justify-around   h-full leading-3 ">
          <div className="profile flex  justify-between font-[Barlow] ">
            <div className="photo-wrapper  flex items-center">
              <img
                className="w-[44px] h-[44px] rounded-full mx-auto"
                src={img}
                alt="John Doe"
              />
              <div className="aboutProfile flex flex-col  ml-2 items-start ">
                <h3 className="text-center text-xl text-[#CFA817] text-[18px] ">
                  {name}
                </h3>
                <div className="text-center text-gray-400 text-[16px] font-semibold">
                  <p>{designamtion}</p>
                </div>
              </div>
            </div>
            <div className="profileIcon">
              <li className="list-none">
                <FaTwitter className="text-white text-[20px] mx-2" />
              </li>
            </div>
          </div>

          <div className="text-white font-[Barlow]  ">
            <table className=" my-3  ">
              <tbody>
              {about.map((item,index)=>(<tr  key={index}>
                  <td className="px-2 py-2 text-[20px]">
                    {item}
                  </td>
                </tr>))}
                {/* <tr>
                  <td className="px-2 py-2 text-[24px]">
                    Everywhere i got, I see her face
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="CardImg bottom-0">
            <img src={cardimg} className="h-full w-full" />
          </div>
      </div>
    </div>
  );
};

export default Card;
