import Link from 'next/link';
import React from 'react'

const ExperienceSection = () => {
   
    const experiences = [
  {
    role: "Fullstack Developer Intern",
    company: "Edureka",
    period: "2024 — 2025",
    description: "Worked on full-stack web development projects using React and Node.js, gaining hands-on experience with APIs, databases, and version control.",
  },
  
  {
    role: "Fullstack developer",
    company: "Freelance",
    period: "2022 — present",
    description: "Built various websites for different clients. Collaborated with clients to translate requirements into functional web solutions, handling development, testing, and deployment independently."
  },

  {
    role: "Website support/IT support",
    company: "Jyoti Punj Secondary School, Nepal",
    period: "2020 — 2022",
    description: "Built and scaled the core LMS product of 2k+ users. Implemented CI/CD pipelines and improved system performance by 30%.",
  },

];

  return (
    <div id='experienceSection' className='flex flex-col items-center justify-center flex-wrap pt-40 px-2'>
        <div className='text-center flex flex-col gap-2'>
            <h1 className='text-4xl font-medium'>Experience</h1>
            <h2 className='text-medium text-[#707786]'>Where I've worked and what I've learned.</h2>
        </div>

        <div className='mt-12'>
            <div className='max-w-240 bg-[#F7FAFE] rounded-xl'>
                <div className=" flex items-center p-2 px-6 border-b border-gray-700/10 ">
                    <div className="flex gap-2">
                    {/* colors */}
                        <div className="h-3 w-3 bg-[#F04242] rounded-full hover:scale-110 transition-all"></div>
                        <div className="h-3 w-3 bg-[#FBBD23] rounded-full hover:scale-110 transition-all"></div>
                        <div className="h-3 w-3 bg-[#26D968] rounded-full hover:scale-110 transition-all"></div>
                    </div>

                    <div className="text-center text-[#6A7280] flex-1">
                        {/*about me  */}
                        ~/resume.pdf
                    </div>

                </div>

                <div className='flex justify-center flex-col px-12 py-4'>
                    {experiences.map((experience, index)=> {
                        console.log(index);
                       return(
                      

                             <div  key={index} className={`relative pl-8 pb-8 ${index !== experiences.length - 1 ? "border-l-2 border-black/10" : ""}`}>
                            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0980FF] border-4 border-[#E9EAED]" />
                       
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 flex-wrap'>
                                <h1 className='text-xl font-medium'>{experience.role}</h1>
                                <h2 className='text-lg font-medium text-[#0980FF]'><span>@</span> {experience.company}</h2>
                            </div>

                            <div>
                                <p className='text-[#707786] font-light text-md'>{experience.period}</p>
                            </div>

                            <div>
                                <p className='text-[#707786]'>{experience.description}</p>
                            </div>
                        </div>

                        
                    
                       </div>
                       )
                    })}

                    <div className='border border-black/10'/>
                    <div className='mt-8 mb-4'>
                        <a href={'/Sharad_Ghimire_Resume.pdf'} download target='_blank'><button className='bg-[#E9EAED] rounded-xl w-full py-3 cursor-pointer hover:scale-105 transition-all duration-300'>📄 Download full resume</button></a>
                    </div>
                </div>

                

            </div>
        </div>
    </div>
  )
}

export default ExperienceSection