'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCheck, faChevronLeft, faChevronRight, faComment, faDashboard, faExplosion, faGear, faPerson, faRightFromBracket, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [showSideBar,setShowSideBar]=useState(true)
  return (
    <>
    {
      showSideBar?(
        <div className={showSideBar?' text-black  h-screen border w-52':'hidden'}>
      <FontAwesomeIcon onClick={()=>{
        setShowSideBar(false)
      }} icon={faChevronLeft} className='text-5xl absolute left-[195px] cursor-pointer top-[350px] ' />
      <ul className='text-xl '>
        <li className="py-4 px-2  hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer">
           <span><FontAwesomeIcon icon={faDashboard} className="pr-1" 
></FontAwesomeIcon></span> 
 Dashboard</li>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer"><span><FontAwesomeIcon icon={faExplosion} className="pr-1" 
></FontAwesomeIcon></span> Explore</li>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer"><span><FontAwesomeIcon icon={faGear} className="pr-1" 
></FontAwesomeIcon></span> Settings</li>
      </ul>
      <ul className='text-xl mt-10'>
        <li className="py-4 px-2  mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer"> </li>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer"><span><FontAwesomeIcon icon={faUser} className="pr-1" 
></FontAwesomeIcon></span> My Profile</li>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer"><span><FontAwesomeIcon icon={faRightFromBracket} className="pr-1" 
></FontAwesomeIcon></span> Logout</li>
      </ul>
    </div>

      ):(
        <div>
          <FontAwesomeIcon className='cursor-pointer text-5xl absolute top-[350px]' onClick={()=>{
            setShowSideBar(true)
          }}  icon={faChevronRight }/>
        </div>
      )
    }
      </>
  );
};

export default Sidebar;
