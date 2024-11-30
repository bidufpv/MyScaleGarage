import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-2 shadow-lg
    items-center justify-center gap-10'>
      {/*links*/}
      <div className='flex-1 flex items-center justify-between flex-wrap'> 

      <Link to='/allpost' className='bg-blue-700 text-white rounded-full px-4 py-2'>  
      All Posts
      </Link>

      <Link to='/allpost?cat=model-maker' className='hover:bg-blue-100 rounded-full px-4 py-2'>
      Model Maker
      </Link>

      <Link to='/allpost?cat=manufacturer' className='hover:bg-blue-100 rounded-full px-4 py-2'>
      Manufacturer
      </Link>

      <Link to='/allpost?cat=scale' className='hover:bg-blue-100 rounded-full px-4 py-2'>
      Scale
      </Link>

      <Link to='/allpost?cat=price' className='hover:bg-blue-100 rounded-full px-4 py-2'>
      Price
      </Link>

      <Link to='/allpost?cat=categories' className='hover:bg-blue-100 rounded-full px-4 py-2'>
      Categories
      </Link>
      </div>
      <span className='text-xl font-medium'>|</span>
      {/*search*/}
      <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'> 

        <svg xmlns="http://www.w3.org/2000/svg"  
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray">
          
          <circle cx="10.5" cy="10.5" r="7.5"/>
          <line x1="16.5" y1="16.5" x2="22" y2="22"/>
        </svg>   
        <input type="text" placeholder='search a post..' className='bg-transparent' />
      </div>

    </div>
  )
}

export default Categories
