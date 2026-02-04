import { motion } from "framer-motion";
import { Twitter, Youtube, Linkedin, Github } from "lucide-react";
import logoWhite from "../assets/logo.svg";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "Home" },
      { label: "Services" },
      { label: "Industry Solutions" },
      { label: "About Us" },
      { label: "Careers" },
    ],
    resources: [
      { label: "Distributors" },
      { label: "Support" },
      { label: "Forum" },
      { label: "Docs" },
      { label: "Blog" },
    ],
    products: [
      { label: "Store" },
      { label: "Cryon Spectre" },
      { label: "Accessories" },
      { label: "Guide" },
      { label: "Warranty & Refund Policy" },
    ],
  };

  return (
    <footer className="font-montserrat bg-(--bg-dark) px-6 py-16 text-(--text) md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Top Section: Logo and Links */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand and Socials */}
          <div className="space-y-8">
            <img src={logoWhite} alt="Cryon" className="h-10" />
            <div className="flex gap-5 text-(--text-muted)">
              <Twitter
                className="cursor-pointer transition-colors hover:text-(--accent)"
                size={20}
              />
              <Youtube
                className="cursor-pointer transition-colors hover:text-(--accent)"
                size={20}
              />
              <Linkedin
                className="cursor-pointer transition-colors hover:text-(--accent)"
                size={20}
              />
              <Github
                className="cursor-pointer transition-colors hover:text-(--accent)"
                size={20}
              />
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key} className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  className="cursor-pointer text-sm text-(--text) transition-colors hover:text-(--accent)"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-(--border) bg-(--bg-light) p-6 shadow-2xl md:flex-row md:p-8"
        >
          <h3 className="font-bebas text-2xl tracking-wide md:text-3xl">
            Newsletter Sign Up
          </h3>
          <div className="relative flex w-full min-w-75 items-center overflow-hidden rounded-full bg-(--bg) p-1 md:w-auto lg:min-w-md">
            <input
              type="email"
              placeholder="Enter your email here..."
              className="flex-1 px-6 py-2 text-[0.8rem] text-(--text) outline-none placeholder:text-(--text-muted)"
            />
            <button className="cursor-pointer rounded-full bg-(--accent) px-2 py-2 text-xs font-bold text-(--text) transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-4 border-t border-(--border) pt-8 text-[12px] text-(--text-muted) md:grid md:grid-cols-3">
          <p className="justify-self-start">All Rights Reserved © 2026 Cryon</p>
          <div className="flex gap-8 justify-self-end md:col-span-2">
            <a href="#" className="transition-colors hover:text-(--text)">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-(--text)">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
