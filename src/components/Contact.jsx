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
    <div name='contact' className='flex items-center justify-center p-4 pt-20 bg-black md: md:pb-20 md:pt-40' >
      <form method='POST'
       action="https://getform.io/f/f437e598-9e82-4608-8df9-dff71cc633c9"
        className='flex flex-col max-w-[600px] w-full'
        onSubmit={handleSubmit}      
        autoComplete='off'
        >
        <div className='flex flex-col items-center mb-8'>
          <p className='inline text-lg font-bold text-gray-300 md:text-xl'>[ Contact ]</p>
          <p className='py-4 text-gray-300'>//Submit the form below or shoot me an email - diegocchaves21@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange}  />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={form.email} onChange={handleChange} />
        <textarea className='bg-[#ccd6f6] p-2' name='massage' rows='10' placeholder='Message' onChange={handleChange}></textarea>
        <button className='flex items-center px-4 py-3 mx-auto my-8 text-black bg-gray-100 border-2 rounded-md group hover:bg-gray-900 hover:border-gray-50 hover:text-white'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contatc