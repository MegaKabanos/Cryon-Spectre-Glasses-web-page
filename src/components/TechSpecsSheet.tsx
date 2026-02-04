import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import imgPlaceholder from "../assets/placeholder.jpg";
const TechSpecsSheet = () => {
  {
    /* Specification Data */
  }

  const specifications = [
    {
      section: "PROCESSORS & COMPUTING",
      specs: [
        { label: "Main Processor", value: "Qualcomm QCS8550 6-core ARM" },
        { label: "RAM", value: "8GB LPDDR5" },
        { label: "Storage", value: "128GB eMMC" },
        { label: "Total AI Performance", value: "52 TOPS" },
        { label: "DSP (INT8)", value: "48 TOPS" },
        { label: "DSP (INT8)", value: "48 TOPS" },
        { label: "GPU (FP16)", value: "4 TOPS" },
      ],
    },
    {
      section: "RGB CAMERA",
      specs: [
        { label: "Sensor Type", value: "IMX586 48MP" },
        { label: "Resolution", value: "8000 x 6000 pixels" },
        { label: "Size", value: "1/2 inch" },
        { label: "Focus Type", value: "Auto Focus" },
        { label: "Shutter", value: "Rolling" },
        { label: "Field of View", value: "67.3° HFOV / 53° VFOV / 82.4° DFOV" },
      ],
    },
    {
      section: "PHYSICAL SPECIFICATIONS",
      specs: [
        { label: "Dimensions", value: "158 x 162 x 48 mm (Unfolded)" },
        { label: "Weight", value: "76g" },
        { label: "IP Rating", value: "IP54 (Splash & Dust Resistant)" },
        { label: "Operating Temp", value: "-20°C to +50°C" },
        { label: "Storage Temp", value: "-30°C to +70°C" },
        { label: "Material", value: "Aerospace Titanium & TR90" },
      ],
    },
    {
      section: "STEREO DEPTH CAMERAS",
      specs: [
        { label: "Sensor Type", value: "OV9282 Monochrome (Dual)" },
        { label: "Resolution", value: "1280 x 800 pixels" },
        { label: "Size", value: "1/4 inch" },
        { label: "Depth Range", value: "70cm - 12m" },
        { label: "Shutter", value: "Global" },
        { label: "Field of View", value: "77° HFOV / 52.7° VFOV / 84.5° DFOV" },
      ],
    },
    {
      section: "SOFTWARE & OS",
      specs: [
        { label: "Operating System", value: "Cryon OS" },
        { label: "Linux Kernel", value: "Linux 5.15+" },
        { label: "Architecture", value: "ARM-based" },
        { label: "SDK Support", value: "Spectre SDK, DepthAI, Python, C++" },
        { label: "AI Frameworks", value: "TensorFlow, ONNX, PyTorch" },
        { label: "Development", value: "Open-source libraries & tools" },
      ],
    },
  ];

  return (
    <div className="bg-(--bg-dark) shadow-2xl md:px-5 md:py-10">
      <section className="relative w-full rounded-2xl bg-(--bg-light) px-4 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-bebas mb-4 text-5xl tracking-wider text-(--text) md:text-7xl">
              DETAILED HARDWARE
              <span className="mt-2 block bg-linear-to-r from-(--accent) to-blue-600 bg-clip-text text-transparent">
                & SOFTWARE SPECIFICATIONS
              </span>
            </h2>
          </motion.div>
          {/* Image for small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center overflow-hidden rounded-2xl border border-(--border) bg-linear-to-br from-(--bg-light) to-(--bg-light) sm:hidden"
          >
            <img
              src={imgPlaceholder}
              alt="Cryon Spectre Component"
              className="h-full w-full object-contain"
            />
          </motion.div>
          {/* Specs Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-15 rounded-2xl border border-(--border) bg-(--bg)/20 p-8 shadow-2xl sm:p-14 md:grid-cols-2"
          >
            {specifications.map((category, index) => (
              <React.Fragment key={index}>
                {/* Insert Image after the 3rd specification (4th position) */}
                {index === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="hidden min-h-96 items-center justify-center overflow-hidden rounded-2xl border border-(--border) bg-linear-to-br from-(--bg-light) to-(--bg-light) sm:flex"
                  >
                    <img
                      src={imgPlaceholder}
                      alt="Cryon Spectre Component"
                      className="h-full w-full object-contain"
                    />
                  </motion.div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="mb-6 border-b border-(--border) pb-4">
                    <h3
                      className="font-bebas text-xl tracking-widest text-(--accent) uppercase"
                      style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)" }}
                    >
                      {category.section}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: specIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2 border-b border-(--border)/50 pb-4 sm:flex-row sm:items-start sm:justify-between"
                      >
                        <span className="font-montserrat shrink-0 text-sm tracking-wide text-(--text-muted) uppercase">
                          {spec.label}
                        </span>
                        <span className="font-bebas text-right text-sm tracking-wide text-(--text) sm:text-left">
                          {spec.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
        {/* Call to Action */}
        <div className="mx-auto mt-1 flex max-w-7xl flex-col items-center justify-center gap-5 rounded-3xl p-5 text-center whitespace-nowrap sm:p-10 lg:flex-row xl:gap-6">
          <p className="font-semnibold text-4xl text-(--text) sm:mr-12">
            Learn more <br className="sm:hidden" /> about Spectre
          </p>
          <button className="font-inter text-md z-10 w-70 rounded-full border border-(--bg) bg-(--bg) px-4 py-2 font-medium text-(--text) transition-colors duration-200 hover:border-(--accent) hover:bg-(--bg-light) hover:text-(--accent) lg:px-8 lg:py-4 xl:text-xl">
            Full documentation{" "}
            <ChevronRight className="inline-block h-auto w-5" />
          </button>
          <button className="font-inter text-md z-10 w-70 rounded-full border border-(--bg) bg-(--bg) px-4 py-2 font-medium text-(--text) transition-colors duration-200 hover:border-(--accent) hover:bg-(--bg-light) hover:text-(--accent) lg:px-8 lg:py-4 xl:text-xl">
            Get Started guide{" "}
            <ChevronRight className="inline-block h-auto w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechSpecsSheet;
