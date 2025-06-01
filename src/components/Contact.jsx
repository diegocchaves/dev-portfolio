import React from 'react'

const Contatc = () => {
  return (
    <div name='contact' className=' bg-black flex justify-center items-center p-4 md: md:pb-20 md:pt-40 pt-20' >
      <form method='POST' action="https://getform.io/f/f437e598-9e82-4608-8df9-dff71cc633c9" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#28bdec] text-gray-300'>Contact</p>
          <p className='py-4 text-gray-300'>//Submit the form below or shoot me an email - diegocchaves21@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name='massage' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#28bdec] hover:border-[#28bdec] px-4 py-3 my-8 mx-auto flex items-center '>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contatc