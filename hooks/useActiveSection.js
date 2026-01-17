"use client"
import React, { useEffect } from "react"
import { useState } from "react"

export const useActiveSection = ()=> {
    
  const [activeSection, setActiveSection] = useState("introduction")



useEffect(()=> {
    const handleScroll = ()=> {
      if (typeof window === 'undefined') return;

        const sections = ["introduction" , "projectSection", "experienceSection", "skillsSection", "contactSection"]
        const scrollPosition = window.scrollY + window.innerHeight / 2

        for(const section of sections) {
            const element = document.getElementById(section)

            if(element) {
                const {offsetTop, offsetHeight} = element

                if(scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section)
                    break;
                }
            }
        }
    }

    // handleScroll()

    
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll)
},[])

  const handleNavigate = (section) => {
    if (typeof document === 'undefined') return;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { activeSection, handleNavigate }


}