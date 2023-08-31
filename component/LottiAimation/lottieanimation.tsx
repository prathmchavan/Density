import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web'; // Import the lottie-web library

interface LottieProps {
  animationData: any; // The JSON animation data
}

const LottieAnimation: React.FC<LottieProps> = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize the Lottie animation
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg', // Use 'svg' or 'canvas' dependi   ng on your preference
        loop: true,
        autoplay: true,
        animationData, // The JSON animation data
      });

      return () => {
        // Clean up the animation when the component is unmounted
        anim.destroy();
      };
    }
  }, [animationData]);

  return <div ref={containerRef} />;
};

export default LottieAnimation;
