"use client"
import React, { useState } from 'react'
import MenuBar from '../MenuBar/MenuBar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';


const ContactMe = () => {

    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleInputChange = (e)=> {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }



    const handleSubmit = async(e)=> {
        e.preventDefault()
        setIsSubmitting(true)
        
        
     if(!formData.userName || !formData.email || !formData.message){
       return 
     }
     try {
        const data = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        const result = await data.json()
        setIsSubmitting(false)
        setFormData({userName: "", email: "", message: ""})
        toast.success("Thanks for reaching out! I’ve received your message and will get back to you very soon 😊")
     }
     catch(error) {
        console.log(error);
     }
    }
   
  return (
    <div id='contactSection' className={`pt-40 flex flex-col items-center justify-center`}>
       <div>
          <h1 className='text-3xl font-medium text-center'>Contact Me</h1>
       </div>

       <div className='flex gap-10 justify-center flex-wrap max-w-300 w-full py-12'>
           <div className='flex flex-col gap-4'>
                 <div className='bg-[#F7FAFE] rounded-xl max-w-70'>
                    
                    <MenuBar menubarTitle={'~/about'}/>
                    
                    <div className='p-8 flex flex-col justify-center items-center gap-4'>
                        <div className='h-22 w-23 bg-[#8449E4] rounded-2xl text-5xl flex items-center justify-center'>👋</div>
                        <div>
                            <h1 className='text-xl font-medium'>Sharad Ghimire</h1>
                            <h2 className='text-md text-[#6A7280]'>Fullstack developer</h2>
                        </div>
                        <div className='flex items-center justify-center gap-3 text-2xl'>
                            <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK} target='_blank' className='cursor-pointer p-4 bg-[#E9EAED] rounded-xl hover:scale-105 transition-all duration-300'><FaGithub /></Link>
                            <Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank' className='cursor-pointer p-4 bg-[#E9EAED] rounded-xl hover:scale-105 transition-all duration-300'><FaLinkedin /></Link>
                            <Link href={process.env.NEXT_PUBLIC_EMAIL_LINK} target='_blank' className='cursor-pointer p-4 bg-[#E9EAED] rounded-xl hover:scale-105 transition-all duration-300'><MdEmail /></Link>
                        </div>
                    </div>
                </div>

                <div className=' bg-[#F7FAFE] rounded-xl flex flex-col max-w-70'>
                    <MenuBar menubarTitle={'~/available'} />
                    <div className='flex flex-col p-5 gap-3'>
                         <div className="relative flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="absolute w-3 h-3 rounded-full bg-green-400 animate-ping opacity-75" />
                            <h1 className='font-medium text-lg'>Available for work</h1>
                        </div>
                        
                        <p className='text-sm text-[#6A7280]'>Open to freelance projects and full-time opportunities. Let's discuss how I can help with your next project!</p>

                    </div>
                </div>
           </div>


           <div className='bg-[#F7FAFE] rounded-xl max-w-120 w-full'>
                <MenuBar menubarTitle={'~/contactMe'}/>
                <form className='py-8 px-5'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label className='block font-medium' htmlFor="userName">Name</label>
                            <input value={formData.userName} onChange={handleInputChange} className='border border-black/5 focus:border-[#6A53E9] focus:ring-1 focus:ring-[#6A53E9]  focus:outline-none rounded-xl p-2 bg-[#E9EAED]' type="text" name='userName' id='userName' placeholder='Enter your name' required/>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='block font-medium' htmlFor="email">Email</label>
                            <input value={formData.email} onChange={handleInputChange} className='border border-black/5 focus:border-[#6A53E9] focus:ring-1 focus:ring-[#6A53E9] focus:outline-none rounded-xl p-2 bg-[#E9EAED]' type="email" name='email' id='email' placeholder='Enter your email' required  />
                        </div>
                    </div>

                    <div className='flex flex-col pt-6 gap-2'>
                        <label className='font-medium' htmlFor="message">Message</label>
                        <textarea value={formData.message} onChange={handleInputChange} className='border border-black/5 focus:border-[#6A53E9] focus:ring-1 focus:ring-[#6A53E9]  focus:outline-none rounded-xl p-2 bg-[#E9EAED]' rows={5} name="message" id="message" placeholder='...'></textarea>
                    </div>

                    <div className='pt-5'>
                        <button onClick={handleSubmit} className='w-full bg-[#007BFF] text-white rounded-xl py-3 cursor-pointer hover:scale-105 transition-all duration-300'>{isSubmitting ?"Submitting...Please Wait" : "Send me a message"}</button>
                    </div>
                </form>
           </div>
       </div>

        <div className="mt-16 text-center text-sm text-[#6A7280]">
          <p>Built with ❤️ © {new Date().getFullYear()} --- Sharad Ghimire </p>
        </div>

        <ToastContainer />

    </div>
  )
}

export default ContactMe