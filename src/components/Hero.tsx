import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, TrendingUp, X } from "lucide-react";
import ShowreelAnimation from "./ShowreelAnimation";

export default function Hero() {
  const [showReel, setShowReel] = useState(false);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="hero">
      {/* Video Modal */}
      <AnimatePresence>
        {showReel && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setShowReel(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-brand-cyan hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              <ShowreelAnimation />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-cyan/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              Scaling Brands with Precision
            </div>
            <h1 className="font-display font-bold mb-8">
              DATA DRIVEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">GROWTH ENGINE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              We combine advanced analytics with creative content strategy to deliver measurable ROI for digital-first enterprises.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#book-demo" className="w-full sm:w-auto px-8 py-4 bg-brand-cyan text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all">
                Book a Demo <ArrowRight size={20} />
              </a>
              <button 
                onClick={() => setShowReel(true)}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <Play size={20} className="fill-current" /> Watch Showreel
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden border border-white/10 group shadow-[0_0_80px_rgba(0,242,255,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" 
                alt="3D Abstract Tech Data"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl font-display font-bold opacity-30 select-none">+340%</span>
                  <p className="text-brand-cyan font-bold tracking-[0.5em] uppercase text-sm mt-2">Data Integrity</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-glass p-6 rounded-2xl border border-white/20 shadow-2xl hidden md:block backdrop-blur-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                  <TrendingUp />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Growth Metric</div>
                  <div className="text-2xl font-bold">$1.2M+ Secured</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
