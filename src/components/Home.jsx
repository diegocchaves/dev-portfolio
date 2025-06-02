import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Photo from '../assets/images/dev-bckgrd.svg' // Ensure this path is correct

const Home = () => {
  return (
    <div style={{
            backgroundImage: `linear-gradient(rgba(10,25,47, -20.95), rgba(10,25,47, 20.05)), url(${Photo})`,
            backgroundBlendMode: 'color-dodge',
            backgroundSize: 'inherit',
            backgroundPosition: 'inherit',
            backgroundRepeat: 'no-repeat',
        }} name='home' className='z-10 w-full h-full py-20 bg-black bg-opacity-60 md:py-40' >
      {/* Container */}
      <div className='flex items-center justify-center w-full h-full space-y-10'>
      <div className='flex flex-col justify-start px-8 mx-auto max-w-[1000px]'>
        <h1 className=' text-4xl font-bold text-white md:text-[11rem] mt-24 mb-28'>Diego</h1>
        <h1 className=' text-4xl font-bold text-white md:text-[11rem] mb-16'>Carvalho</h1>
        <span className='block text-[#8892b0] text-lg py-4 w-fit'>I enjoy creating clean and efficient code that not only looks great,but functions flawlessly. <br />
        My goal is to collaborate with other
          like-minded individuals and businesses
           to create meaningful solutions <br />
            that make an impact in the world.</span>
        {/* <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full-stack developer.</h2> */}
        {/* <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a passionate entry-level full-stack developer who is embarking on an exciting journey in the field of web development.
          I enjoy creating clean and efficient code that not only looks great,but functions flawlessly. My goal is to collaborate with other
          like-minded individuals and businesses to create meaningful solutions that make an impact in the world.</p>
        <p className='text-1xl sm:text-1xl font-bold text-[#ccd6fd]'>Let's create something great together!</p> */}
        <Link to='work' smooth={true} duration={500} className='cursor-pointer' >
          <button className='flex items-center px-6 py-3 my-5 text-black bg-gray-100 border-2 rounded-md group hover:bg-gray-900 hover:border-gray-50 hover:text-white'>View Work
            <span className='duration-300 group-hover:rotate-90'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Home