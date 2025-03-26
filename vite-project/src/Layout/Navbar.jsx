import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Group from '../assets/Group.png'

const navigation = [
  {
    to:"/",
    text:"Home",
    
    },
    {
    to:"/About",
    text:"All Course",
   
    },
    {
    to:"/contact",
    text:"Contact us",
    
    },
    {
      to:"/Post",
      text:"Posts",
    }
]  // data of nav bar 


function Navbar() {
  const navigate = useNavigate()
  return (
  
    <div className='flex justify-center z-10'
    style={{
      boxShadow: '0px 0px 10px 0px #00000040'
    }}
    >
    <div className="w-7xl ">
      <nav className="bg-white flex justify-between items-center w-full p-4">
        <div className="flex items-center">
          <a className="items-center space-x-3">
            <img src={Group} width="158" height="65" alt="Cooking Stuff Logo" />
          </a>
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center">
          <ul className="flex space-x-8">
            {navigation.map((x) => (
              <li key={x.to} className='p-3'>
                <NavLink to={x.to} className="py-2 px-3 text-gray-700 hover:text-orange-500">
                  {x.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex">
        <div class="relative flex  flex-col justify-center overflow-hidden ">
          <div class="relative rounded-2xl bg-white  ">
            <div class="mx-auto max-w-md">
              <form  class="relative mx-auto w-max">
                <input type="search" 
                      class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border border-transparent bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-[#f99106] focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-[#f99106] peer-focus:stroke-[#f99106]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>


            </div>
          </div>
</div>
        <button 
            type="button" 
            className=" text-gray-700 font-medium  px-4">
            Sign In
          </button>
          <NavLink to='/SignUp'
            type="button" 
            className="w-[200px] h-[60px] rounded-[44px] bg-[#f99106] text-white font-medium ">
            Sign Up
          </NavLink>
        </div>
      </nav>
    </div>
  </div>
  )
 
}

export default Navbar;
