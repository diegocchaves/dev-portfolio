import React from 'react';
import BeachSpaceImage from '../assets/images/bs-mockup.svg';
import CuidandoDoMoneyImage from '../assets/images/cm-mockup.svg'
import MicroActionsImage from '../assets/images/ma-mockup.svg'
import MicroActionsBlog from "../assets/images/ma-blog-mockup.svg";

const Work = () => {
  const works = [
    { label: 'Micro Actions Blog', href: 'https://www.microactions.blog/', url: '', image: MicroActionsBlog}, 
    { label: 'Micro Actions', href: 'https://github.com/diegocchaves/micro-actions', url: '', image: MicroActionsImage },
    { label: 'Cuidando do Money', href: 'https://github.com/diegocchaves/cuidando-do-money', url: 'https://cuidandodomoney.vercel.app/', image: CuidandoDoMoneyImage },
    { label: 'Beach Space', href: 'https://github.com/diegocchaves/beach-space', url: 'https://beach-space.vercel.app/login', image: BeachSpaceImage },
  ];

  return (
    <div name='work' className='pt-20 text-gray-300 bg-black md:pt-40 insert-0'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col items-center pb-8 '>
          <p className='inline text-lg font-bold md:text-xl'>[ Work ]</p>
          <p className='py-4'>// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <nav className='grid w-full h-full grid-cols-2 gap-4 p-4 md:flex md:flex-col '>
          {works.map((work, index) => (
            <div
              key={index}
              className="flex items-center justify-start w-full h-full border border-gray-700 rounded-md md:py-3 md:px-3 "
            >
              <div className='flex items-center justify-center border border-gray-700 rounded-md w-80 h-80 bg-gray-50'>
              {/* Background Image */}
              <img
                src={work.image}
                alt={work.label}
                className="flex items-center justify-center w-40 h-40 p-2 m-2 transition-transform duration-300 ease-in-out rounded md:w-fit md:h-fit"
              />
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Work;


{/* <div className='opacity-0 group-hover:opacity-100'>
  </div> */}

  // <div className='relative flex flex-col items-center justify-center'>
  //               <p className='text-xl font-bold '>{work.label}</p>
  //               {/* <div className='flex flex-row items-center justify-center gap-3'>
  //                 <a href={work.href} className='py-4 text-2xl transition hover:text-purple-800'>
  //                   <button className='px-4 py-2 m-2 text-sm font-medium text-center text-gray-700 bg-[#ccd6fde0] rounded-lg'>Code</button>
  //                 </a>
  //                 <a href={work.url} className='py-4 text-2xl transition hover:text-purple-800'>
  //                   <button className='px-4 py-2 m-2 text-sm font-medium text-center text-gray-700 bg-[#ccd6fde0] rounded-lg'>Web</button>
  //                 </a>
  //               </div> */}
  //             </div>