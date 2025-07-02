'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sasha M.",
      handle: "@sashamrejen",
      avatar: "SM",
      title: "Replaced our agency! 🤯",
      content: "ADYOUNEED's automation platform completely replaced our agency. We were so impressed that we shifted our entire budget to the platform.",
      rating: 5
    },
    {
      name: "Sarah R.",
      handle: "@sarahreedy",
      avatar: "SR",
      title: "All your ads in one place! Great!",
      content: "Having AdYouNeed is helpful because it's ALL your ads in one place, and it's a lot more intuitive than just logging into Facebook or Google having to check each individual ad you have created.",
      rating: 5
    },
    {
      name: "Omær B.",
      handle: "@omærbay",
      avatar: "OB",
      title: "Finally found ADYOUNEED!",
      content: "Our agency launches a ton of ads per month for agile testing. With AdYouNeed we are able to do this much faster.",
      rating: 5
    },
    {
      name: "Redon G.",
      handle: "@redongjika",
      avatar: "RG",
      title: "This is fantastic!",
      content: "This is fantastic. Just signed up to test on my 2 products and definitely impressed. Easy setup and ad creation. Can't wait to scale this.",
      rating: 5
    },
    {
      name: "Shane B.",
      handle: "@shaneblevins",
      avatar: "SB",
      title: "Simple and effective!",
      content: "It allows you to easily manage your ads from multiple platforms (and still growing) as well as truly fine-tune your ad objectives and budgeting. It really is a great all-in-one solution.",
      rating: 5
    },
    {
      name: "Max",
      handle: "@mxcrbn",
      avatar: "MX",
      title: "Literally game changing!",
      content: "Love the product, it's been literally game changing for us! Also, the whole ADYOUNEED team are amazing: keep killing it guys 👏",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
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
            Our clients love us!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simplified ad creation, AI-first approach and affordable pricing - just a few things our clients love!
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.handle}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Title */}
              <h5 className="font-bold text-white mb-3">{testimonial.title}</h5>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
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
