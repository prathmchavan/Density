import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logoimage from '../../public/ani4.gif';

const ManifestoSection: React.FC = () => {
  return (
    <motion.section
      className="rounded-lg bg-yellow-100 w-4/5 md:w-2/3 lg:w-1/2 mx-auto p-8 flex items-center justify-center my-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image on the left */}
        <div className="md:w-1/2 p-6">
          <Image src={logoimage} alt="Manifesto Image" width={300} height={300} className="rounded-full" />
        </div>

        {/* Content on the right */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">Our Manifesto</h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt mi ac dui dignissim, et convallis ligula vulputate.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ManifestoSection;
