import React from 'react'

const Contatc = () => {
  return (
    <div name='contact' className='flex items-center justify-center p-4 pt-20 bg-black md: md:pb-20 md:pt-40' >
      <form method='POST' action="https://getform.io/f/f437e598-9e82-4608-8df9-dff71cc633c9" className='flex flex-col max-w-[600px] w-full'>
        <div className='flex flex-col items-center mb-8'>
          <p className='inline text-lg font-bold text-gray-300 md:text-xl'>[ Contact ]</p>
          <p className='py-4 text-gray-300'>//Submit the form below or shoot me an email - diegocchaves21@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name='massage' rows='10' placeholder='Message'></textarea>
        <button className='flex items-center px-4 py-3 mx-auto my-8 text-black bg-gray-100 border-2 rounded-md  group hover:bg-gray-900 hover:border-gray-50 hover:text-white'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contatc