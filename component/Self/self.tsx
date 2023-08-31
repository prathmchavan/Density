import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SelfImprovementSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      className="bg-blue-200 w-4/3 mx-5 border rounded-lg p-8 flex items-center justify-center my-8 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Content on the left */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">Self Improvement</h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt mi ac dui dignissim, et convallis ligula vulputate.
          </p>
        </div>

        {/* Image on the right */}
        <div className="md:w-1/2 p-6">
          {/* Placeholder image */}
          <img src="/self-improvement-image.jpg" alt="Self Improvement" className="w-full h-auto rounded-full" />
        </div>
      </div>
    </motion.section>
  );
};

export default SelfImprovementSection;
