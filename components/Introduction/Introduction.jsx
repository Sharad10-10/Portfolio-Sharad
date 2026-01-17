"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";

const Introduction = () => {
   const backgroundColor =
    "bg-gradient-to-r from-[#DBE7F6] via-[#D6DFEF] to-[#E6DCEF] p-4";

     const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div id="introduction" className={`${backgroundColor} min-h-screen flex items-center justify-center `}>
        <div className="bg-[#F7FAFE] max-w-200 rounded-xl">
          <div className="flex items-center p-2 px-6 border-b border-gray-700/10">
            <div className="flex gap-2">
              {/* colors */}
              <div className="h-3 w-3 bg-[#F04242] rounded-full hover:scale-110 transition-all"></div>
              <div className="h-3 w-3 bg-[#FBBD23] rounded-full hover:scale-110 transition-all"></div>
              <div className="h-3 w-3 bg-[#26D968] rounded-full hover:scale-110 transition-all"></div>
            </div>

            <div className="text-center text-[#6A7280] flex-1">
              {/*about me  */}
              ~/about-me
            </div>
          </div>

          <div className="flex justify-center items-center text-center p-8">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="">
                <Image
                  src={"/portfolio-image.jpg"}
                  alt="portfolio-image"
                  height={150}
                  width={150}
                  className="rounded-4xl border-x-2 border-y-4 border-[#6A53E9]"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl font-semibold">
                  Hey, I'm{" "}
                  <span className="text-[#764FE7]">Sharad Ghimire</span> 👋
                </h1>
                <h2 className="text-xl text-[#707786]">
                  Fullstack Developer & Creative Technologist
                </h2>
                <h3 className="text-[#707786] flex items-center gap-2">
                  <MdEventNote className="text-black" /> 2+ years experience
                </h3>
                <div className="flex gap-4 items-center justify-center text-center">
                  <Link className="flex items-center gap-1 hover:scale-105 transition-all duration-300" href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank"> <span><FaLinkedin /></span> Linkedin</Link>
                  <Link className="flex items-center gap-1 hover:scale-105 transition-all duration-300" href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank"> <span><FaGithub /></span> Github</Link>
                </div>
              </div>

              <div className="text-center">
                <p className="text-[#707786]">
                  I craft pixel-perfect digital experiences with modern
                  technologies. Passionate about clean code, intuitive
                  interfaces, and building products that make a difference. When
                  I'm not coding, you'll find me exploring places or playing
                  games.
                </p>
              </div>

              <div className="flex gap-4">
                <button onClick={()=>handleScroll("contactSection")} className="px-4 py-2 text-white bg-[#007BFF] rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  Get in Touch
                </button>
                <button onClick={()=>handleScroll("projectSection")} className="px-4 py-2 bg-[#E9EAED] rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  View my work
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Introduction;
