import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Metamesh Labs helped clients streamline our operations with AI automation—cutting costs by 30% in 6 months.",
      author: "Tech Startup CEO",
    },
    {
      id: 2,
      text: "The AI Automation & blockchain workshops gave our team the confidence to explore blockchain and AI integration in business safely and effectively",
      author: "Financial Services Director",
    },
    {
      id: 3,
      text: "The digital transformation strategy provided a clear roadmap that was easy to implement and showed immediate results.",
      author: "Operations Manager",
    },
  ];

  return (
    <div className="w-full text-white py-20 px-6 md:px-20 border-t border-gray-800 bg-gradient-to-b from-[#050d1a] via-[#0a1e33] to-[#0d3b5c] relative overflow-hidden">
      {/* Subtle glowing mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(3,114,250,0.15),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            🌟 Trusted by Forward-Thinking Clients
          </h1>
          <p className="text-gray-300 text-lg">
            Discover how our solutions have helped businesses innovate and grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(3,114,250,0.8)" }}
              className="bg-[#0b1a2d]/70 backdrop-blur-md p-6 rounded-2xl 
                         border border-blue-400/20 shadow-[0_0_15px_rgba(3,114,250,0.3)] 
                         transition-all duration-500 cursor-default"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 text-yellow-400 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-200 mb-4 italic">"{testimonial.text}"</p>
              <p className="text-blue-300 font-semibold">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
