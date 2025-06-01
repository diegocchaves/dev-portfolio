import React from 'react'
import HTML from '../assets/images/html.png'
import CSS from '../assets/images/css.png'
import JavaScript from '../assets/images/javascript.png'
import ReactImg from '../assets/images/react.png'
import Node from '../assets/images/node.png'
import GitHub from '../assets/images/github.png'
import Tailwind from '../assets/images/tailwind.png'
import Mongo from '../assets/images/mongo.png'
import TypeScript from '../assets/images/typescript.svg'
import Next from '../assets/images/nextjs.png'

const Skills = () => {
  return (
    <div name='skills' className='pt-20 text-gray-300 bg-black  md:pt-40'>
      {/* Contanier */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#28bdec]'>Skills</p>
          <p className='py-4'>// These are the technologies I've working with</p>
        </div>

        <div className='grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4 '>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='w-20 mx-auto' src={Node} alt="Node icon" />
            <p className='my-4'>Node.js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
            <p className='my-4'>Mongo DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='mx-auto w-28' src={TypeScript} alt="Type Script icon" />
            <p className='my-4'>Type Script</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
            <img className='mx-auto w-28 ' src={Next} alt="Next.js icon" />
            <p className='my-4'>Next.js</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills