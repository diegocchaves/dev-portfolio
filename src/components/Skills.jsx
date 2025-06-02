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
  const skills = [
    { src: HTML, alt: "HTML icon" },
    { src: CSS, alt: "CSS icon" },
    { src: JavaScript, alt: "JavaScript icon" },
    { src: ReactImg, alt: "React icon" },
    { src: Node, alt: "Node.js icon" },
    { src: Mongo, alt: "MongoDB icon" },
    { src: Tailwind, alt: "Tailwind CSS icon" },
    { src: GitHub, alt: "GitHub icon" },
    { src: TypeScript, alt: "TypeScript icon", className: 'w-28' },
    { src: Next, alt: "Next.js icon", className: 'w-28' }
  ];
  return (
    <div name='skills' className='pt-20 text-gray-300 bg-black md:pt-40'>
      {/* Contanier */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col items-center '>
          <p className='inline text-lg font-bold md:text-xl'>[ Skills ]</p>
          <p className='py-4'>// These are the technologies I've working with</p>
        </div>

        <div className='grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4 '>
          {skills.map((skill, index) => ( 
            <div key={index} className='shadow-md hover:shadow-[#2e2e2f] hover:scale-110 duration-500'>
              <img className={`w-20 mx-auto ${skill.className || ''}`} src={skill.src} alt={skill.alt} />
              <p className='my-4'>{skill.alt.split(' ')[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills