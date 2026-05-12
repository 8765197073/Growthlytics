import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-blue/80 backdrop-blur-xl border-b border-white/10" id="navbar">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-cyan rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(0,242,255,0.4)]">
            <TrendingUp strokeWidth={3} className="text-black" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter">
            GROWTH<span className="text-brand-cyan">LYTICS</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand-cyan transition-colors">
              {link.name}
            </a>
          ))}
          <a href="/#book-demo" className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-brand-cyan transition-all transform hover:scale-105">
            Book a Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white w-10 h-10 flex items-center justify-center" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-brand-blue px-6 pt-12 flex flex-col gap-8 z-40 overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-4xl font-display font-bold tracking-tight hover:text-brand-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/#book-demo" 
              onClick={() => setIsOpen(false)} 
              className="w-full py-5 bg-brand-cyan text-black font-bold rounded-2xl text-center text-xl shadow-[0_0_20px_rgba(0,242,255,0.3)] mt-4"
            >
              Book a Demo
            </a>
            
            <div className="mt-auto pb-32 text-white/30 text-sm uppercase tracking-widest font-bold">
              © 2024 Growthlytics Agency
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
