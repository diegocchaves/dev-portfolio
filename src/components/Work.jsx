import React from 'react';
import BeachSpaceImage from '../assets/images/bs-logo.png';
import CuidandoDoMoneyImage from '../assets/images/cdm-logo.svg';
import MicroActionsImage from '../assets/images/micro-actions-logo.svg';
import FaenaAppImage from '../assets/images/faena-green-logo.svg';

const Work = () => {
  const works = [
    { label: 'Beach Space', href: 'https://github.com/diegocchaves/beach-space', url: 'https://beach-space.vercel.app/login', image: BeachSpaceImage },
    { label: 'Cuidando do Money', href: 'https://github.com/diegocchaves/cuidando-do-money', url: 'https://cuidandodomoney.vercel.app/', image: CuidandoDoMoneyImage },
    { label: 'Micro Actions', href: 'https://github.com/diegocchaves/micro-actions', url: '', image: MicroActionsImage },
    { label: 'Faena App', href: 'https://github.com/diegocchaves/faena-app', url: '', image: FaenaAppImage },
  ];

  return (
    <div name='work' className='pt-20 text-gray-300 bg-black md:pt-40'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col items-center pb-8 '>
          <p className='inline text-lg font-bold md:text-xl'>[ Work ]</p>
          <p className='py-4'>// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <nav className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {works.map((work, index) => (
            <div
              key={index}
              className="relative shadow-lg bg-[#0e203b] shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={work.image}
                alt={work.label}
                className="absolute items-center justify-center object-cover transition-all duration-300 rounded-md opacity-0 group-hover:opacity-100 group-hover:scale-95"
              />

              <div className='relative flex flex-col items-center justify-center'>
                <p className='mb-12 text-xl font-bold'>{work.label}</p>
                <div className='flex flex-row items-center justify-center gap-3'>
                  <a href={work.href} className='py-4 text-2xl transition hover:text-purple-800'>
                    <button className='px-4 py-2 m-2 text-sm font-medium text-center text-gray-700 bg-[#ccd6fde0] rounded-lg'>Code</button>
                  </a>
                  <a href={work.url} className='py-4 text-2xl transition hover:text-purple-800'>
                    <button className='px-4 py-2 m-2 text-sm font-medium text-center text-gray-700 bg-[#ccd6fde0] rounded-lg'>Web</button>
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