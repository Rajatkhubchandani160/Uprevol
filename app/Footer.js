import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <>
    <div className='bg-zinc-800  w-full h-[340px]'>
    <div className='bg-zinc-800 border-b-5  border-orange-500 p-5 pl-20 flex justify-between w-full h-64 text-white'>
      <div id='footer-part1 h-full' className=' w-[350px] h-[200px]'>
      <img className='h-[90px] w-full mb-4' src='https://monolithsafetyexperts.com/wp-content/uploads/2021/05/0012.png'></img>
      <p className='text-sm text-center leading-6'>Safety equipment includes a range of tools and devices that are designed to help prevent fires, detect them early, and extinguish them quickly.</p>
      <div className=' flex align-center  justify-evenly h-7 w-[100px] ml-3 mt-4  p-1'>
      <CiFacebook size={25} color="white"/>
      <CiInstagram size={25} color="white"/>
      <CiLinkedin size={25} color="white"/>
      </div>
      
      </div>
      <div id='footer-part2'
      className=' flex flex-col gap-7 p-6 text-white w-[350px] h-[200px]'>
        <h4><a className='text-gray-500 head text-[20px] mt-3  font-medium' href='#'>Services</a></h4>
        <div>
        <h4><a href='#'>FIRE BRIDGE</a></h4>
        <h4><a href='#'>MANPOWER SUPPLIER</a></h4>
        <h4><a href='#'>FIREFIGHTING TRANNING</a></h4>
        <h4><a href='#'>FIRE SAFETY EDUCATIONAL COURSES</a></h4>
        <h4><a href=''>CONSTRUCTION PROJECT LIAISONING</a></h4>
        </div>
      </div>
      <div id='footer-part3'
      className=' flex flex-col gap-7 p-6 text-white w-[350px] h-[200px]'>
        <h4><a className='text-gray-500 text-[20px] mt-3  font-medium' href='#'>Company</a></h4>
        <div>
        <h4><a href='#'>About us</a></h4>
        <h4><a href='#'>Conatct us</a></h4>
        </div>
      </div>
      <div id='footer-part4'
      className=' flex flex-col gap-7 p-6 text-white w-[350px] h-[200px]'>
        <h4><a className='text-gray-500 text-[20px] mt-3  font-medium' href='#'>Address</a></h4>
        <div className='flex flex-col gap-4'>
        <h4>Plot No. 1107, First Floor, Sector 47, Sohna Road, Near ILD Mall, Gurgaon</h4>
        <h4><a href='mailto:monolithsafetyexperts@gmail.com'>monolithsafetyexperts@gmail.com</a></h4>
        <h4><a href='#'>+91 9354318440</a></h4>
        </div>
      </div>
    </div>
    <div className='bg-zinc-800 text-sm border-t-2 
    mt-3 border-gray-500 p-5 pl-20 flex justify-between w-full  text-white'>
      <h5>Copyright 2023 - Monolith Safety Experts</h5>
      <h5>Design & Development By UpRevol Technologies</h5>
    </div>
    
    </div>
    </>
  )
}

export default Footer