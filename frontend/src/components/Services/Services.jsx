import React, { useRef, useState } from "react";
import Card from "../others/Card";
import ai_integration_img from "../../assets/Ai_integration.jpg";
import Digital_transformation from "../../assets/Digital_transformatio.jpg";
import Crypto_Awareness from "../../assets/Crypto_Awareness.jpg";
import Consultancy from "../../assets/Consultancy.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Custom Navigation Component
const CustomNavigation = ({ swiperRef, className }) => {
  return (
    <div className={`flex items-center justify-center mt-8 space-x-6 ${className}`}>
      <button
        className="custom-prev bg-gradient-to-r from-cyan-500 to-blue-700 text-white p-4 rounded-full 
                   transition-all duration-500 shadow-[0_0_15px_#00f6ff] hover:shadow-[0_0_25px_#00f6ff] hover:scale-110"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="custom-next bg-gradient-to-r from-cyan-500 to-blue-700 text-white p-4 rounded-full 
                   transition-all duration-500 shadow-[0_0_15px_#00f6ff] hover:shadow-[0_0_25px_#00f6ff] hover:scale-110"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

function Services() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const cards_data = [
    {
      title: "AI Integration",
      description:
        "Strategy, implementation & training for AI tools like chatbots, predictive analytics, and automation.",
      benefits: ["Efficiency", "Cost reduction", "Better insights"],
      image: ai_integration_img,
    },
    {
      title: "Digital Transformation",
      description:
        "Streamlining operations with cloud migration, ERP, workflow automation, and digital adoption.",
      benefits: ["Scalability", "Improved productivity", "Better Decision-Making"],
      image: Digital_transformation,
    },
    {
      title: "AI Automation",
      description:
        "End to end automation solution combining RPA, Machine Learning and generative AI.",
      benefits: ["10x productivity gains", "Eliminate repetitive tasks ", " Accelerated customer response"],
      image: Crypto_Awareness,
    },
    {
      title: "Consultancy Services",
      description:
        "Tailored advisory for organizations and individuals to make confident technology transitions.",
      benefits: ["Personalized roadmap", "Minimized risks", "Smarter decisions"],
      image: Consultancy,
    },
  ];

  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center py-20 px-6 md:px-20 
                    bg-gradient-to-b from-[#020c1b] via-[#031b35] to-[#041f3b] relative overflow-hidden">
      
      {/* Background glowing mesh lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.3)_0%,transparent_70%)]"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mb-12 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_#00f6ff]">
          What we <span className="text-cyan-400">Offer</span>
        </h1>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #00f6ff" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 rounded-xl font-bold text-lg tracking-wide 
                     bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                     shadow-[0_0_20px_#00f6ff] animate-pulse-slow"
        >
          Automation & Digital Transformation
        </motion.button>
      </motion.div>

      {/* Cards Slider */}
      <div className="relative w-full max-w-6xl z-10">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={2.5}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 30 },
          }}
          className="w-full h-[500px]"
        >
          {cards_data.map((card, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full flex"
              >
                <Card
                  title={card.title}
                  description={card.description}
                  benefits={card.benefits}
                  imageUrl={card.image}
                  className="h-full w-full hover:shadow-[0_0_25px_#00f6ff] transition-all duration-500"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <CustomNavigation swiperRef={swiperRef} />
      </div>
    </div>
  );
}

export default Services;
