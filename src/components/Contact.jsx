import React from 'react'

const Contatc = () => {

  const [ form , setForm ] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    setTimeout(() => setForm({ name: '', email: '', message: '' }), 100); // Clear after submit
  };
  
  return (
    <div name='contact' className='flex flex-col items-center justify-center p-4 py-16 text-gray-300 bg-black md:py-36' >
      <div className='flex flex-col text-center md:py-10 '>
          <p className='inline text-lg font-bold md:text-xl'>[ Contact ]</p>
          <p className='py-6 text-[15px] md:text-lg'>//Submit the form below or shoot me an email - diegocchaves21@gmail.com</p>
      </div>
      <form method='POST'
       action="https://getform.io/f/f437e598-9e82-4608-8df9-dff71cc633c9"
        className='flex flex-col max-w-[600px] w-full border border-gray-700 p-4 md:p-8 rounded-lg text-sm  '
        onSubmit={handleSubmit}      
        autoComplete='off'
        >
        <input className='p-2 bg-gray-800 border border-gray-600 rounded-md' type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange}  />
        <input className='p-2 my-4 bg-gray-800 border border-gray-600 rounded-md' type="email" placeholder='Email' name='email' value={form.email} onChange={handleChange} />
        <textarea className='p-2 bg-gray-800 border border-gray-600 rounded-md' name='massage' rows='10' placeholder='Message' onChange={handleChange}></textarea>
        <button className='flex items-center px-4 py-3 mx-auto my-8 text-black bg-gray-100 border-2 rounded-md group hover:bg-gray-900 hover:border-gray-50 hover:text-white'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contatc