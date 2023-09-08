import { useEffect,useState } from "react";
import React from "react";
import "./Count.css";
import Number from "../Increment/Number";

const Count = () => {
 
    return <div>
        <div className="countSection bg-[#4C1638] text-[#F19D00] text-xl">
            <div className="CountContainer">

                <div className="page_container">
                    <div className="countWrapper">
                        <div className="counter_box" key='id1'>
                            <div className="box_content">
                                {/* <h1>105M+</h1> */}
                                <Number n={105}>M+</Number>
                                <p>trading volume</p>


                            </div>
                        </div>
                        <div className="counter_box" key='id2'>
                            <div className="box_content">
                                <Number n={8}>K+</Number>
                                <p>NFT holders</p>


                            </div>
                        </div>
                        <div className="counter_box" key='id3'>
                            <div className="box_content">
                            <Number n={266}>K+</Number>
                                <p>followers</p>


                            </div>
                        </div>
                        <div className="counter_box" key='id4'>
                            <div className="box_content">
                            <Number n={72}>%</Number>
                                <p>of holders held 12 months</p>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>;
};

export default Count;
