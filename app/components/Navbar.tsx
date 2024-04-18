import React, { useState } from 'react'
import logo from "@/app/constants/logo.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMessage, faPeace, faPerson, faSearch, faSms, faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {

  return (
    <>
    <div className='flex justify-stretch '>
      <div className='flex space-x-40 justify-evenly font-extrabold text-3xl' >
        <h1 className='flex '>
        <Image src={logo} className='h-12 w-16' alt="logo" />
          <p className='pt-2'>
          Textify  
          </p>
        </h1>
        <p className='text-2xl font-semibold pt-3 '> Welcome, Ayush Tyagi!!</p>
      </div>
      <div className='absolute right-5 hidden lg:block lg:text-2xl text-lg space-x-4'>
        <FontAwesomeIcon className='absolute top-2 cursor-pointer right-[300px]' icon={faMessage} />
        <FontAwesomeIcon className='absolute top-2 cursor-pointer right-[260px]' icon={faBell} />
        <input type="text" placeholder='Search here...' className='border rounded-xl ' />
        <button className=' pl-2 absolute right-2 top-1 '><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></button>
      </div>
    </div>
    
       </>
  )
}

export default Navbar