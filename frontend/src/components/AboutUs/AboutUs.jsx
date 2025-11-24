import React from "react";
import { motion } from "framer-motion";
import about_img from "../../assets/about_img.png";

function AboutUs() {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center py-16 px-6 md:px-20 bg-gradient-to-b from-[#050d1a] via-[#0a1e33] to-[#0d3b5c]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Us</span>
        </h1>
        <p className="text-gray-300 text-lg">
          {/* We are passionate about building digital experiences that help
          businesses grow, innovate, and connect with their audiences. Our team
          focuses on creativity, performance, and modern technology. */}
          We are passionate about using AI to automate your business , translating business needs into technical solutions, identifying risks early, reduce operational cost and increase productivity through minimum human effort .
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full max-w-6xl">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="relative group">
            <img
              src={about_img}
              alt="About Us"
              className="w-full h-[350px] object-cover rounded-2xl shadow-[0_0_25px_rgba(3,114,250,0.6)] group-hover:scale-105 transition-transform duration-500"
            />
            {/* Neon Glow Overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-tr from-blue-500 to-cyan-400 blur-2xl"></div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Who <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">We Are</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            At <span className="text-blue-400 font-semibold">Metamesh Labs</span>, we empower businesses and individuals
            to stay ahead in the ever-changing digital economy. From Artificial Intelligence to Blockchain, we
            provide consulting, training, and hands-on support to help you embrace the technologies shaping the future.
            We are not just advisors — we’re your partners in transformation, ensuring smooth adoption of AI, automation,
            and digital tools that unlock growth and efficiency.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">⚡</span> Experienced Developers & Designers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">⚡</span> Focused on Innovation & Quality
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">⚡</span> Customer-Centric Approach
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">⚡</span> Transparent & Reliable Process
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">🌍</span> 10+ Years Combined Experience
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">🤝</span> Global Clientele
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">📊</span> Cross-Industry Expertise
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
