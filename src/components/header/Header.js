import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header className=' md:flex px-[10%] h-[80px] items-center shadow-md bg-white shadow-gray-300 mx-auto justify-between'>
      <h1 className='text-4xl font-bold text-blue-600'>Cycle Mart</h1>
      <nav className='md:flex gap-5'>
          <Link className='text-[#1E90C2] text-xl' to='/'>Home</Link>
          <Link className='text-[#1E90C2] text-xl' to='/reviews'>Reviews</Link>
          <Link className='text-[#1E90C2] text-xl' to='/blog'>Blog</Link>
          <Link className='text-[#1E90C2] text-xl' to='/dashboard'>Dashboard</Link>
      </nav>
    </header>
    </>
  )
}

export default Header