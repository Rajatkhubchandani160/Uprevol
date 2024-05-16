import React from 'react'
import { GoChevronDown } from "react-icons/go";
const Header = () => {
  return (
    <>
    <div className='nav-container flex items-center  justify-between bg-zinc-800 w-full h-30'>
      <div className='nav-left'>
        <img  src='https://monolithsafetyexperts.com/wp-content/uploads/2021/05/0012.png'></img>
      </div>
      <div className='text-sm nav-right flex items-center  gap-6 mr-10 text-white'>
        <h5><a href=''>Home</a></h5>
        <h5><a href=''>Services</a></h5>
        <h5><a href=''>Products</a></h5>
        <GoChevronDown />
        <h5><a href=''>Products Application</a></h5>
        <GoChevronDown />
        <h5><a href=''>About</a></h5>
        <h5><a href=''>Contact</a></h5>
      </div>
      </div>
    </>
  )
}

export default Header