'use client';

import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-wrap justify-center items-center gap-8">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            ADYOUNEED, 40 Rue Des Blancs Manteaux 75004 Paris
          </p>
          <p className="text-xs text-gray-500 mt-2 flex items-center justify-center">
            Made with <HeartIcon className="w-4 h-4 text-red-500 mx-1" /> in Paris
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            © 2025 ADYOUNEED | All rights reserved
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

