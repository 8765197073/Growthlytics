import { motion } from 'motion/react';
import { 
  BarChart, 
  Search, 
  ShieldCheck, 
  Mail, 
  MousePointer2, 
  TrendingUp, 
  Zap,
  CheckCircle2,
  Users,
  Lightbulb,
  Globe,
  Settings,
  Target
} from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black pt-32 pb-20">
      {/* Cards Section */}
      <section className="max-w-7xl mx-auto px-10 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: 'Data-First Thinking', 
              desc: "Every decision is backed by data. We don't guess — we analyze, test, and optimize.",
              icon: <Lightbulb className="w-6 h-6" />,
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
            },
            { 
              title: 'Client Partnership', 
              desc: "We embed ourselves in your business to understand your goals, challenges, and growth levers.",
              icon: <Users className="w-6 h-6" />,
              img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
            },
            { 
              title: 'Transparent Results', 
              desc: "Real-time dashboards, honest reporting, and clear attribution so you always know your ROI.",
              icon: <ShieldCheck className="w-6 h-6" />,
              img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
            },
            { 
              title: 'Scalable Solutions', 
              desc: "From startups to enterprises, our frameworks scale with your ambition and budget.",
              icon: <Globe className="w-6 h-6" />,
              img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotateY: 10, rotateX: 5 }}
              className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[32px] transition-all duration-500 flex flex-col items-start text-left group perspective-1000 transform-gpu overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img src={card.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="" />
              </div>
              <div className="relative z-10 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold mb-4 text-white uppercase tracking-tight group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="relative z-10 text-sm text-white/50 leading-relaxed font-bold tracking-wide">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the Team Section -> Vision Section Redesign */}
      <section className="max-w-7xl mx-auto px-10 mb-40 relative">
        <div className="absolute top-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none text-white">
              The <span className="text-primary italic text-6xl md:text-8xl block">Foundation</span>
            </h2>
            <p className="text-xl text-white/40 font-medium leading-relaxed mb-10 max-w-xl">
              As a hungry, fast-paced startup, we rely on one absolute truth: <strong className="text-white">data-driven marketing</strong>. We act as the digital anchor for brands, helping you scale fearlessly across digital platforms and aggressively grow up your business. No fluff, just pure performance.
            </p>
            <div className="space-y-4">
              {[
                "Data-Driven Marketing Engines",
                "Scaling via Digital Platforms",
                "Aggressive Business Growth",
                "Startup Agility & Transparency"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-white font-bold uppercase tracking-wider text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-[60px] border border-white/10 p-1 overflow-hidden relative group">
               <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                alt="Data Visualization" 
                className="w-full h-full object-cover rounded-[58px] transition-all duration-1000 group-hover:scale-105" 
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Target className="w-20 h-20 text-primary opacity-20" />
               </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-black border border-white/10 p-10 rounded-3xl shadow-2xl">
               <p className="text-primary font-black text-5xl tracking-tighter italic">"Data-Driven."</p>
               <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2">The Growthlytics Creed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions / What we are providing Section */}
      <section className="max-w-7xl mx-auto px-10 mb-40 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-20 uppercase tracking-tighter text-white">
          What we are <span className="text-primary italic">Solving</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
           {[
             { 
               problem: "High CPA & Low ROI", 
               solution: "We implement advanced audience modeling and automated bid strategies to slash acquisition costs while maximizing lifetime value.",
               icon: <Target className="w-8 h-8" />,
               img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop"
             },
             { 
               problem: "Fragmented Data Silos", 
               solution: "Our custom attribution hubs unify tracking across Meta, Google, and your CRM for a single source of truth.",
               icon: <BarChart className="w-8 h-8" />,
               img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
             },
             { 
               problem: "Stagnant Organic Growth", 
               solution: "We deploy aggressive SEO frameworks that focus on high-intent revenue-generating keywords, not just vanity traffic.",
               icon: <TrendingUp className="w-8 h-8" />,
               img: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1000&auto=format&fit=crop"
             },
             { 
               problem: "Technical Bottlenecks", 
               solution: "Our team handles the heavy lifting of server-side GTM, PIXEL integration, and marketing automation setup.",
               icon: <Settings className="w-8 h-8" />,
               img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
             }
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-[#050505] theme-border p-10 rounded-[40px] hover:bg-white/5 transition-colors group relative overflow-hidden h-full flex flex-col"
             >
               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                 <img src={item.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="" />
               </div>
               <div className="relative z-10 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                 {item.icon}
               </div>
               <div className="relative z-10">
                 <p className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4">Problem vs Solution</p>
                 <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 group-hover:text-primary transition-colors">{item.problem}</h3>
                 <p className="text-white/50 leading-relaxed font-bold italic">"{item.solution}"</p>
               </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-10 mb-40">
        <div className="text-center mb-20">
          <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">The Growth Cycle</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">How We <span className="text-primary italic">Deliver</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { 
              id: '01', 
              title: 'Audit & Research', 
              desc: 'Deep dive into your current performance, competitors, and market opportunities.',
              img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
            },
            { 
              id: '02', 
              title: 'Strategy & Planning', 
              desc: 'Build a custom roadmap with clear KPIs, timelines, and budget allocation.',
              img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop'
            },
            { 
              id: '03', 
              title: 'Execute & Optimize', 
              desc: 'Launch campaigns, monitor performance, and continuously optimize for results.',
              img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600&auto=format&fit=crop'
            },
            { 
              id: '04', 
              title: 'Report & Scale', 
              desc: 'Transparent reporting on ROI and scaling strategies for sustained growth.',
              img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop'
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6 group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative theme-border mb-6">
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6 w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center font-black text-xs">
                  {step.id}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
