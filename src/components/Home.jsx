import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]' >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#28bdec]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6fd]'>Diego Carvalho</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full-stack developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a passionate entry-level full-stack developer who is embarking on an exciting journey in the field of web development.
          I enjoy creating clean and efficient code that not only looks great,but functions flawlessly. My goal is to collaborate with other
          like-minded individuals and businesses to create meaningful solutions that make an impact in the world.</p>
        <p className='text-1xl sm:text-1xl font-bold text-[#ccd6fd]'>Let's create something great together!</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-5 flex items-center hover:bg-[#28bdec] hover:border-[#28bdec]'>View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>

        </div>

      </div>
    </div>
  )
}

export default Home