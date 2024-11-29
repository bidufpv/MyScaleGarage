console.log(import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT); // Should print the URL


import React, { useState } from 'react'
import ImagekitIO from './ImagekitIO';

function Navbar() {
    const [open , setOpen] = useState(false)
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      
      {/* logo */}
      <div className='flex items-center gap-4 text-2xl font-bold'>
      <ImagekitIO src="https://ik.imagekit.io/khqjdiqz7/Logo.png"
      height={50} width={60} description="Logo"/>
       <span>My Scale Garage</span>
      </div>

      
      {/* Mobile section */}
      <div className='md:hidden' >   

      {/* Mobile Button              */}
      <div className='cursor-pointer text-4xl' onClick={()=> setOpen((prev)=> !prev)}>  {/*use state hook for closing and opening the hamburger menu*/}
      {open ? '\u00D7' : '\u2261'}
      </div>

      {/* Mobile Menu List             */}
      <div className={`w-full h-screen flex flex-col gap-12 font-medium text-lg items-center justify-center 
      absolute top-16 bg-slate-200 transition-all ease-in-out duration-1000  ${open ? "-right-0" : "-right-[100%]"}    `}>  {/*for hamburger menu*/}
      <a href="/">Home🏠</a>
      <a href="/">Trending🔥</a>
      <a href="/">Most Popular🎉</a>
      <a href="/">About💡</a>
      <a href="">
        <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'> Login👋</button>
      </a>
      </div>
      
      </div>


      {/* Desktop */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
      <a href="/">Home🏠</a>
      <a href="/">Trending🔥</a>
      <a href="/">Most Popular🎉</a>
      <a href="/">About💡</a>
      <a href="">
        <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'> Login👋</button>
      </a>
      </div>
    </div>
  )
}

export default Navbar;
