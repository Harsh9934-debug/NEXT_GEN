import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <div className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28 lg:bottom-72'>
        <p className='font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight text-white/90'>
          At <span className='font-semibold text-[#D3FD50] tracking-wider'>NEXTGEN</span>, we love building things that help your business grow. From websites to apps to social media, our goal is to make your brand stand out. We believe in clear ideas, honest work, and results that last.
        </p>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/agence'>ASSOCIATE</Link>
      </div>
    </div>
  )
}

export default HomeBottomText