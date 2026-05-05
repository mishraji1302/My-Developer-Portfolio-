import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../constants";
import { BrandLogo } from "./Icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Work", "Skills", "Certifications", "About"];

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center mt-6 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`pointer-events-auto w-full max-w-4xl transition-all duration-500 rounded-full border ${
          scrolled 
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] py-3 px-6 hover:border-white/20 transition-colors" 
            : "bg-transparent border-transparent py-4 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <BrandLogo className="w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-green-400 transition-all duration-300">
              Arnav Mishra
            </span>
          </a>

          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <li key={item} className="relative">
                <a
                  href={`#${item.toLowerCase()}`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative z-10 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 inline-block"
                >
                  {item}
                </a>
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="nav-hover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <a
            href={PORTFOLIO_DATA.contact.email}
            className="hidden md:inline-flex relative items-center justify-center px-6 py-2.5 text-sm font-medium text-white group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-600 rounded-full opacity-70 group-hover:opacity-100 blur-md transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-500 rounded-full" />
            <span className="relative z-10">Let's Talk</span>
          </a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
