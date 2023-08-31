
"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../../component/Navbar/navbar';

const Home: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animate the element with GSAP
      gsap.from('.animate-me', { opacity: 0, duration: 1, y: 50 });
    }
  }, []);

  return (
    <div >
      <Navbar/>
    </div>
  );
};

export default Home;
