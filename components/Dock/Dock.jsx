"use client"
import React, { useEffect, useState } from 'react'
import { FaBriefcase, FaFolder, FaUser } from 'react-icons/fa';
import { MdComputer, MdEmail } from 'react-icons/md';



const Dock = () => {
    const dockItems = [
  { id: "introduction", icon: <FaUser />, label: "About" },
  { id: "projectSection", icon: <FaBriefcase />, label: "Projects" },
  { id: "experienceSection", icon: <FaFolder />, label: "Experience" },
  { id: "skillsSection", icon: <MdComputer />, label: "Skills" },
  { id: "contactSection", icon: <MdEmail /> , label: "Contact" },
];
const [activeId, setActiveId] = useState('introduction')

 const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveId(id)
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    dockItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
 

  return (
    <div className='hidden sm:flex justify-center items-center gap-8'>
       <div className={`flex gap-3 bg-[#F3F8F6] items-center justify-center py-1 px-4 rounded-2xl fixed bottom-3 z-50 shadow-2xl`}>
                 {dockItems.map((dockItem, index)=> {
                
                  
            return (
                <div onClick={() => handleScroll(dockItem.id)} key={index} className={`px-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-black/10 hover:rounded-xl ${dockItem.id == activeId ? 'bg-blue-500/10 rounded-xl' : ''}`}>
                    <p className='text-3xl text-[#6A7280] h-10 w-10 flex items-center justify-center'>{dockItem.icon}</p>
                    <p className='text-sm mt-1'>{dockItem.label}</p>                    
                </div>
            )
        })}
       </div>
    </div>
  )
}

export default Dock