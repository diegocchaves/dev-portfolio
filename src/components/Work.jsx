import React from 'react';
import BeachSpaceImage from '../assets/images/bs-logo.png';
import CuidandoDoMoneyImage from '../assets/images/cuidando-do-money-logo.svg';
import MicroActionsImage from '../assets/images/micro-act-logo.svg';
import FaenaAppImage from '../assets/images/faena-image.svg';

const Work = () => {
  const works = [
    { label: 'Beach Space', href: 'https://github.com/diegocchaves/beach-space', url: 'https://beach-space.vercel.app/login', image: BeachSpaceImage },
    { label: 'Cuidando do Money', href: 'https://github.com/diegocchaves/cuidando-do-money', url: 'https://cuidandodomoney.vercel.app/', image: CuidandoDoMoneyImage },
    { label: 'Micro Actions', href: 'https://github.com/diegocchaves/micro-actions', url: '', image: MicroActionsImage },
    { label: 'Faena App', href: 'https://github.com/diegocchaves/faena-app', url: '', image: FaenaAppImage },
  ];

  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#28bdec]'>Work</p>
          <p className='py-4'>// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <nav className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {works.map((work, index) => (
            <div
              key={index}
              className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Background Image */}
              <div
                className='absolute inset-0 transition-all duration-300 bg-center bg-cover rounded-md opacity-5 group-hover:opacity-100 group-hover:scale-105'
                style={{
                  backgroundImage: `url(${work.image})`,
                }}
              ></div>
              <div className='relative z-10 flex flex-col items-center justify-center'>
                <p className='mb-6 text-xl font-bold'>{work.label}</p>
                <div className='flex flex-row items-center justify-center gap-6'>
                  <a href={work.href} className='block py-4 text-2xl transition hover:text-purple-800'>
                    <button className='px-4 py-3 m-2 text-sm font-medium text-center text-gray-700 bg-white rounded-lg'>Code</button>
                  </a>
                  <a href={work.url} className='block py-4 text-2xl transition hover:text-purple-800'>
                    <button className='px-4 py-3 m-2 text-sm font-medium text-center text-gray-700 bg-white rounded-lg'>Web</button>
                  </a>
                </div>
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