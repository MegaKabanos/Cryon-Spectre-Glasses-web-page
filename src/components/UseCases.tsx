import { motion } from "framer-motion";
import {
  Package,
  Eye,
  Smartphone,
  Factory,
  Navigation,
  Shield,
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      id: 1,
      icon: Eye,
      title: "Professional Navigation",
      description:
        "Get real-time directions and spatial awareness overlaid on your vision for hands-free navigation in complex environments.",
      applications: ["Field work", "Urban navigation", "Wayfinding"],
    },
    {
      id: 2,
      icon: Shield,
      title: "Industrial Maintenance",
      description:
        "Access technical documentation and AR overlays for machinery repair and maintenance with hands-free operation.",
      applications: ["Equipment repair", "Troubleshooting", "Quality checks"],
    },
    {
      id: 3,
      icon: Factory,
      title: "Healthcare & Surgery",
      description:
        "Enhance surgical precision with augmented visuals and real-time data visualization for medical professionals.",
      applications: [
        "Surgical guidance",
        "Patient data",
        "Remote consultation",
      ],
    },
    {
      id: 4,
      icon: Package,
      title: "Warehouse & Logistics",
      description:
        "Optimize picking and packing operations with visual task guidance and inventory management overlay.",
      applications: ["Inventory tracking", "Pick guidance", "Barcode scanning"],
    },
    {
      id: 5,
      icon: Smartphone,
      title: "Remote Collaboration",
      description:
        "Enable experts to guide field workers in real-time with shared vision and AR annotations from remote locations.",
      applications: ["Expert guidance", "Training", "Team coordination"],
    },
    {
      id: 6,
      icon: Navigation,
      title: "Safety & Awareness",
      description:
        "Increase situational awareness with real-time hazard detection and environmental alerts for safer operations.",
      applications: [
        "Hazard detection",
        "Alert notifications",
        "Safety compliance",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    } as const,
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    } as const,
  };

  return (
    <section className="relative w-full bg-(--bg-dark) px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-bebas mb-6 text-5xl tracking-wide text-(--text) md:text-7xl">
            USE <span className="text-(--accent)">CASES</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-(--text-muted)">
            Discover how Spectre transforms spatial computing across
            industries
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.id}
                variants={cardVariants}
                className="group relative h-full"
              >
                {/* Card */}
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--bg) p-8">
                  {/* Top Border Highlight */}
                  <div className="absolute top-0 right-0 left-0 h-1 bg-linear-to-r from-transparent via-(--highlight) to-transparent"></div>

                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-(--accent)/20 to-purple-600/10">
                      <Icon className="h-7 w-7 text-(--accent)" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas mb-3 text-2xl tracking-wide text-(--text)">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="font-montserrat mb-6 grow text-sm leading-relaxed text-(--text-muted)">
                    {useCase.description}
                  </p>

                  {/* Applications */}
                  <div className="space-y-2 border-t border-(--border) pt-4">
                    <p className="font-bebas text-xs tracking-widest text-(--accent) uppercase">
                      Applications
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {useCase.applications.map((app, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          className={`font-montserrat rounded-full border border-(--border) bg-(--bg-light) px-3 py-1 text-xs text-(--text-muted) ${
                            index === 2
                              ? "flex max-w-40 basis-full justify-center"
                              : ""
                          }`}
                        >
                          {app}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
