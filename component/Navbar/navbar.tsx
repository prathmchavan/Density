"use client";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image'; // Import the Image component

import LogoImage from '../../public/anii.gif';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Your handleScroll logic here
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className=" text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
        <Image src={LogoImage} alt="Logo" width={100} height={40} />
          <div className="flex space-x-6 text-black font-noto-sans fontsi ">
            <Link
              to="section1"
              spy={true}
              smooth={true}
              duration={500}
              className={`nav-link ${activeSection === 'section1' ? 'active' : ''} `}
            >
              Emotions
            </Link>
            <Link
              to="section2"
              spy={true}
              smooth={true}
              duration={500}
              className={`nav-link ${activeSection === 'section2' ? 'active' : ''}`}
            >
              Manifesto
            </Link>
            
            <Link
              to="section2"
              spy={true}
              smooth={true}
              duration={500}
              className={`nav-link ${activeSection === 'section2' ? 'active' : ''}`}
            >
                Self Awarness test
            </Link>
            
            <Link
              to="section2"
              spy={true}
              smooth={true}
              duration={500}
              className={`nav-link ${activeSection === 'section2' ? 'active' : ''}`}
            >
              Work With Us
            </Link>
            {/* Add more navigation links */}
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-2xl">
            Download
          </button>
        </div>

        {/* Underline for active section */}
        <div
          className={`underline ${activeSection === 'section1' ? 'underline-section1' : ''} ${activeSection === 'section2' ? 'underline-section2' : ''}`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
