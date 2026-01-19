import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import oakD5 from "../assets/OAK_D_5.webp";
import heroSmBg from "../assets/hero-sm.png";
import heroLuxBg from "../assets/hero-lux.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="justify-top relative flex h-screen w-full flex-col items-center overflow-hidden bg-(--bg-dark) bg-cover pt-20 sm:min-h-250 md:pt-30"
      style={{
        backgroundImage: `url(${isMobile ? heroSmBg : heroLuxBg})`,
      }}
    >
      {/* Heading and Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-9xl relative z-10 mt-8 px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-bebas mb-14 text-6xl font-bold tracking-wide text-(--text) md:text-9xl"
        >
          <span className="bg-linear-to-t from-white to-gray-400 bg-clip-text text-transparent">
            OAK 4 D
          </span>
        </motion.h1>

        {/* Image */}
        <div className="relative z-10 flex w-full max-w-6xl items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="max-w-3xl"
          >
            <div className="mb-9 flex h-40 w-50 items-center justify-center overflow-visible rounded-3xl border border-gray-800 bg-gray-950 shadow-[inset_0_0_5px_1px_hsl(256_81%_53%/.2)] sm:h-80 sm:w-155">
              <img
                src={oakD5}
                alt="OAK 4 D"
                className="min-w-80 scale-110 sm:min-w-200"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Bottom Text and Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="max-w-9xl mt-8 flex w-screen flex-col items-center justify-center gap-3 text-center sm:mt-15 sm:flex-row sm:gap-20"
      >
        <p className="font-inter max-w-m mb-6 text-2xl font-bold tracking-tight text-(--text) sm:mb-auto md:max-w-3xl lg:text-[2.35rem]">
          Spatial perception <br className="lg:hidden" /> is no longer a
          bottleneck - <br />
          <span className="text-(--accent)">it's your greatest advantage</span>
        </p>

        {/* Buy Now Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-inter group flex min-w-50 items-center justify-center gap-2 rounded-full bg-(--accent) px-8 py-4 text-lg font-semibold text-white shadow-(--accent)/30 shadow-lg transition-opacity duration-200 hover:opacity-90"
        >
          Buy Now
          <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
