import React from 'react'
import logo from "@/app/constants/logo.png"
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='flex justify-stretch'>
      <div className='flex space-x-40 justify-start font-extrabold text-3xl' >
        <h1 className='flex'>
        <Image src={logo} className='h-12 w-16' alt="logo" />
          <p className='pt-2'>
          Textify  
          </p>
        </h1>
      </div>
      <div className='absolute right-5 text-2xl'>
        <input type="text" placeholder='Search...' className='border rounded-xl ' />
      </div>
    </div>
  )
}

export default Navbar