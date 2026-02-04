import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroLuxBg from "../assets/glassesf.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="flex flex-col items-center bg-gradient-to-tl from-[#D2D6D9] to-[#25465D] pt-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="font-bebas mt-10 sm:mt-19 text-6xl font-bold tracking-wide text-(--text) md:text-9xl"
      >
        <span className="bg-linear-to-t from-white to-gray-400 bg-clip-text text-transparent uppercase">
          cryon spectre
        </span>
      </motion.h1>

      <div className="flex h-auto w-full flex-col items-center justify-between overflow-hidden bg-contain bg-bottom bg-no-repeat">
        <img
          src={heroLuxBg}
          alt="hero-img"
          className="h-auto w-full max-w-[90%]"
        />
      </div>

      {/* Bottom Text and Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="flex items-center justify-center border border-(--border)/20 bg-white/10 w-full backdrop-blur-2xl mb-16 shadow-[0_0_50px_1px_rgba(0,0,0,0.3)]"
      >
        <div className="flex w-screen max-w-6xl flex-col items-center justify-between py-5 gap-3 sm:px-7 sm:py-9 text-center sm:flex-row sm:gap-20">
          <p className="font-montserrat bg-linear-to-t from-white to-gray-300 bg-clip-text text-sm font-semibold tracking-tighter text-transparent uppercase drop-shadow-2xl sm:mb-auto sm:text-4xl md:max-w-5xl">
            experience the future of smart eyewear
          </p>
          {/* Buy Now Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-inter group flex min-w-40 cursor-pointer items-center justify-center gap-2 rounded-full bg-(--accent) py-2 text-sm font-semibold text-white shadow-(--accent)/30 shadow-lg transition-opacity duration-200 hover:opacity-90 sm:px-8 sm:py-4 sm:text-lg"
          >
            Pre-Order
            <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
