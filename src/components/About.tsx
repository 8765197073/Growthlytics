import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop" 
                alt="3D Digital Architecture"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-glass p-6 rounded-2xl border border-brand-cyan/30 backdrop-blur-xl">
              <span className="text-3xl font-bold text-brand-cyan">10+</span>
              <p className="text-xs uppercase tracking-tighter text-gray-400">Years of Innovation</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-cyan uppercase tracking-widest text-sm font-bold">Our DNA</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-8">Engineering the Future of Digital Growth</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl font-bold mb-2 text-brand-cyan flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-brand-cyan"></span> Our Dreams
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  To bridge the gap between human intuition and machine intelligence, becoming the global benchmark for data-driven storytelling.
                </p>
              </div>

              <div className="group">
                <h3 className="text-2xl font-bold mb-2 text-blue-400 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-blue-400"></span> Our Work
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We don't just run ads; we build precision-engineered growth architectures that transform cold traffic into loyal brand advocates.
                </p>
              </div>

              <div className="group">
                <h3 className="text-2xl font-bold mb-2 text-purple-400 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-purple-400"></span> Our Vision
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  A digital ecosystem where every ambitious brand has the tools to scale infinitely through transparency, data, and uncompromising creativity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
