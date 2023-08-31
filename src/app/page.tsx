"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../../component/Navbar/navbar';
import EmotionSection from '../../component/Emotion/emo';
import ContentSection from '../../component/Content/content';

const Home: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animate the element with GSAP
      gsap.from('.animate-me', { opacity: 0, duration: 1, y: 50 });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-36 "> {/* Add padding top for the content to avoid navbar overlap */}
        <EmotionSection />
        {/* Other sections */}
        <ContentSection/>
      </div>
   
    </div>
  );
};

export default Home;
