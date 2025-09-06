import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#af7eec] text-white py-2 ,mb-0'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>DoIt</span>
      </div>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all'>
          <Link href={"/home"}>
          Home
          </Link>
        </li>
        <li className='cursor-pointer hover:font-bold transition-all'>
          <Link href={"/Add"}> Add New Task
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
