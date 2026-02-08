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
import img1 from "../assets/placeholder.jpg";
import img2 from "../assets/placeholder.jpg";
import img3 from "../assets/placeholder.jpg";

const ImageSlider = () => {
  {
    /* Images Data */
  }

  const images = [
    { id: 1, src: img1, alt: "Cryon Spectre - Front View" },
    { id: 2, src: img2, alt: "Cryon Spectre - Side Profile" },
    { id: 3, src: img3, alt: "Cryon Spectre - Perspective" },
  ];

  {
    /* Features Data */
  }
  const features = [
    {
      icon: Zap,
      title: "Neural Engine",
      description: "Zero-latency onboard AI for real-time object recognition",
    },
    {
      icon: Camera,
      title: "48MP Eye-Point",
      description:
        "Capture life exactly as you see it with ultra-high fidelity",
    },
    {
      icon: Eye,
      title: "Holographic View",
      description: "Wide field-of-view waveguides for immersive AR overlays",
    },
    {
      icon: Shield,
      title: "Featherweight",
      description: "Aerospace-grade titanium alloy frame for all-day comfort",
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
    <section className="relative min-h-screen w-full snap-start bg-gradient-to-bl from-[#D2D6D9] to-[#25465D] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-bebas mb-4 text-5xl tracking-wide text-(--text) md:text-7xl">
            <span className="">MEET</span>{" "}
            <span className="text-(--accent)">THE SPECTRE</span>
          </h2>
          <p className="text-lg text-(--w-text-muted)">
            Where minimal aesthetics meet the cutting edge of spatial computing
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
            className="col-span-1 overflow-hidden rounded-3xl bg-(--w-bg-dark) shadow-[0_4px_10px_1px_rgba(255,255,255,0.02)] lg:col-span-3"
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
                className="font-montserrat absolute bottom-5 left-4 z-20 rounded-full bg-black/50 px-3 py-1 text-xs text-(--text) backdrop-blur-sm"
              >
                {currentIndex + 1} / {images.length}
              </motion.div>
            </div>

            {/* Dots Navigation */}
            <div className="flex items-center justify-center gap-2 bg-(--w-bg-dark) p-3">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileTap={{ scale: 0.9 }}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-12 bg-(--accent)"
                      : "w-2 bg-(--text-muted) hover:bg-black"
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
                className="group relative overflow-hidden rounded-xl border-none bg-(--w-bg-dark) p-5 shadow-[0_4px_10px_1px_rgba(255,255,255,0.02)]"
              >
                {/* Content */}
                <div className="mb-3 flex h-10 w-10 items-center justify-center border border-(--w-border) rounded-lg bg-linear-to-br from-(--accent)/20 to-blue-600/10">
                  <feature.icon className="h-5 w-5 text-(--accent)" />
                </div>

                <h3 className="font-bebas mb-2 text-lg tracking-wide text-(--text)">
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
            Experience the seamless fusion of digital and physical worlds. The
            Cryon Spectre combines advanced holographic optics with onboard AI
            to deliver information when you need it, and disappears when you
            don't.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSlider;
