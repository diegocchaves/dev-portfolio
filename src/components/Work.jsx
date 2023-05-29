import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#28bdec]'>Work</p>
          <p className='py-4' >// Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-col-2 md:grid-col-3 gap-4 '>
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div>
              <span>

              </span>
              <div>
                <a href="/">
                  <button></button>
                </a>

                <a href="">
                  <button></button>
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