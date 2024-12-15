import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsTwitterX } from 'react-icons/bs'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const links = [
    { label: 'Home', to: "home" },
    { label: 'About', to: "about" },
    { label: 'Skills', to: "skills" },
    { label: 'Work', to: "work" },
    { label: 'Contact', to: "contact" }
  ]

  const icons = [
    { icon: <FaLinkedin size={30} />, label: 'Linkedin', href: 'https://www.linkedin.com/in/diego-carve/', bgColor: 'bg-[#4267b2]' },
    { icon: <FaGithub size={30} />, label: 'Github', href: 'https://github.com/Diegocchaves', bgColor: 'bg-[#333333]' },
    { icon: <BsTwitterX size={25} />, label: 'twiter/X', href: 'https://twitter.com/diego_carve', bgColor: 'bg-[#1da1f2]' },
    { icon: <HiOutlineMail size={30} />, label: 'Email', href: '/', bgColor: 'bg-[#6fc2b0]' },
    { icon: <BsFillPersonLinesFill size={30} />, label: 'Resume', href: '/', bgColor: 'bg-[#565f69]' },
  ]

  return (
    <div className='fixed z-10 w-full h-[80px] flex justify-between items-center px-4 md:px-6  bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo image" style={{ width: '100px' }} />
      </div>

      {/* menu */}
      <nav className='hidden gap-14 w-fit md:flex'>
        {links.map((link, index) => (
          <div key={index}
            className='flex items-center w-full '>
            <Link to={link.to}
              smooth={true}
              duration={500}
              className='cursor-pointer'>
              <p className='text-white transition hover:text-[#1da1f2]'>{link.label}</p>
            </Link>
          </div>
        )
        )}
      </nav>

      {/* hamburge */}
      <div onClick={handleClick} className='z-10 md:hidden'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <nav className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-16'}>
        {links.map((link, index) => (
          <Link key={index}
            to={link.to}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
            className='items-center justify-center text-xl text-white'>
            <p>{link.label}</p>
          </Link>
        ))}
      </nav>

      {/* social icons */}
      <nav className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        {icons.map((icon, index) => (
          <div key={index} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-88px] hover:ml-[-10px] duration-300 ${icon.bgColor}`}>
            <a
              to={icon.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-around w-full gap-4 px-4 text-gray-300'>
              <p>{icon.label}</p>
              {icon.icon}
            </a>
          </div>
        ))}
      </nav>
    </div >
  )
}

export default Navbar
