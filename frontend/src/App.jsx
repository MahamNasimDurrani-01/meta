import React, { useRef, useEffect, useState, useCallback, memo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import AiMarketing from "./components/AiMarketing/AiMarketing";

// Import components with React.lazy for code splitting
const Nav = React.lazy(() => import("./components/Nav/Nav"));
const Hero = React.lazy(() => import("./components/hero/Hero"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));
const Services = React.lazy(() => import("./components/Services/Services"));
const WhyChooseUs = React.lazy(() => import("./components/WhyChooseUs/WhyChooseUs"));
const Testimonials = React.lazy(() => import("./components/Testimonials/Testimonials"));
const CallToAction = React.lazy(() => import("./components/CallToAction/CallToAction"));
const ContactSection = React.lazy(() => import("./components/ContactSection/ContactSection"));

// Loading component for Suspense fallback
const LoadingPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// ✅ Memoized components to prevent unnecessary re-renders
const MemoizedNav = memo(Nav);
const MemoizedHero = memo(Hero);
const MemoizedAboutUs = memo(AboutUs);
const MemoizedServices = memo(Services);
const MemoizedWhyChooseUs = memo(WhyChooseUs);
const MemoizedTestimonials = memo(Testimonials);
const MemoizedCallToAction = memo(CallToAction);
const MemoizedContactSection = memo(ContactSection);

function App() {
  // Create refs for all sections
  const hero_ref = useRef(null);
  const about_ref = useRef(null);
  const services_ref = useRef(null);
  const whychooseus_ref = useRef(null);
  const testimonials_ref = useRef(null);
  const calltoaction_ref = useRef(null);
  const contact_ref = useRef(null);
  
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Section configuration for easier management
  const sectionsConfig = [
    { id: "hero", ref: hero_ref },
    { id: "about", ref: about_ref },
    { id: "services", ref: services_ref },
    { id: "whychooseus", ref: whychooseus_ref },
    { id: "testimonials", ref: testimonials_ref },
    { id: "calltoaction", ref: calltoaction_ref },
    { id: "contact", ref: contact_ref },
  ];

  // Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Memoized smooth scroll function
  const scrollToSection = useCallback((sectionRef) => {
    if (sectionRef && sectionRef.current) {
      setIsScrolling(true);
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Reset scrolling flag after scroll completes
      scrollTimeout.current = setTimeout(() => setIsScrolling(false), 800);
    }
  }, []);

  // Optimized scroll tracking with throttling
  useEffect(() => {
    if (!isMounted) return;

    let ticking = false;
    let lastCallTime = 0;

    const handleScroll = () => {
      const currentTime = Date.now();
      const scrollThrottle = 100; // ms
      
      // Throttle scroll events
      if (currentTime - lastCallTime < scrollThrottle) {
        return;
      }
      lastCallTime = currentTime;
      
      if (!ticking && !isScrolling) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 100;
          
          // Find the current active section
          let currentActive = "hero";
          let minDistance = Infinity;
          
          sectionsConfig.forEach(({ id, ref }) => {
            if (ref.current) {
              const distance = Math.abs(ref.current.offsetTop - scrollPosition);
              if (distance < minDistance) {
                minDistance = distance;
                currentActive = id;
              }
            }
          });
          
          setActiveSection(currentActive);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isScrolling, sectionsConfig, isMounted]);

  // Don't render until mounted to avoid CSP issues
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <React.Suspense fallback={<LoadingPlaceholder />}>
      {/* Fixed Navbar */}
      <div className="top-0 w-full h-max-10 fixed z-50">
        <MemoizedNav
          Hero_ref={hero_ref}
          About_ref={about_ref}
          Services_ref={services_ref}
          Contact_ref={contact_ref}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />
      </div>

      {/* Sections */}
      <div ref={hero_ref}>
        <MemoizedHero
          Services_ref={services_ref}
          BookNow_ref={contact_ref}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* ✅ LazyMotion wraps all animated sections */}
      <LazyMotion features={domAnimation}>
        <div ref={about_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <MemoizedAboutUs />
          </m.div>
        </div>

        <div ref={services_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <MemoizedServices />
          </m.div>
        </div>

        <div ref={whychooseus_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <MemoizedWhyChooseUs />
          </m.div>
        </div>
        <div>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AiMarketing />
          </m.div>
        </div>

        <div ref={testimonials_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <MemoizedTestimonials />
          </m.div>
        </div>

        <div ref={calltoaction_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <MemoizedCallToAction />
          </m.div>
        </div>

        <div ref={contact_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <MemoizedContactSection />
          </m.div>
        </div>
      </LazyMotion>
    </React.Suspense>
  );
}

export default App;