import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CallToAction2 = () => {
  return (
    <section className="relative w-full bg-(--bg-dark) px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-inter mb-6 text-3xl font-semibold tracking-wide text-(--text) sm:text-4xl md:text-6xl"
          >
            Ready to integrate{" "}
            <span className="bg-linear-to-r from-(--accent) to-purple-600 bg-clip-text whitespace-nowrap text-transparent">
              OAK 4 D
            </span>{" "}
            into your platform?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-montserrat mx-auto mb-12 max-w-2xl text-lg text-(--text-muted)"
          >
            Experience advanced robotic vision with 52 TOPS AI performance,
            stereo depth sensing, and industrial-grade reliability. Get started
            today.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col-reverse items-center justify-center gap-6 sm:flex-row"
          >
            {/* Contact Sales Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-inter group flex min-w-50 items-center justify-center gap-2 rounded-full border-2 border-(--accent) bg-transparent px-8 py-4 text-lg font-light text-(--accent) transition-all duration-200 hover:bg-(--accent)/10"
            >
              Contact Sales
              <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

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
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction2;
