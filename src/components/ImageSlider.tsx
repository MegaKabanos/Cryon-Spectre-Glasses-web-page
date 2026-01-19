import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Shield,
  Zap,
  Camera,
} from "lucide-react";
import oakD1 from "../assets/OAK_D_1.webp";
import oakD2 from "../assets/OAK_D_2.webp";
import oakD3 from "../assets/OAK_D_3.webp";

const ImageSlider = () => {
  {
    /* Images Data */
  }

  const images = [
    { id: 1, src: oakD1, alt: "OAK 4 D - View 1" },
    { id: 2, src: oakD2, alt: "OAK 4 D - View 2" },
    { id: 3, src: oakD3, alt: "OAK 4 D - View 3" },
  ];

  {
    /* Features Data */
  }
  const features = [
    {
      icon: Zap,
      title: "52 TOPS AI",
      description: "Real-time AI inferencing with 52 TOPS computing power",
    },
    {
      icon: Camera,
      title: "48MP RGB",
      description: "High-resolution auto-focus camera for detailed capture",
    },
    {
      icon: Eye,
      title: "Stereo Depth",
      description: "70cm-12m depth range perception with real-time filtering",
    },
    {
      icon: Shield,
      title: "IP67 Rated",
      description: "Industrial-grade durability in harsh environments",
    },
  ];

  {
    /* Slider State and Handlers */
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  return (
    <div className="bg-(--bg-dark) shadow-2xl md:p-10">
      <section className="relative min-h-screen w-full rounded-[2.5rem] bg-(--w-bg-light) px-4 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-bebas mb-4 text-5xl tracking-wide text-(--w-text) md:text-7xl">
              <span className="">EXPLORE</span>{" "}
              <span className="bg-linear-to-r from-(--accent) to-purple-600 bg-clip-text text-transparent">
                THE DESIGN
              </span>
            </h2>
            <p className="text-lg text-(--w-text-muted)">
              Premium industrial-grade design with Gorilla Glass and aluminum
              housing
            </p>
          </motion.div>

          {/* Slider Container with Features Column */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Image Slider - Left Side (2 columns) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-1 overflow-hidden rounded-3xl bg-(--w-bg-light) shadow-2xl lg:col-span-3"
            >
              {/* Image Slider */}
              <div className="relative aspect-video w-full overflow-hidden">
                <AnimatePresence
                  initial={false}
                  custom={currentIndex}
                  mode="wait"
                >
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: autoplay ? 0.6 : 0.25 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToPrevious}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                  className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-(--accent)/80 p-2 text-white opacity-85 backdrop-blur-sm transition-all duration-200 hover:bg-(--accent)"
                >
                  <ChevronLeft size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToNext}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                  className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-(--accent)/80 p-2 text-white opacity-85 backdrop-blur-sm transition-all duration-200 hover:bg-(--accent)"
                >
                  <ChevronRight size={20} />
                </motion.button>

                {/* Image Counter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-montserrat absolute bottom-0 left-4 z-20 rounded-full bg-black/50 px-3 py-1 text-xs text-(--text) backdrop-blur-sm"
                >
                  {currentIndex + 1} / {images.length}
                </motion.div>
              </div>

              {/* Dots Navigation */}
              <div className="flex items-center justify-center gap-2 bg-(--w-bg-light) p-3">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    whileTap={{ scale: 0.9 }}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-12 bg-(--accent)"
                        : "w-2 bg-(--w-text-muted) hover:bg-black"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Features Column - Right Side */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl border-none border-(--w-border) bg-(--w-bg-light) p-5 shadow-xl"
                >
                  {/* Content */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-(--accent)/20 to-purple-600/10">
                    <feature.icon className="h-5 w-5 text-(--accent)" />
                  </div>

                  <h3 className="font-bebas mb-2 text-lg tracking-wide text-(--w-text)">
                    {feature.title}
                  </h3>
                  <p className="font-montserrat text-sm leading-relaxed text-(--w-text-muted)">
                    {feature.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-r from-(--accent)/5 to-transparent"
                  ></motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-(--w-text-muted)">
              Every component is meticulously designed to deliver real-time
              spatial intelligence. Explore the architecture that powers
              seamless depth perception and advanced computer vision in the most
              demanding environments
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;
