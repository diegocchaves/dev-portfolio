import React from 'react'

const About = () => {
  return (
    <div name='about' className='py-20 text-gray-300 bg-black md:py-36' >
      <div className='flex flex-col items-center justify-center w-full h-full'>
          <div className='pb-8 '>
            <p className='inline text-lg font-bold md:text-xl '>
              [ About ]
            </p>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='text-3xl font-bold md:text-4xl sm:text-right' p>
            <p>Hi, I'm Diego, nice to meet you.
              Please take a look around.</p>
          </div>
          <div className='md:text-lg text-sm text-[#8892b0]'>
            <p>I am passionate about building excellent software that improves
              the lives of those around me. While I may not have professional experience working in a business setting yet,
              I am eager to showcase my skills and contribute to real-world projects.
              I am adept at creating visually appealing and responsive user interfaces using HTML and CSS, and I have the ability to add interactivity and dynamic functionality with JavaScript.</p>
            <br />
            <p>On the back-end, I can build basic server-side applications, handle data processing, and interact with databases.
              I am familiar with frameworks such as Express.js, enabling me to develop APIs and integrate with server systems.
              Additionally, I have experience working with MongoDB, a popular NoSQL database, allowing me to efficiently store and retrieve data for web applications.</p>
            <br />
            <p className='text-1xl sm:text-1xl font-bold text-[#ccd6fd]'>
              What opportunities would arise with an ambitious and proactive team member,
              fueled by a strong desire to learn and enhance your software development skills?</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default About