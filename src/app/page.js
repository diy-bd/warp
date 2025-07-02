'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { RocketLaunchIcon, SparklesIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CheckIcon, XMarkIcon as XIcon, StarIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-white min-h-screen" 
         style={{
           '--black': '#0b0d14',
           '--white': '#ffffff', 
           '--ghost-white': '#f8f8ff',
           '--light-steel-blue': '#a6afd5',
           backgroundColor: '#0b0d14'
         }}>
      {/* Navigation */}
      <nav className="fixed top-14 left-1/2 transform -translate-x-1/2 z-[999] backdrop-blur-[11px]" 
           style={{
             backgroundColor: '#212936cc',
             border: '1px solid #42516b',
             borderRadius: '1.5625em',
             width: '62.5em',
             maxWidth: '62.5em',
             padding: '0.75em 2em'
           }}>
        <div className="flex justify-between items-center">
          <div className="w-[11.375em]">
            <img src="/images/646bcc95214cf139626be9c3_google-premiere-partner-logo.svg" 
                 alt="ADYOUNEED" className="h-6" />
          </div>
          
          <div className="hidden md:flex items-center space-x-[2.375em]">
            <a href="#home" className="px-4 py-4 font-medium text-white/80 hover:text-white transition-colors">Home Page</a>
            <a href="#features" className="px-4 py-4 font-medium text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="px-4 py-4 font-medium text-white/80 hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#c7bee4] px-4 py-4 font-medium">Login</a>
            <button className="bg-[#171926] rounded-[3em] px-8 py-4 text-white font-medium hover:opacity-80 transition-opacity">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{backgroundColor: 'var(--black)'}}></div>
        
        {/* Container with proper ADYOUNEED styling */}
        <div className="relative z-40 w-full" style={{
          paddingLeft: '12.625em',
          paddingRight: '12.625em'
        }}>
          <div className="text-center relative z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-[110] font-medium leading-[1]" 
              style={{
                fontSize: '6.875em',
                lineHeight: '1'
              }}
            >
              Powerful Ads Made{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Effortlessly
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 mx-auto" 
              style={{
                fontSize: '1.375em',
                lineHeight: '1.5',
                maxWidth: '35em'
              }}
            >
              Create winning ads in minutes across top platforms, even if it's your first time.
            </motion.p>
            
            {/* ADYOUNEED styled button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                boxShadow: 'inset 0 0 3px #42516b, 0 15px 60px #6437fc66'
              }}
              href="#"
              className="inline-flex relative overflow-hidden transition-all duration-[0.4s] mb-12"
              style={{
                borderRadius: '10em',
                padding: '1px',
                boxShadow: 'inset 0 0 3px #42516b, 0 15px 50px #6437fc33'
              }}
            >
              <div className="relative z-[1] flex justify-center items-center w-full h-full transition-colors duration-[0.2s]" 
                   style={{
                     backgroundColor: '#1b1d30',
                     borderRadius: '10em'
                   }}>
                <div className="relative z-[2] flex justify-center items-center gap-2 whitespace-nowrap font-medium"
                     style={{
                       padding: '1.3375em 2.525em',
                       fontSize: '1.125em',
                       fontWeight: '500',
                       lineHeight: '1.2'
                     }}>
                  <RocketLaunchIcon className="w-5 h-5" />
                  Start Your Free Trial
                </div>
              </div>
            </motion.a>

            {/* Google Premier Partner section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-center mx-auto"
              style={{
                width: '35.75em'
              }}
            >
              <p className="mb-4" style={{
                color: '#a6afd5',
                fontSize: '1.125em',
                lineHeight: '1.5'
              }}>
                "ADYOUNEED, as a distinguished Google Premier Partner, proudly stands among the elite top 3% of global companies."
              </p>
              <div className="inline-block mb-4">
                <img src="/images/646bcc95214cf139626be9c3_google-premiere-partner-logo.svg" 
                     alt="Google Premier Partner" 
                     className="opacity-60"
                     style={{width: '12.125em'}} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Platform Badges */}
        <div className="relative mt-20 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(3)].map((_, setIndex) => 
              ['Meta Ads', 'Google Ads', 'Bing Ads', 'LinkedIn Ads', 'TikTok Ads', 'Pinterest Ads', 'Twitter Ads'].map((platform, index) => (
                <div key={`${setIndex}-${index}`} className="bg-gray-800 border border-gray-700 px-6 py-3 rounded-full text-gray-300 font-medium">
                  {platform}
                </div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section - One tool to rule them all */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">One tool to rule them all</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create winning ads in minutes across top platforms, even if it's your first time.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { title: 'Platform', step: '1/5' },
              { title: 'Objective', step: '2/5' },
              { title: 'Audience', step: '3/5' },
              { title: 'Ad', step: '4/5' },
              { title: 'Publish', step: '5/5' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-colors cursor-pointer"
              >
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">Step {step.step}</p>
                <div className="mt-4 bg-gray-700 rounded-lg h-24 flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-blue-400" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Create', 
                description: 'Effortlessly create ads in just 5 simple steps, with the help of AI.',
                image: 'Campaign Edit',
                details: 'Budget Daily € 0.86'
              },
              { 
                title: 'Manage', 
                description: 'Take control, manage your campaigns effortlessly.',
                image: 'Dashboard',
                details: 'Advertising platforms'
              },
              { 
                title: 'Diversify', 
                description: 'Master multichannel advertising in minutes.',
                image: 'Multi-platform',
                details: 'Campaign Edit'
              },
              { 
                title: 'Protect', 
                description: 'Protect your ads from competitors and bots.',
                image: 'Security Dashboard',
                details: 'Clicks 14,534 | Fraudulent 1,451 | Blocked IPs 491'
              },
              { 
                title: 'Understand', 
                description: 'Identify what works, save time with insights.',
                image: 'Analytics',
                details: 'Performance insights'
              },
              { 
                title: 'University', 
                description: 'Master the art of advertising at our university.',
                image: 'Learning Hub',
                details: 'Learn & Grow'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all"
              >
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="bg-gray-700 rounded-lg h-32 flex flex-col items-center justify-center p-4">
                  <span className="text-gray-400 text-center font-medium">{feature.image}</span>
                  <div className="text-xs text-gray-500 mt-2 text-center">{feature.details}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Allocation and Campaign Management */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Campaign Interface */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Campaign Performance</h3>
                
                {/* Headline Testing */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <span className="text-white">Your first headline is here!</span>
                    <div className="flex items-center gap-2 text-red-400">
                      <span>CPA: $150</span>
                      <svg className="w-4 h-4" viewBox="0 0 4.545 4.926" fill="currentColor">
                        <path d="M1.9.264a.394.394,0,0,1,.744,0L4.482,4.1c.174.363-.035.824-.372.824H.435C.1,4.926-.111,4.465.063,4.1L.821,2.518Z" transform="rotate(180 2.272 2.463)" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <span className="text-white">Your second headline is here!</span>
                    <div className="flex items-center gap-2 text-red-400">
                      <span>CPA: $150</span>
                      <svg className="w-4 h-4" viewBox="0 0 4.545 4.926" fill="currentColor">
                        <path d="M1.9.264a.394.394,0,0,1,.744,0L4.482,4.1c.174.363-.035.824-.372.824H.435C.1,4.926-.111,4.465.063,4.1L.821,2.518Z" transform="rotate(180 2.272 2.463)" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <span className="text-white">Your third headline is here!</span>
                    <span className="text-blue-400">Preparing a new headline with AI</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2">Daily AI optimizations,</h4>
                <h4 className="text-xl font-bold mb-4">great ad results.</h4>
                <p className="text-gray-300 text-sm">
                  Testing is key to great ad results. Automate this process with our AI, let it create and test ads in the background to deliver maximum impact.
                </p>
              </div>
            </motion.div>
            
            {/* Right side - Budget Allocation */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Smart Budget Allocation</h3>
                
                {/* Platform Distribution */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">M</div>
                      <span className="text-white">Meta Ads</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-sm">+$45</div>
                      <div className="flex items-center gap-2">
                        <span className="text-white">$150</span>
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 4.545 4.926" fill="currentColor">
                          <path d="M1.9.264a.394.394,0,0,1,.744,0L4.482,4.1c.174.363-.035.824-.372.824H.435C.1,4.926-.111,4.465.063,4.1L.821,2.518Z" transform="rotate(180 2.272 2.463)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">G</div>
                      <span className="text-white">Google Ads</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-sm">+$32</div>
                      <div className="flex items-center gap-2">
                        <span className="text-white">$128</span>
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 4.545 4.926" fill="currentColor">
                          <path d="M1.9.264a.394.394,0,0,1,.744,0L4.482,4.1c.174.363-.035.824-.372.824H.435C.1,4.926-.111,4.465.063,4.1L.821,2.518Z" transform="rotate(180 2.272 2.463)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">L</div>
                      <span className="text-white">LinkedIn Ads</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-sm">+$23</div>
                      <div className="flex items-center gap-2">
                        <span className="text-white">$89</span>
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 4.545 4.926" fill="currentColor">
                          <path d="M1.9.264a.394.394,0,0,1,.744,0L4.482,4.1c.174.363-.035.824-.372.824H.435C.1,4.926-.111,4.465.063,4.1L.821,2.518Z" transform="rotate(180 2.272 2.463)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                  <p className="text-blue-300 text-sm">
                    💡 AI automatically redistributes budget to best-performing platforms
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* One Click Instant Ads Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-900/30 border border-blue-500/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-6">
              new feature
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">One Click Instant Ads</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Generate all your ad creatives, texts, and audiences, and publish result bringing ads with a single click. The fastest end-to-end ad creation on the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Instant AI-Driven Campaigns</h3>
              <p className="text-gray-300 mb-6">
                Provide your website URL, and let our advanced AI powered by AdCreative.ai generate all the visuals, texts, and audiences in a matter of seconds.
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">URL</div>
                <div className="text-white font-medium">https://www.adyouneed.com</div>
                <div className="text-green-400 text-sm mt-2">Scanned!</div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI Website Scanner</h3>
              <p className="text-gray-300 mb-6">
                Provide your product/service URL, and let us fine-tune your AI model that knows everything about your product.
              </p>
              <div className="space-y-3">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">Business Owners</div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">Professional</div>
                <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-center">Special discounts for th...</div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">One Click Publish!</h3>
              <p className="text-gray-300 mb-6">
                Select the AI-generated creatives you like and click to publish your result-bringing ads with a single click.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Publish Campaign
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Great ad performance. <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Unbelievable Pricing.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Whether you are a startup, an enterprise, or an agency, we have a plan to suit your needs.
            </p>
            
            {/* Yearly discount banner */}
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="text-gray-300">Monthly Plan</span>
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">25% OFF</div>
              <span className="text-white font-medium">Yearly Plan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'STARTER',
                price: '$29',
                yearlyPrice: '$21.75',
                features: ['$1,000 Adspend Limit', 'Unlimited Accounts', 'All Platforms', '2 Sub Accounts'],
                popular: false
              },
              {
                name: 'PREMIUM',
                price: '$59',
                yearlyPrice: '$44.25',
                features: ['$5,000 Adspend Limit', 'Unlimited Accounts', 'All Platforms', '5 Sub Accounts'],
                popular: false
              },
              {
                name: 'ULTIMATE',
                price: '$99',
                yearlyPrice: '$74.25',
                features: ['Unlimited Adspend', 'Unlimited Accounts', 'All Platforms', 'Unlimited Sub Accounts'],
                popular: true
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-gray-800 border-2 rounded-2xl p-8 ${
                  plan.popular ? 'border-blue-500' : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <StarIcon className="w-4 h-4" />
                      Best Seller
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">{plan.yearlyPrice}</span>
                    <span className="text-lg text-gray-400 line-through">{plan.price}</span>
                  </div>
                  <p className="text-gray-400">Per month</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our clients love us!</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Simplified ad creation, AI-first approach and affordable pricing - just a few things our clients love!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Start Your Free Trial
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sasha M.',
                handle: '@sashamrejen',
                title: 'Replaced our agency! 🤯',
                content: "ADYOUNEED's automation platform completely replaced our agency. We were so impressed that we shifted our entire budget to the platform."
              },
              {
                name: 'Sarah R.',
                handle: '@sarahreedy', 
                title: 'All your ads in one place! Great!',
                content: "Having AdYouNeed is helpful because it's ALL your ads in one place, and it's a lot more intuitive than just logging into Facebook or Google."
              },
              {
                name: 'Max',
                handle: '@mxcrbn',
                title: 'Literally game changing!',
                content: "Love the product, it's been literally game changing for us! Also, the whole ADYOUNEED team are amazing: keep killing it guys 👏"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.handle}</p>
                  </div>
                </div>
                <h5 className="font-bold text-white mb-3">{testimonial.title}</h5>
                <p className="text-gray-300">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Experience the future of effortless ad creation.</h2>
            <p className="text-gray-300 mb-8">Get started for free, create and manage ads in minutes so you can focus on what really matters - your business.</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all mb-12">
              Start Your Free Trial
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex justify-center gap-8 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms Of Service</a>
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home Page</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            </div>
            <p className="text-gray-500 text-sm">
              ADYOUNEED, 40 Rue Des Blancs Manteaux 75004 Paris<br />
              Registered S.A.S. Company in France © 2025 | Made with ♥ in Paris
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
