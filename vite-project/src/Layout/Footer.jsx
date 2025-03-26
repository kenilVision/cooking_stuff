import React from 'react';
import Group from '../assets/Group.png';

function Footer() {
  return (
    <>
    <div className='flex justify-center bg-[#FFF2F2]'>
        <div className="w-7xl p-10 flex flex-col items-center  ">
            <div className='w-fit text-6xl font-bold pb-8' >
            Contact Us
            </div>
            <div className="w-full flex flex-row justify-between  gap-5 pb-8">
            <div className="flex justify-center md:justify-start">
                <img
                src={Group}
                width="298"
                height="122.6"
                alt="Cooking Stuff Logo"
                className="w-[298px] h-[122.6px]"
                />
            </div>
            <div className="text-2xl flex items-center text-gray-600 max-w-3xl">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nisi tortor tellus sagittis donec id est, dolor, morbi. Id facilisis sem sit maecenas metus, lacinia non. Lorem congue est at ultrices suscipit at nulla neque volutpat. Porta proin hdhhhjff.
                </p>
            </div>
            </div>
            <div className="w-full flex flex-row  justify-between column-3  ">
            <div>
          <p className="text-3xl font-bold underline underline-offset-10 decoration-[#f99106]">Navigation</p>
          <ul className=" pt-10 space-y-10">
            <li className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-[#f99106]">&#9656;</span>All Course
            </li>
            <li className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-[#f99106]">&#9656;</span>Contact Us
            </li>
            <li className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-[#f99106]">&#9656;</span>Posts
            </li>
          </ul>
        </div>
        <div>
          <p className="text-3xl font-bold underline underline-offset-10 decoration-[#f99106]">Categories</p>
          <ul className="pt-10 space-y-10">
            <li className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-[#f99106]">&#9656;</span>All Course
            </li>
            <li className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-[#f99106]">&#9656;</span>Contact Us
            </li>
            <li className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-[#f99106]">&#9656;</span>Posts
            </li>
          </ul>
        </div>
        <div>
          <p className="text-3xl font-bold underline underline-offset-10 decoration-[#f99106]">Get in touch</p>
          <div className="pt-10 space-y-6">
            <div className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-black">Phone</span>All Course
            </div>
            <div className="text-xl text-gray-600  text-wrap">
            <span className="mr-2 text-black inline-block">Address:</span> Lumbung<br />Hidup St. Madiun<br />City East Java 63125
            </div>
            <div className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-black">Email:</span> cookingstuff@gmail.com
            </div>
          </div>
        </div>
            </div>
        </div>
    </div>
     <div className='flex justify-center bg-[#F99106]'>
        <div className="w-7xl p-5 flex flex-row justify-between text-white text-xl ">
                <div >
                @ Copyright 2022. All Rights Reserved by Cooking Stuff
                </div>
                <div className='space-x-10' >
                <span>Terms & Condition</span>
                <span>License</span>
                <span>Support</span>
                </div>
            </div>
        </div>

        </>
  )
}

export default Footer
