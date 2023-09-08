import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer_wrap bg-[#1F1F1F] w-[100%] flex flex-col lg:flex-row justify-between   text-[#FAFAFA] text-[16px] '>
        <div className=' flex flex-row gap-2 lg:ml-[7%] lg:pt-[15px] '>
            <a className='cursour-pointer'> License</a>
             <a className='cursour-pointer '>Terms</a>

        </div>
        <div className='lg:mr-[7%] lg:pt-[15px] '>2023 Blockchain Media Pty Ltd</div>

    </div>
  )
}

export default Footer