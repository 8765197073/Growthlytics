import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Globe, Megaphone, Search } from "lucide-react";

const slides = [
  { title: "AI App Development", desc: "Intelligent automation and enhanced user experiences.", icon: Bot },
  { title: "Website Development", desc: "High-performance, responsive websites optimized for conversion.", icon: Globe },
  { title: "Social Media Marketing", desc: "Viral campaigns that drive engagement.", icon: Megaphone },
  { title: "SEO Strategy", desc: "Rank higher and reach your target audience.", icon: Search },
];

export default function ShowreelAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full text-white p-8 bg-black/20">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center"
        >
          <div className="mb-8 flex justify-center text-brand-cyan">
            {React.createElement(slides[index].icon, {className: "w-24 h-24"})}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{slides[index].title}</h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl">{slides[index].desc}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
