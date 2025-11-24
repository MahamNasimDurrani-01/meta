import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-20 text-white overflow-hidden">
      {/* Glowing animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] via-[#0a1e33] to-[#0d3b5c]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(3,114,250,0.2),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,240,255,0.15),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(3,114,250,0.7)]"
        >
          🚀 Ready to Transform Your Business?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Let’s shape the future together. Book a <span className="text-cyan-300 font-semibold">free 30-minute consultation</span> and discover how we can drive your growth with AI & Blockchain.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(0,240,255,0.9)" }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="bg-gradient-to-r from-[#0372fa] via-[#00f0ff] to-[#0a1020] text-white font-bold py-5 px-14 rounded-full text-xl 
                     shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 flex items-center justify-center mx-auto"
        >
          <span className="drop-shadow-[0_0_6px_#00f0ff]">⚡ Book Your Free Strategy Session</span>
          <svg
            className="w-6 h-6 ml-3 text-cyan-300 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default CallToAction;
