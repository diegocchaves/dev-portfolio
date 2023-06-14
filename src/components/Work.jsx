import React from 'react'
import BeachSpaceLogo from '../assets/images/bs-image.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#28bdec]'>Work</p>
          <p className='py-4' >// Check out some of my recent work</p>
        </div>
        {/* Contanier */}
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>

          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${BeachSpaceLogo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-black'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                {/* link of the project on internet */}
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                {/* link the code of the project on GitHub */}
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${BeachSpaceLogo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-black'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${BeachSpaceLogo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-black'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${BeachSpaceLogo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-black'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${BeachSpaceLogo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-black'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${BeachSpaceLogo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-black'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work