import Image from 'next/image';
import React from 'react'

const SkillsSection = () => {
     const backgroundColor =
    "bg-gradient-to-r from-[#DBE7F6] via-[#D6DFEF] to-[#E6DCEF] p-4";

    const techSkills = [
        {
            techName: "React/Next js",
            imageUrl: "/react-icon.png"
        },
        {
             techName: "TypeScript/JavaScript",
            imageUrl: "/ts-js.png"
        },
        {
            techName: "Python",
            imageUrl: "/python-icon.png"
        },
        {
            techName: "N8n Automation",
            imageUrl: "/n8n-icon.png"
        },
        {
             techName: "PostgreSql",
            imageUrl: "/postgresql-icon.png"
        },
        {
             techName: "MongoDb",
            imageUrl: "/mongodb-icon.png"
        },
        {
             techName: "Node js",
            imageUrl: "/nodejs-icon.jpg"
        },
        {
             techName: "Express js",
            imageUrl: "/express-icon.png"
        },
        {
             techName: "Firebase",
            imageUrl: "/firebase-icon.png"
        },
        {
             techName: "Supabase/Neon",
            imageUrl: "/cloud-icon.jpg"
        },
        {
            techName: "Google Gemini AI/Open AI/ Replicate",
            imageUrl: "/ai-icon.jpg"
        },
         {
            techName: "Tailwind CSS/ Styled Component",
            imageUrl: "/tailwind-icon.png"
        },
         {
             techName: "GIT/ Docker/ AWS",
            imageUrl: "/git-icon.jpg"
        },
    ]

  return (
    <div id='skillsSection' className={`${backgroundColor} pt-40`}>
        <div className='text-center flex flex-col gap-2'>
            <h1 className='text-3xl font-medium'>Skills and Expertise</h1>
            <h2 className='text-md text-[#707786]'>Things That I Have Learned So Far</h2>
        </div>

        <div className='flex items-center justify-center gap-8 flex-wrap mt-12'>
            <div className='max-w-150 w-full'>
              <div className='bg-[#F7FAFE] rounded-xl overflow-hidden'>
                    <div className='flex items-center bg-[#F2F7FF] px-4 py-2 border-b border-gray-700/10'>

                        <div className="flex gap-2">
                            <div className="h-3 w-3 bg-[#F04242] rounded-full hover:scale-110 transition-all"></div>
                            <div className="h-3 w-3 bg-[#FBBD23] rounded-full hover:scale-110 transition-all"></div>
                            <div className="h-3 w-3 bg-[#26D968] rounded-full hover:scale-110 transition-all"></div>
                        </div>

                        <div className='text-center text-[#707786] flex-1'>
                            <h1>technical skills.json</h1>
                        </div>
                    </div>

                    <div className='m-4 flex gap-6 flex-wrap justify-center'>
                       {techSkills.map((techSkill, index)=> {
                        return (

                             <div key={index} className='flex items-center gap-2 hover:scale-105 transition-all duration-500 hover:shadow-lg'>
                                <p  className='bg-[#EDF1F1] flex items-center gap-3 w-60 rounded-xl px-6 py-2 font-medium'>
                                    <Image className='h-6 w-6 rounded-full' src={techSkill.imageUrl} height={200} width={200} alt={techSkill.techName}/>
                                    {techSkill.techName}
                                    
                                </p>
                             </div>
                        )
                       })}
                       
                    </div>

                    <div className='border border-black/10'/>
                    <div className='flex gap-3 flex-col px-4 pb-6 flex-wrap'>
                        <div><p className='text-sm text-[#707786] pt-8 px-4'>//~ also familiar with</p></div>
                      <div className='flex gap-3 flex-wrap'>
                            <span className='text-sm bg-[#EDF1F1] hover:scale-105 transition-all duration-500 rounded-xl px-3 py-1'>GraphQL API</span>
                            <span className='text-sm bg-[#EDF1F1] hover:scale-105 transition-all duration-500 rounded-xl px-3 py-1'>Figma/Wireframing</span>
                            <span className='text-sm bg-[#EDF1F1] hover:scale-105 transition-all duration-500 rounded-xl px-3 py-1'>ORM</span>
                            <span className='text-sm bg-[#EDF1F1] hover:scale-105 transition-all duration-500 rounded-xl px-3 py-1'>CI/CD pipeline</span>
                            <span className='text-sm bg-[#EDF1F1] hover:scale-105 transition-all duration-500 rounded-xl px-3 py-1'>Postman</span>
                      </div>
                    </div>
              </div>
            </div>

            <div className='max-w-150 w-full'>
              <div className='bg-[#F7FAFE] rounded-xl overflow-hidden'>
                    <div className='flex items-center bg-[#F2F7FF] px-4 py-2 border-b border-gray-700/10'>

                        <div className="flex gap-2">
                            <div className="h-3 w-3 bg-[#F04242] rounded-full hover:scale-110 transition-all"></div>
                            <div className="h-3 w-3 bg-[#FBBD23] rounded-full hover:scale-110 transition-all"></div>
                            <div className="h-3 w-3 bg-[#26D968] rounded-full hover:scale-110 transition-all"></div>
                        </div>

                        <div className='text-center text-[#707786] flex-1'>
                            <h1>soft skills.md</h1>
                        </div>
                    </div>

                    <div className='m-4 flex gap-6 flex-wrap justify-center font-medium'>
                      

                             <div  className='bg-[#EDF1F1] p-[23px] flex flex-col justify-center gap-2 rounded-xl w-60 hover:scale-105 transition-all duration-500 hover:shadow-lg'>
                                 <p className = 'text-2xl'>✅</p> 
                                <p className=''>
                                   Problem Solving
                                </p>
                            </div>

                            <div  className='bg-[#EDF1F1] p-[23px] flex flex-col justify-center gap-2 w-60 rounded-xl hover:scale-105 transition-all duration-500 hover:shadow-lg'>
                                   <p className = 'text-2xl'>💬</p> 
                                <p className=' '>
                                    Communication
                                </p>
                            </div>
                                
                            <div  className='bg-[#EDF1F1] p-[23px] flex flex-col justify-center gap-2 w-60 rounded-xl hover:scale-105 transition-all duration-500 hover:shadow-lg'>
                               <p className = 'text-2xl'>🍻</p> 
                                <p className=''>
                                    Team Player/Involvement
                                </p>
                            </div>
                               
                            <div  className='bg-[#EDF1F1] p-[23px] flex flex-col justify-center gap-2 w-60 rounded-xl hover:scale-105 transition-all duration-500 hover:shadow-lg'>
                                      <p className = 'text-2xl'>💡</p> 
                                <p className=''>
                                    Creativity
                                </p>
                            </div>

                            <div  className='bg-[#EDF1F1] p-[23px] flex flex-col justify-center gap-2 w-60 rounded-xl hover:scale-105 transition-all duration-500 hover:shadow-lg'>
                                   <p className = 'text-2xl'>↪️</p> 
                                <p className=''>
                                    Adaptability
                                </p>
                            </div>
                                <div  className='bg-[#EDF1F1] p-[23px] flex flex-col justify-center gap-2 w-60 rounded-xl hover:scale-105 transition-all duration-500 hover:shadow-lg'>
                                 <p className = 'text-2xl'>⏱️</p> 
                                <p className=''>
                                    Time Management
                                </p>
                            </div>
                            
                     
                       
                    </div>

                    <div className='border border-black/10'/>
                    <div className='flex gap-3 flex-col px-4 pb-6 flex-wrap text-[#707786]'>
                        <div><p className='text-sm pt-8 px-4'>//~ Fun facts ✨</p></div>
                      <div className='flex flex-col gap-3 flex-wrap '>
                            <p>☕ Powered by 3+ cups of Nepalese Tea daily</p>
                            <p>🎧 Codes best in peace and music</p>
                            <p>🌱 Always learning something new</p>
                           
                      </div>
                    </div>
              </div>
                


            </div>

        </div>




    </div>
  )
}

export default SkillsSection