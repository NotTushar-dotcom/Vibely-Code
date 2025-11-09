import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row item-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
            <div>
                <div className="flex items-center gap-2">
                    <img src={assets.logo} alt="logo" className='w-32 sm:w-20 cursor-pointer'/>
                    <div className="text-3xl sm:text-2xl font-bold text-primary">
                        Vibely Code
                    </div>
                </div>
                <p className='max-w-[410px] mt-6'>Vibely Code 💻✨ is a curated space for modern devs — sharing aesthetic code tips , AI insights 🤖, and multi-language guides 🌐 to make learning beautifully simple and inspiring. 💫</p>
            </div>
            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                {footer_data.map((section, index)=> (
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                        <ul className='text-sm space-y-1'>
                            {section.links.map((link, i)=>(
                                <li key={i}>
                                    <a href="#" className='hover:underline transition'>{link}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Made with ❤️ by VibelyCode</p>
      
    </div>
  )
}

export default Footer
