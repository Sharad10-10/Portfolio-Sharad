import React from 'react'

const MenuBar = () => {
  return (
    <div className="bg-[#F7FAFE] max-w-100 rounded-xl">
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

    </div>
  )
}

export default MenuBar