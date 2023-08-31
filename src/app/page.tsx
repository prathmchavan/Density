"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin
import Navbar from '../../component/Navbar/navbar';
import EmotionSection from '../../component/Emotion/emo';
import ContentSection from '../../component/Content/content';
import ManifestoSection from '../../component/Manifesto/mani';
import SelfImprovementSection from '../../component/Self/self';
import ContactUs from '../../component/Contact/contact';

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const Home: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use GSAP to animate the sections on scroll
      gsap.from('.animate-me', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3, // Stagger the animations
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.animate-me', // Apply animation to elements with class 'animate-me'
          start: 'top 80%', // Adjust the start trigger position
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-36">
        <EmotionSection />
        {/* Other sections */}
        <ContentSection />
        <ManifestoSection/>
        <SelfImprovementSection/>

        <ContactUs/>
      </div>
    </div>
  );
};

export default Home;
