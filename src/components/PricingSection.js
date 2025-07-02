'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "STARTER",
      monthlyPrice: 29,
      yearlyPrice: 21.75,
      description: "Perfect for getting started",
      features: [
        { name: "Adspend Limit", value: "$1,000", included: true },
        { name: "Account Limit", value: "Unlimited", included: true },
        { name: "Instant Ads", included: true },
        { name: "Smart Campaign", included: true },
        { name: "All Platforms", included: true },
        { name: "Text Generator", included: true },
        { name: "Click Fraud", included: true },
        { name: "Sub Accounts", value: "2", included: true },
        { name: "Custom Branding", included: false }
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "PREMIUM",
      monthlyPrice: 59,
      yearlyPrice: 44.25,
      description: "Most popular choice",
      features: [
        { name: "Adspend Limit", value: "$5,000", included: true },
        { name: "Account Limit", value: "Unlimited", included: true },
        { name: "Instant Ads", included: true },
        { name: "Smart Campaign", included: true },
        { name: "All Platforms", included: true },
        { name: "Text Generator", included: true },
        { name: "Click Fraud", included: true },
        { name: "Sub Accounts", value: "5", included: true },
        { name: "Custom Branding", included: true }
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "ULTIMATE",
      monthlyPrice: 99,
      yearlyPrice: 74.25,
      description: "Best Seller",
      features: [
        { name: "Adspend Limit", value: "Unlimited", included: true },
        { name: "Account Limit", value: "Unlimited", included: true },
        { name: "Instant Ads", included: true },
        { name: "Smart Campaign", included: true },
        { name: "All Platforms", included: true },
        { name: "Text Generator", included: true },
        { name: "Click Fraud", included: true },
        { name: "Sub Accounts", value: "Unlimited", included: true },
        { name: "Custom Branding", included: true }
      ],
      buttonText: "Get Started",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
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
            Great ad performance. <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Unbelievable Pricing.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Whether you are a startup, an enterprise, or an agency, we have a plan to suit your needs.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly Plan
            </span>
            <motion.button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                isYearly ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg"
              />
            </motion.button>
            <span className={`text-lg font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly Plan
            </span>
            {isYearly && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                25% OFF
              </motion.span>
            )}
          </div>

          {/* Promo Code */}
          {isYearly && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto"
            >
              <p className="text-yellow-800">
                Apply <strong>FIRSTYEAR25</strong> after the sign-up!
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-gray-900 rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <StarIcon className="w-4 h-4" />
                    Best Seller
                  </div>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {isYearly && (
                    <span className="text-lg text-gray-500 line-through">
                      ${plan.monthlyPrice}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mt-2">Per month</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckIcon className="w-5 h-5 text-green-500" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-gray-400" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </div>
                    {feature.value && (
                      <span className="text-sm font-medium text-gray-300">
                        {feature.value}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full text-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="text-blue-600 hover:text-blue-700 font-medium text-lg">
            Frequently asked questions about our pricing
          </button>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
