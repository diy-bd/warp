'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            <span className="block">Powerful Ads Made</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Effortlessly
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Create winning ads in minutes across top platforms, even if it's your first time.
          </motion.p>

          {/* Google Premier Partner Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-blue-900/30 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium mb-8"
          >
            <SparklesIcon className="w-4 h-4 mr-2" />
            ADYOUNEED, as a distinguished Google Premier Partner, proudly stands among the elite top 3% of global companies.
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              <RocketLaunchIcon className="w-5 h-5" />
              Start Your Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-blue-400 px-8 py-4 rounded-full text-lg font-semibold border border-gray-600 hover:border-blue-400 transition-all duration-200"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Platform Icons Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <div className="flex justify-center mb-8">
              <span className="text-gray-500 text-sm font-medium">Supports all major platforms</span>
            </div>
            
            {/* Animated Platform Badges */}
            <div className="relative h-32 overflow-hidden">
              <motion.div
                animate={{ x: [0, -100, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 items-center absolute left-0"
              >
                {['Meta Ads', 'Google Ads', 'Bing Ads', 'LinkedIn Ads', 'TikTok Ads', 'Pinterest Ads', 'Twitter Ads'].map((platform, index) => (
                  <motion.div
                    key={platform}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200 text-gray-700 font-medium whitespace-nowrap"
                  >
                    {platform}
                  </motion.div>
                ))}
                {/* Duplicate for seamless loop */}
                {['Meta Ads', 'Google Ads', 'Bing Ads', 'LinkedIn Ads', 'TikTok Ads', 'Pinterest Ads', 'Twitter Ads'].map((platform, index) => (
                  <motion.div
                    key={`${platform}-duplicate`}
                    className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200 text-gray-700 font-medium whitespace-nowrap"
                  >
                    {platform}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
