import { motion } from "motion/react";
import { Mail, Briefcase, GraduationCap, Rocket } from "lucide-react";

export default function Career() {
  const values = [
    { icon: Briefcase, title: "Deep Work", desc: "We focus on high-impact tasks that move the needle." },
    { icon: GraduationCap, title: "Constant Learning", desc: "Data shifts every day, and so do we." },
    { icon: Rocket, title: "Scale Mindset", desc: "We don't think in additions; we think in multiplications." },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 text-white overflow-hidden relative">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20 mx-auto lg:mx-0"
        >
          <span className="text-brand-cyan uppercase tracking-widest text-sm font-bold mb-4 block">Join the Engine</span>
          <h1 className="font-display font-bold mb-8">BUILD THE <span className="text-brand-cyan font-glow">FUTURE</span> OF GROWTH</h1>
          <p className="text-white/60 text-xl leading-relaxed">
            We are looking for engineers, data scientists, and creative strategists who are obsessed with ROI and building the next generation of digital infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-left">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-glass rounded-3xl border border-white/5"
            >
              <v.icon className="text-brand-cyan mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-white/50 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-10 md:p-16 bg-gradient-to-br from-brand-cyan/20 to-blue-600/20 rounded-[3rem] border border-white/10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">READY TO SCALE?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            We don't follow traditional hiring rounds. If you think you can add value to our growth engine, we want to hear from you today.
          </p>
          <a 
            href="mailto:growthlytics23@gmail.com" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-brand-cyan transition-all transform hover:scale-105 shadow-xl"
          >
            <Mail size={24} /> Send Your Pitch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
