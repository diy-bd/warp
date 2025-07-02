'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CogIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  EyeIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';

export default function FeaturesSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      title: "Platform", 
      description: "Choose your advertising platform",
      icon: CogIcon,
      step: "1/5"
    },
    { 
      title: "Objective", 
      description: "Set your campaign objectives", 
      icon: ChartBarIcon,
      step: "2/5"
    },
    { 
      title: "Audience", 
      description: "Define your target audience",
      icon: EyeIcon,
      step: "3/5"
    },
    { 
      title: "Ad", 
      description: "Create your ad content",
      icon: SparklesIcon,
      step: "4/5"
    },
    { 
      title: "Publish", 
      description: "Launch your campaign",
      icon: RocketLaunchIcon,
      step: "5/5"
    }
  ];

  const features = [
    {
      title: "Create",
      description: "Effortlessly create ads in just 5 simple steps, with the help of AI.",
      icon: SparklesIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Manage", 
      description: "Take control, manage your campaigns effortlessly.",
      icon: CogIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Diversify",
      description: "Master multichannel advertising in minutes.",
      icon: ChartBarIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Protect",
      description: "Protect your ads from competitors and bots.",
      icon: ShieldCheckIcon,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Understand",
      description: "Identify what works, save time with insights.",
      icon: EyeIcon,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            One tool to rule them all
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create winning ads in minutes across top platforms, even if it's your first time.
          </p>
        </motion.div>

        {/* Steps Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                    activeStep === index 
                      ? 'border-blue-500 bg-blue-900/30 shadow-lg' 
                      : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      activeStep === index ? 'bg-blue-500' : 'bg-gray-200'
                    }`}>
                      <Icon className={`w-6 h-6 ${activeStep === index ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">Step {step.step}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Content */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{steps[activeStep].title}</h3>
                <p className="text-gray-300">{steps[activeStep].description}</p>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg h-48 flex items-center justify-center">
              <p className="text-gray-400">Interactive {steps[activeStep].title} Interface</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Try it for free!</h3>
            <p className="text-xl mb-8 opacity-90">
              Create and manage the ad you need, absolutely free during the trial period.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              <RocketLaunchIcon className="w-5 h-5" />
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
