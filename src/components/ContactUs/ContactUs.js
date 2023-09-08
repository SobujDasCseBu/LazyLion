/* eslint-disable no-unused-vars */
import React from 'react'
import roar from '../../assets/roarPic.png'
import contact from '../../assets/Mail.png'
import { FaTwitter, FaDiscord } from "react-icons/fa";

import { FiInstagram } from "react-icons/fi";
import { FiMail } from 'react-icons/fi'
import {MdEmail} from 'react-icons/md';
import email from '../../assets/email 1.png'
import instraPic from '../../assets/unnamed.png'
import './contact.css';
import contactImg from "../../assets/img/Vince1.png"

const ContactUs = () => {
  return (
    <div className='contact_us_main '>
      <div className='bg-[#FAFAFA] mx-auto w-[95%] contact_container_wrapper relative'>
        <div className='box-content contact_wrapper page_container'>
          {/* Left part */}
          <div className='leftContent lg:hidden'>
            <h1 className='text-[40px] sm:text-[70px] leading-[40px] text-[#CFA817] text-center uppercase mt-[50px]  font-bold'>ROAR with us!</h1>

           

          </div>
          {/* Right Part */}
          <div className='bottom_content '>
            <div className='rightpart_wrap_top items-center justify-center'>
              <div className=' social_icon_box cursor-pointer '>
                <a href='#'><FaDiscord className='text-[#2d7ecf] text-[70px] self-center  ' /></a>
              </div>
              <div className=' social_icon_box cursor-pointer '>
                <a href='#'><FaTwitter className='text-[#2db4cf] text-[70px] self-center  ' /></a>
              </div>
              <div className=' social_icon_box cursor-pointer '>
                {/* <FaInstagram className='text-[#cf6b2d] text-[70px] justify-normal add center self-center  ' /> */}
                <a href='#'><FiInstagram className='text-[#cf2d6b] text-[70px] self-center  ' /></a>
              </div>
              
              <div className=' social_icon_box cursor-pointer lg:row-span-2 lg:col-span-3 lg:d-flex items-center justify-center'>
              

              <h2 className=' px-3 text-[#0B0B0B] text-[40px] font-[700] hidden lg:inline self-center uppercase bold '>Contact Us</h2>
                <a href='#'><MdEmail className='text-black text-[70px] self-center  ' /></a>
              </div>

            </div>

            {/* <div className='hidden lg:block'> 
              <div className='large_screen_contact'>
              <div className=' social_icon_box cursor-pointer '>
              <h2 className=' px-3 text-[#0B0B0B] text-[40px] font-[700] hidden self-center uppercase bold '>Contact Us</h2>
                <a href='#'><MdEmail className='text-black text-[70px] self-center  ' /></a>
              </div>
              </div>
            </div> */}


            {/* <div className='rightpart_wrap_bottom'>
            </div> */}

          </div>
          <div className='contact_roar_img  w-full'>
          <div className='contact_title hidden lg:block'>
            <h1 className='text-[40px] sm:text-[70px] leading-[40px] text-[#F19D00] text-center uppercase mt-[50px]  font-bold'>ROAR with us!</h1>

           

          </div>
              <img src={contactImg} alt='Roar Image' />
            </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
