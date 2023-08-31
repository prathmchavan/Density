import React from 'react';
import MobileAppImage from '../../public/ani3.gif';
import Image from 'next/image';
import { motion } from 'framer-motion';


const EmotionSection: React.FC = () => {
  return (
    <motion.section
      id="emotion"
      className="bg-purple-200 py-16 w-4/3 mx-5 rounded-3xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Content on the left */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">Emotion Tab Title</h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            eros ut arcu accumsan aliquet.
          </p>
        </div>

        {/* Mobile app image on the right */}
        <div className="md:w-1/2 p-6 flex justify-center">
          <Image src={MobileAppImage} alt="Mobile App" className="w-full h-auto rounded-full" />
        </div>
      </div>
    </motion.section>
  );
};

export default EmotionSection;
