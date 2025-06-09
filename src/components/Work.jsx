import React from 'react';
import { GrStatusGoodSmall } from 'react-icons/gr';
import BeachSpaceImage from '../assets/images/bs-mockup.svg';
import CuidandoDoMoneyImage from '../assets/images/cm-mockup.svg'
import MicroActionsImage from '../assets/images/ma-mockup.svg'
import MicroActionsBlog from "../assets/images/ma-blog-mockup.svg";

const Work = () => {
  const works = [
    { label: 'Micro Actions Blog', href: 'https://github.com/diegocchaves/micro-actions-blog', url: 'https://www.microactions.blog', image: MicroActionsBlog, Date: 'Mon May 8 2023 ', value: 'In Progress', color: "text-yellow-500" },
    { label: 'Micro Actions', href: 'https://github.com/diegocchaves/micro-actions', url: 'https://www.microactions.co', image: MicroActionsImage , Date: 'Mon May 8 2023 ',  value: 'In Progress', color: "text-yellow-500" },
    { label: 'Cuidando do Money', href: 'https://github.com/diegocchaves/cuidando-do-money', url: 'https://cuidandodomoney.vercel.app', image: CuidandoDoMoneyImage, Date: 'Mon May 8 2023 ', value: 'Completedå', color: "text-green-500" },
    { label: 'Beach Space', href: 'https://github.com/diegocchaves/beach-space', url: 'https://beach-space.vercel.app/login', image: BeachSpaceImage, Date: 'Mon May 8 2023 ', value: 'Completed', color: "text-green-500" },
  ];

  const [visibleCount, setVisibleCount] = React.useState(3);

  const handleLoadMore = () => {
    setVisibleCount(works.length);
  };

  return (
    <div name='work' className='pt-20 text-gray-300 bg-black md:pt-40 insert-0'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col items-center pb-8 '>
          <p className='inline text-lg font-bold md:text-xl'>[ Work ]</p>
          <p className='py-4'>// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <nav className='grid w-full h-full grid-cols-2 gap-4 p-4 md:flex md:flex-col '>
          {works.slice(0, visibleCount).map((work, index) => (
            <div
              key={index}
              className="flex items-center justify-start w-full h-full border border-gray-700 rounded-md md:py-3 md:px-3 "
            >
              <div className='flex items-center justify-center border border-gray-700 rounded-md w-80 h-80 bg-gray-50'>
              {/* Background Image */}
              <img
                src={work.image}
                alt={work.label}
                className="flex items-center justify-center w-40 h-40 p-2 m-2 rounded md:w-full md:h-full"
              />
              </div>
              <div className='flex flex-col mx-10 md:grid md:grid-cols-1 md:gap-4 md:items-center md:justify-center'>
                <div className='flex flex-col justify-start '>
                 <p className='text-xl font-bold'>{work.label}</p>
                 <div className='flex flex-col gap-1 md:mt-5'>
                   <span className='font-medium text-gray-500'>Domain</span>
                   <a href={work.url} className='text-sm font-medium text-gray-100 transition hover:text-[#1da1f2]' target="_blank" rel="noopener noreferrer">{work.url.replace(/https?:\/\//, '')}</a>
                   <span className='font-medium text-gray-500'>Source</span>
                    <a href={work.href} className='text-sm font-medium text-gray-100 transition hover:text-[#1da1f2]' target="_blank" rel="noopener noreferrer"> {work.href.replace(/https?:\/\//, '')}</a>
                    <div className='flex flex-row items-center justify-between mt-4'>
                      <div className='flex flex-col text-gray-100'>
                       <span className='mb-2 font-medium text-gray-500'>Status:</span>
                       <div className='flex flex-row items-center gap-2'>
                        <span className={`flex items-center ${work.color}`}>
                          <GrStatusGoodSmall size={12}/>
                        </span>
                        <span className='text-sm '>{work.value}</span>
                       </div>
                      </div>
                       <div className='flex flex-col text-gray-100'>
                       <span className='mb-2 font-medium text-gray-500'>Created:</span>
                        <span className='text-sm '>{work.Date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>
        {visibleCount < works.length ? (
          <div className='flex items-center justify-center mt-4'>
            <button
              onClick={handleLoadMore}
              className='px-4 py-2 text-sm text-white underline transition-colors duration-300 underline-offset-4 hover:text-blue-500'
            >
              Load More
            </button>
          </div>
        ):(
          <div className='flex items-center justify-center mt-4'>
            <button
            onClick={() => setVisibleCount(3)}
            className='px-4 py-2 text-sm text-white underline transition-colors duration-300 underline-offset-4 hover:text-blue-500'>
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;


