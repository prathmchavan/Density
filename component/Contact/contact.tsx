import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8 bg-gray-900 text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <div className="flex space-x-8">
        <div className="flex items-center">
          <FaEnvelope className="text-2xl mr-2" />
          <span>Email: contact@example.com</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-2xl mr-2" />
          <span>Phone: +1 123-456-7890</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-2xl mr-2" />
          <span>Address: 123 Futuristic Street, City</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
