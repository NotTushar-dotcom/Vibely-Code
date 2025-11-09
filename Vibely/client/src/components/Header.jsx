import React from 'react'
import { assets } from '../assets/assets'

export default function Header() {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-5 mb-8'>
            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                <p>Welcome to VibelyCode</p>
                <img src={assets.star_icon} className='w-2.5' alt="" />
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-gray-900 dark:text-white">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
    Code Smart.
  </span>
  <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
    Create Bold.
  </span>
  <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    Stay Vibely.
  </span>
</h1>

            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>Dive into aesthetic web dev tutorials💻 + next-level AI tips🤖 Where tech gets creative and learning hits different.</p>

            <form className='flex justify-between max-w-lg mx-auto max-sm:scale-75 border border-gray-300 bg-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <input type="text" placeholder='Search for blogs' required className='w-full pl-6 pr-4 py-3 outline-none rounded-full focus:ring-2 focus:ring-primary/50'/>
              <button type='submit' className='bg-primary text-white px-6 py-3 m-1 rounded-full hover:scale-105 transition-all cursor-pointer font-medium'>Search</button>
            </form>

        </div>
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
      
    </div>
  )
}
