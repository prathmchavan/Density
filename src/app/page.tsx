
"use client";
import { useEffect } from 'react';
import gsap from 'gsap';

const Home: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animate the element with GSAP
      gsap.from('.animate-me', { opacity: 0, duration: 1, y: 50 });
    }
  }, []);

  return (
    <div className="animate-me">
      This element will be animated.
    </div>
  );
};

export default Home;
