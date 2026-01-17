"use client"
import React, { useEffect, useState } from 'react'
import { FaBatteryFull, FaHome, FaWifi } from "react-icons/fa";

const Header = () => {
   const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(updateTime); 
  }, []);

  return (
    <div className='bg-[#FBF8FE] flex justify-between items-center px-6 py-1 border-b border-black/3 fixed w-full z-50 top-0 backdrop:blur-2xl'>
      <div className='flex items-center gap-4'>
        <FaHome />
        <h1 className='text-lg'>Sharad Ghimire</h1>
      </div>

      <div className='flex gap-4 items-center text-[#7B818F]'>
        <FaWifi className='text-blue-600'/>
       <div className='flex items-center gap-2'>
         <FaBatteryFull className='text-green-400'/>
         <p className='text-sm'>100%</p>
       </div>
       <p className='text-sm'>{time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
      </div>

    </div>
  )
}

export default Header
