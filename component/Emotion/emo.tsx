import React from 'react';
import MobileAppImage from '../../public/ani3.gif';
import Image from 'next/image';

const EmotionSection: React.FC = () => {
  return (
    <section id="emotion" className="bg-purple-200 py-16 border rounded-2xl w-4/4 flex align-middle justify-center mx-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Content on the left */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">Emotion Tab Title</h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            eros ut arcu accumsan aliquet.
          </p>
        </div>

        {/* Mobile app image on the right */}
        <div className="md:w-1/2 p-6">
          <Image src={MobileAppImage} alt="Mobile App" className="w-full h-auto rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default EmotionSection;
