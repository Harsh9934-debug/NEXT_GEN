import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-space-grotesk relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 px-4'>
      {/* Info text: static on mobile/tablet, absolute on large screens to avoid layout shift */}
      <div className='order-3 sm:order-none w-full sm:w-[28rem] max-w-md text-center sm:text-left mt-4 sm:mt-0 lg:absolute lg:right-20 lg:bottom-72 lg:w-[17vw]'>
        <p className='font-inter text-sm sm:text-base lg:text-lg leading-relaxed mix-blend-difference text-white drop-shadow-lg'>
          At <span className='font-semibold tracking-wider'>NEXTGEN</span>, we build websites, apps, and content that help your business grow. Clear ideas, honest work, results that last.
        </p>
      </div>

      {/* CTA pills */}
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-16 sm:h-20 lg:h-44 flex items-center px-4 sm:px-8 lg:px-14 border-white rounded-full uppercase shrink-0'>
        <Link className='text-2xl sm:text-3xl lg:text-[6vw] lg:mt-6' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-16 sm:h-20 lg:h-44 flex items-center px-4 sm:px-8 lg:px-14 border-white rounded-full uppercase shrink-0'>
        <Link className='text-2xl sm:text-3xl lg:text-[6vw] lg:mt-6' to='/agency'>ASSOCIATE</Link>
      </div>
    </div>
  )
}

export default HomeBottomText