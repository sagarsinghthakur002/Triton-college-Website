import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/images/menu.png';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav
      className={`container w-full fixed z-10  flex items-center justify-between px-6 transition-all duration-500 ${
        sticky ? 'bg-[#2f2eff] top-0' : 'bg-transparent top-10'
      }`}
    >
      {/* Logo */}
      <a href="/">
        <img src='/logo.png' alt="logo" className="w-24 hover:scale-105 transition-transform duration-300" />
      </a>

      {/* Desktop Nav */}
      <ul
        className={`md:flex items-center gap-6 font-semibold text-white transition-all duration-300
          ${mobileMenu ? 'fixed top-0 right-0 mt-[70px] h-full w-50 bg-[#2f2eff] pt-40 pl-6 flex flex-col z-20' : 'hidden md:flex'}
        `}
      >
        {['hero', 'about', 'program', 'services'].map((section) => (
          <li key={section} className='hover:text-[#25A4E5] '>
            <Link
              to={section}
              smooth={true}
              offset={section === 'hero' ? 0 : -260}
              duration={500}
              onClick={() => setMobileMenu(false)}
              className="hover:text-[#25A4E5] cursor-pointer  "
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
        <li>
          <button className="btn bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition">
            <Link
              to="contact"
              smooth={true}
              offset={-220}
              duration={500}
              onClick={() => setMobileMenu(false)}
            >
              Contact
            </Link>
          </button>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <img
        src={menuIcon}
        alt="menu"
        onClick={handleMobileMenu}
        className="w-8 md:hidden cursor-pointer z-30"
      />
    </nav>
  );
}

export default Navbar;







      // using css 
  
// import React, { use, useEffect } from 'react'
// import './Navbar.css'
// import logo from '../../assets/images/logo.png'
// import menu from '../../assets/images/menu.png'


// import { Link, Element } from 'react-scroll';
// function Navbar() {

//   const [sticky, setSticky] = React.useState(false)
   
 
//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       window.scrollY > 50 ? setSticky(true) : setSticky(false)
//     })
//   }
//   , [])

//   const [mobileMenu, setMobileMenu] = React.useState(false)
//   const handleMobileMenu = () => {
//     setMobileMenu(!mobileMenu)
//   }
  
//   return (
//     <nav className={container  ${sticky ? 'dark-nav': ''}}>

//         <a href='/' ><img  src={logo}
//         alt="logo" className='logo' /> </a>

//         <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
//             <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
//             <li> <Link to='about' smooth={true} offset={-260} duration={500}>About</Link> </li>
//             <li> <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link> </li>
//             <li> <Link to='services' smooth={true} offset={-230} duration={500}>Services</Link> </li>
//             <button className='btn' ><Link to='contact' smooth={true} offset={-220} duration={500}>Contact</Link></button>
//         </ul>
//         <img src={menu} alt="menu" className='menu' onClick={handleMobileMenu} />
        
//     </nav> 
//   )
// }

// export default Navbar
