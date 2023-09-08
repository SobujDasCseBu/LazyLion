import React from "react";
import "./Roar.css";
import Card from "../Card/Card";
import test1 from "../../assets/img/test1.png";
import test2 from "../../assets/img/test2.png";
import test3 from "../../assets/img/test3.png";
import test4 from "../../assets/img/test4.png";
import test5 from "../../assets/img/test5.png";
import test6 from "../../assets/img/test6.png";
import card1 from "../../assets/card/card1.png";
import card2 from "../../assets/card/card2.png";
import card3 from "../../assets/card/card3.png";

const Roar = () => {
  return (
    <div className=" roar_main bg-black">
      <div className="large_container">
      <div className="first ">
          <div className="middle flex justify-center  items-center  ">
            
            <div className="   aboutRoar flex flex-col   py-8 justify-center items-center">
              <h2 className="text-[#F19D00] font-bold   px-9">
                THE ROAR OF A GLOBAL PRIDE
              </h2>
            </div>
          </div>
        </div>
        <div className="cardContainer py-5">
          <div className="slideContainer ">
            <Card
              key="1"
              img={test1}
              name="Sara Frankel (NYC-born + raised)"
              designamtion="@thesarafrankel"
              about={[
                "Thank you",
                "@Cryptui2 !",
                "#ROARgin gift arrived ❤️👑🤝🙌🏾❤️‍🔥",
              ]}
              cardimg={card1}
            />

            <Card
              key="17"
              img={test2}
              name="DDKing.eth"
              designamtion="@DefiDuelKing"
              about={[
                "🔥 WOOOOW",
                "@NFT2PRINTCOM",
                "you have outdone yourself!!!",
                "I’m in love with my 3D Lions on my desk!!!",
              ]}
              cardimg={card2}
            />

            <Card
              key="14"
              img={test3}
              name="MegaHz.eth"
              designamtion="@MegaHzNFT"
              about={["🔥 WOOOOW", "My happy place"]}
              cardimg={card3}
            />

            <Card
              key="5"
              img={test1}
              name="Sara Frankel (NYC-born + raised)"
              designamtion="@thesarafrankel"
              about={[
                "Thank you",
                "@Cryptui2 !",
                "#ROARgin gift arrived ❤️👑🤝🙌🏾❤️‍🔥",
              ]}
              cardimg={card1}
            />

            <Card
              key="4"
              img={test2}
              name="DDKing.eth"
              designamtion="@DefiDuelKing"
              about={[
                "🔥 WOOOOW",
                "@NFT2PRINTCOM",
                "you have outdone yourself!!!",
                "I’m in love with my 3D Lions on my desk!!!",
              ]}
              cardimg={card2}
            />

            <Card
              key="15"
              img={test3}
              name="MegaHz.eth"
              designamtion="@MegaHzNFT"
              about={["🔥 WOOOOW", "My happy place"]}
              cardimg={card3}
            />
          </div>
        </div>



        <div className="cardContainer py-5">
          <div className="slideContainerright ">
            <Card
              key="8"
              img={test1}
              name="Sara Frankel (NYC-born + raised)"
              designamtion="@thesarafrankel"
              about={[
                "Thank you",
                "@Cryptui2 !",
                "#ROARgin gift arrived ❤️👑🤝🙌🏾❤️‍🔥",
              ]}
              cardimg={card3}
            />

            <Card
              key="9"
              img={test2}
              name="DDKing.eth"
              designamtion="@DefiDuelKing"
              about={[
                "🔥 WOOOOW",
                "@NFT2PRINTCOM",
                "you have outdone yourself!!!",
                "I’m in love with my 3D Lions on my desk!!!",
              ]}
              cardimg={card2}
            />

            <Card
              key="10"
              img={test3}
              name="MegaHz.eth"
              designamtion="@MegaHzNFT"
              about={["🔥 WOOOOW", "My happy place"]}
              cardimg={card3}
            />

            <Card
              key="11"
              img={test1}
              name="Sara Frankel (NYC-born + raised)"
              designamtion="@thesarafrankel"
              about={[
                "Thank you",
                "@Cryptui2 !",
                "#ROARgin gift arrived ❤️👑🤝🙌🏾❤️‍🔥",
              ]}
              cardimg={card1}
            />

            <Card
              key="12"
              img={test2}
              name="DDKing.eth"
              designamtion="@DefiDuelKing"
              about={[
                "🔥 WOOOOW",
                "@NFT2PRINTCOM",
                "you have outdone yourself!!!",
                "I’m in love with my 3D Lions on my desk!!!",
              ]}
              cardimg={card2}
            />

            <Card
              key="13"
              img={test3}
              name="MegaHz.eth"
              designamtion="@MegaHzNFT"
              about={["🔥 WOOOOW", "My happy place"]}
              cardimg={card3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roar;
