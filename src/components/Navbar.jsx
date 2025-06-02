import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsTwitterX } from 'react-icons/bs'
import Logo from "../assets/images/Logo1.svg"
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const links = [
    { label: '[', to: "home" },
    { label: 'Home,', to: "home" },
    { label: 'About,', to: "about" },
    { label: 'Skills,', to: "skills" },
    { label: 'Work,', to: "work" },
    { label: 'Contact', to: "contact" },
    { label: ']', to: "home" },
  ]

  const icons = [
    { icon: <FaLinkedin size={18} />, label: 'Linkedin', href: 'https://www.linkedin.com/in/diego-carve/', color: '[#4267b2]' },
    { icon: <FaGithub size={18} />, label: 'Github', href: 'https://github.com/Diegocchaves', color: '[#333333]' },
    { icon: <BsTwitterX size={18} />, label: 'twiter/X', href: 'https://twitter.com/diego_carve', color: '[#1da1f2]' },
    { icon: <HiOutlineMail size={18} />, label: 'Email', href: '/', color: '[#6fc2b0]' },
    { icon: <BsFillPersonLinesFill size={18} />, label: 'Resume', href: '/', color: '[#565f69]' },
  ]

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 md:px-6  bg-black text-gray-30 '>
      <div className='flex items-center justify-start '>
        <Link to='home' smooth={true} duration={500} className='flex justify-start cursor-pointer'>
          <img src={Logo} alt='logo' className='w-8 h-8' />
        </Link>
      </div>

      {/* menu */}
      <nav className='justify-end hidden gap-2 w-80 md:flex'>
        {links.map((link, index) => (
          <div key={index} >
            <Link to={link.to}
              smooth={true}
              duration={500}
              className='cursor-pointer'>
              <p className='text-white text-sm font-extralight transition hover:text-[#1da1f2]'>{link.label}</p>
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
      <nav className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center gap-16'}>
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
      <nav className='hidden md:flex fixed flex-col top-[35%] gap-4 left-0'>
        {icons.map((icon, index) => (
          <div key={index} className={`w-[150px] h-[60px] flex justify-between items-center ml-[-96px] hover:ml-[-10px] duration-300 ${icon.color}`}>
            <a
              href={icon.href}
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
