import React from "react";
import { motion } from "framer-motion";

const AiMarketing = () => {
  const cards = [
    {
      id: 1,
      title: "AI that thinks",
      highlight: "like a Marketer.",
      desc: "Let our AI do the brainstorming. Metamesh helps you plan smarter and getting the perfect content tailored to your goals, audience and brand voice.",
      iconBg: "from-blue-600 to-blue-400",
    },
    {
      id: 2,
      title: "Advanced AI that gets your audience",
      highlight: "better than you do.",
      desc: "AI learns your brand and your audience to deliver posts that help convert.",
      iconBg: "from-purple-600 to-pink-400",
    },
    {
      id: 3,
      title: "Simplest setup.",
      highlight: "Start automating in minutes.",
      desc: "Just link your social media accounts, tell us a bit about your goals, and our AI takes over. You'll be automating your posts within minutes.",
      iconBg: "from-yellow-500 to-orange-400",
    },
    {
      id: 4,
      title: "The only social media tool",
      highlight: "you’ll ever need",
      desc: "From planning to posting, Metamesh handles it all. Let it work for you 24/7.",
      iconBg: "from-pink-500 to-purple-400",
    },
  ];

  return (
    <div className="w-full py-20 px-6 md:px-20 bg-gradient-to-b from-[#050d1a] via-[#0a1e33] to-[#0d3b5c] relative overflow-hidden">
      {/* Subtle glowing mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(3,114,250,0.12),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(3,114,250,0.6)" }}
            className="p-6 rounded-2xl bg-[#0b1a2d]/70 backdrop-blur-md border border-blue-400/20 shadow-[0_0_15px_rgba(3,114,250,0.3)] transition-all duration-500 cursor-default"
          >
            {/* Icon placeholder */}
            <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${card.iconBg} flex items-center justify-center shadow-lg shadow-blue-500/40`}></div>

            <h2 className="text-2xl font-bold text-white mb-3">
              {card.title} <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{card.highlight}</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AiMarketing;