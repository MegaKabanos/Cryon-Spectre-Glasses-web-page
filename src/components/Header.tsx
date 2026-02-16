import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, Store } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isScrolledPastSlider, setIsScrolledPastSlider] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  {
    /* Close search and mobile menu when clicking outside */
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchActive(false);
      }
    };
    if (isSearchActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchActive]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Assuming Hero + ImageSlider take up roughly 2 viewport heights.
      // Adjust this threshold as needed based on actual component heights.
      const threshold = window.innerHeight * 2;
      setIsScrolledPastSlider(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  const toggleSearch = () => setIsSearchActive(!isSearchActive);

  const navItems = [
    { label: "Products", hasDropdown: true },
    { label: "Our Technology", hasDropdown: true },
    { label: "Industry Solutions", hasDropdown: true },
    { label: "Developers", hasDropdown: true },
    { label: "Blog", hasDropdown: false },
    { label: "About Us", hasDropdown: false },
  ];

  return (
    <header className="fixed inset-x-0 top-2 z-50 mx-auto w-[92%] max-w-400 rounded-[3rem] transition-all duration-300 md:w-[85%] lg:w-[95%]">
      <nav
        className={`flex w-full ${isOpen ? "rounded-t-[3rem] border-b-0" : "rounded-[3rem]"} border-(--border) backdrop-blur-xl items-center justify-between px-6 py-2 sm:py-4 transition-all duration-500 border ${
          isScrolledPastSlider
            ? "bg-white/10"
            : `bg-(--bg)/60`
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="shrink-0"
        >
          <img src={logoWhite} alt="logo" className="w-24 md:w-28" />
        </motion.div>

        {/* Desktop Navigation */}
        <div
          className={`hidden flex-1 items-center justify-center gap-6 transition-all duration-300 lg:flex ${isSearchActive ? "invisible opacity-0" : "visible opacity-100"}`}
        >
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <button className="font-montserrat flex items-center gap-1 text-[0.7rem] font-semibold tracking-wide text-white/90 uppercase transition-colors hover:text-white">
                {item.label}
                {item.hasDropdown && (
                  <span className="text-[10px] opacity-50">▼</span>
                )}
              </button>
              {item.hasDropdown && (
                <div className="invisible absolute left-0 mt-2 w-48 rounded-xl border border-white/10 bg-neutral-900 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                    >
                      Option 2
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Input - Expands when active */}
        <motion.div
          ref={searchRef}
          initial={false}
          animate={{
            width: isSearchActive ? "25rem" : "0px",
            opacity: isSearchActive ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="hidden items-center overflow-hidden lg:flex"
        >
          <input
            autoFocus={isSearchActive}
            type="text"
            placeholder="Search..."
            className="font-montserrat w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 transition-all duration-200 focus:border-white/50 focus:outline-none"
          />
        </motion.div>

        {/* Right side Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <motion.button
            onClick={toggleSearch}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-white/70 transition-colors outline-none hover:text-white"
          >
            {isSearchActive ? <X size={24} /> : <Search size={24} />}
          </motion.button>

          <button className="font-montserrat flex items-center gap-2 rounded-full bg-(--accent) px-5 py-2 text-sm font-bold text-(--text) transition-colors hover:bg-(--text) hover:text-black">
            <Store size={14} /> Store
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="p-2 text-white lg:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`rounded-b-[3rem] border-x border-b border-t-0 border-(--border) backdrop-blur-xl ${
              isScrolledPastSlider ? "bg-white/10" : "bg-(--bg)/60"
            }`}
          >
            <div className="space-y-1 px-6 py-6">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/5 last:border-0"
                >
                  <button
                    onClick={() =>
                      item.hasDropdown && toggleDropdown(item.label)
                    }
                    className="font-montserrat flex w-full items-center justify-between py-4 text-left font-medium text-white/90 hover:text-white"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <span
                        className={`text-[10px] transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    )}
                  </button>

                  {item.hasDropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 overflow-hidden rounded-xl bg-white/5"
                    >
                      <a
                        href="#"
                        className="block px-6 py-3 text-sm text-white/60 hover:text-white"
                      >
                        Sub Option A
                      </a>
                      <a
                        href="#"
                        className="block px-6 py-3 text-sm text-white/60 hover:text-white"
                      >
                        Sub Option B
                      </a>
                    </motion.div>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-(--accent) py-4 font-bold text-(--text)">
                  <Store size={18} />
                  Store
                </button>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="font-montserrat w-full rounded-xl border border-(--border) bg-(--bg) px-4 py-2 text-sm text-(--text) placeholder-white/40 transition-all duration-200 focus:border-white/50 focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
