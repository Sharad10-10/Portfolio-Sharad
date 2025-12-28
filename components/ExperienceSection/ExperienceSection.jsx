import React from 'react'

const ExperienceSection = () => {
    const backgroundColor =
    "bg-gradient-to-r from-[#DBE7F6] via-[#D6DFEF] to-[#E6DCEF] p-4";
  return (
    <div className={`${backgroundColor} flex flex-col items-center justify-center pt-40`}>
        <div className='text-center flex flex-col gap-2'>
            <h1 className='text-4xl font-medium'>Experience</h1>
            <h2 className='text-medium text-[#707786]'>Where I've worked and what I've learned.</h2>
        </div>

        <div className='mt-12'>
            <div className='w-240 bg-[#F7FAFE] rounded-xl'>
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

              asd

            </div>
        </div>
    </div>
  )
}

export default ExperienceSection