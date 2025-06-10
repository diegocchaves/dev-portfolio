import React from 'react'
import { useEffect , useState} from 'react'
import Marquee from 'react-fast-marquee'
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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  , []);
  
  const skills = [
    { src: HTML, alt: "HTML icon"},
    { src: CSS, alt: "CSS icon" },
    { src: JavaScript, alt: "JavaScript icon" },
    { src: ReactImg, alt: "React icon" },
    { src: Node, alt: "Node.js icon" },
    { src: Mongo, alt: "MongoDB icon" },
    { src: Tailwind, alt: "Tailwind CSS icon" },
    { src: GitHub, alt: "GitHub icon" },
    { src: TypeScript, alt: "TypeScript icon" },
    { src: Next, alt: "Next.js icon" }
  ];
  return (
    <div name='skills' className='flex items-center justify-center py-20 text-gray-300 bg-black md:py-36'>
      {/* Contanier */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col items-center '>
          <p className='inline text-lg font-bold md:text-xl'>[ Skills ]</p>
          <p className='py-4 text-[15px] md:text-lg'>// These are the technologies I've working with</p>
        </div>
        {isMobile ? (
          <div className='grid grid-cols-3 gap-8 mt-6 text-center'>
            {skills.map((skill, index) => (
              <div key={index}>
                <img className={`w-16 mx-auto ${skill.className} || ""}`} src={skill.src} alt={skill.alt} />
              </div>
            ))}
          </div>
        ) : (
          <Marquee className='w-full h-full mt-32' play={true} speed={50} gradient={false}>
           <div className='flex flex-row w-full space-x-8 text-center'>
             {skills.map((skill, index) => (
              <div key={index}>
                <img className={`w-28 md:w-40 mx-8 ${skill.className || ""}`} src={skill.src} alt={skill.alt} />
                <p>{skill.alt.split('')[0]}</p>
              </div>
            ))}
           </div>
          </Marquee>
        )}
      </div>
    </div>
  );
}

export default Skills