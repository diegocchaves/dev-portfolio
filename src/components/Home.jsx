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
        }} name='home' className='w-full h-full py-16 bg-black bg-opacity-40 md:py-36 ' >
      {/* Container */}
      <div className='flex md:justify-center md:items-center md:space-y-10'>
      <div className='flex flex-col px-4 py-16 md:py-0 md:px-8 '>
        <h1 className=' text-7xl font-bold text-white md:text-[11rem]'>Diego</h1>
        <h1 className=' text-7xl font-bold text-white md:text-[11rem] mb-2'>Carvalho</h1>
        <span className='block text-[#8892b0] text-sm md:text-lg py-4 w-fit'>I enjoy creating clean and efficient code that not only looks great,but functions flawlessly. <br />
        My goal is to collaborate with other
          like-minded individuals and businesses
           to create meaningful solutions <br />
            that make an impact in the world.</span>
        <Link to='projects' smooth={true} duration={500} className='cursor-pointer' >
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