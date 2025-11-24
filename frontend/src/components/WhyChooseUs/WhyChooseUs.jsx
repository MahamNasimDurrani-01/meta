import React from "react";
import { motion } from "framer-motion";
import WhyChooseUs_img from "../../assets/WhyChooseUs.jpg";

function WhyChooseUs() {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center py-16 px-6 md:px-20 border-t border-gray-700 bg-gradient-to-b from-[#050d1a] via-[#0a1e33] to-[#0d3b5c]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Why{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Partner With Us?
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
        We are passionate about using AI to automate your business , translating business needs into technical solutions, identifying risks early, reduce operational cost and increase productivity through minimum human effort .
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full max-w-6xl">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Vision{" "}
            {/* <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              We Are
            </span> */}
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          <span className="text-blue-400 font-semibold">Metamesh Labs</span>, vision of blockchain and AI automation is to create intelligent, self-managing digital ecosystems that operate with unprecedented levels of trust, transparency, and efficiency. By combining AI's analytical power and automation capabilities with blockchain's secure, immutable ledger, this convergence aims to transform various industries by removing friction, enhancing security, and enabling new forms of decentralized, autonomous collaboration.
          </p>

          {/* Benefits Checklist */}
          <div className="bg-[#0b1a2d]/60 p-6 rounded-2xl border border-blue-400/20 shadow-[0_0_15px_rgba(3,114,250,0.3)]">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              Our Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Tailored Solutions, Not One-Size-Fits-All",
                "Future-Focused Strategy",
                "Hands-on Training & Support",
                "Proven ROI-Driven Results",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-500/20 p-1 rounded-full mt-1 shadow-[0_0_10px_rgba(3,114,250,0.6)]">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-tr from-blue-900/40 to-blue-600/10 p-4 rounded-xl text-center border border-blue-400/20">
              <div className="text-2xl font-bold text-blue-300">10+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gradient-to-tr from-blue-900/40 to-blue-600/10 p-4 rounded-xl text-center border border-blue-400/20">
              <div className="text-2xl font-bold text-blue-300">Global</div>
              <div className="text-sm text-gray-300">Clientele</div>
            </div>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative group">
            <img
              src={WhyChooseUs_img}
              alt="Why Choose Us"
              className="w-full h-[400px] object-cover rounded-2xl shadow-[0_0_25px_rgba(3,114,250,0.6)] transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Neon Frame Effect */}
            <div className="absolute -inset-2 border border-blue-400/30 rounded-2xl group-hover:border-blue-400/60 group-hover:shadow-[0_0_20px_rgba(3,114,250,0.7)] transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          </div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-xl shadow-[0_0_20px_rgba(3,114,250,0.6)]"
          >
            <div className="text-white font-bold">Cross-Industry Expertise</div>
            <div className="text-blue-200 text-sm">
              Delivering results across sectors
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
