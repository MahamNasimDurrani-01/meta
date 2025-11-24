import React, { useState } from 'react'
import logo from '../../assets/removed_background.png'
export default function Nav({Services_ref, About_ref}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToServices = () => {
    Services_ref.current.scrollIntoView({ behavior: "smooth" })
  }
  const handleScrollToAbout = () => {
    About_ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className=" top-0 w-full px-6 py-4 flex items-center justify-between bg-transparent text-white  z-50 fixed">
        <div className='w-[100%] flex items-center justify-between mt-0'>

            <span className=" font-bold text-xl flex items-center gap-3">
                <img className='h-15 w-15' src={logo}/>
                <span className='p-0 m-0'>
                  <h2>MetaMeshLabs</h2>
                  <small className='text-[10px]'>AI Automation for every Business</small>
                </span>
            </span>
            {/* Desktop Menu */}
            {/* <ul className="hidden md:flex gap-6">
                <li>
                <a href="#" className="nav-link">Home</a>
                </li>
                <li>
                <a href="#" onClick={handleScrollToAbout} className="nav-link">About</a>
                </li>
                <li>
                <a href="#" onClick={handleScrollToServices} className="nav-link">Services</a>
                </li>
                <li>
                <a href="#" className="nav-link">Contact</a>
                </li>
            </ul> */}
        </div>
      {/* Mobile Hamburger */}
      {/* <button
        className="md:hidden  focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button> */}
      {/* Mobile Menu */}

      {/* {menuOpen && (
        <div className="
        absolute 
        top-16 right-4
        w-50 
        flex flex-col 
        items-center 
        space-y-4 
        py-4 
        md:hidden z-50
        opacity-90
        backdrop-blur-lg
        transform -translate-x-1/20
        transition-all duration-300 ease-in-out
        rounded-2xl
        hover:bg-gray-200
        bg-gray-300
        "
        >
            <ul className="gap-y-4 flex flex-col items-center">
                <li>
                <a href="#" className=" hover:text-blue-200 transition">Home</a>
                </li>
                <li>
                <a href="#" className=" hover:text-blue-200 transition">About</a>
                </li>
                <li>
                <a href="#" onClick={handleScrollToServices} className=" hover:text-blue-200 transition">Services</a>
                </li>
                <li>
                <a href="#" className=" hover:text-blue-200 transition">Contact</a>
                </li>
            </ul>
        </div>
 
        )} */}
    </nav>
  )
}
