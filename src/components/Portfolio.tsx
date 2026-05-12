import { motion } from "motion/react";

const projects = [
  {
    title: "Nexus Tech Solutions",
    category: "Full Content Strategy",
    growth: "+210% Reach",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Lumina Fashion",
    category: "Meta Ads & Social",
    growth: "4.5x ROAS",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Apex Logistics",
    category: "Data & SEO Audit",
    growth: "-30% CAC",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">SUCCESS <span className="text-brand-cyan">STORIES</span></h2>
        <p className="text-white/50 max-w-2xl mx-auto text-lg">
          We let the numbers do the talking. Here's a glimpse at how we've helped industry leaders dominate their space.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative h-[500px] rounded-[40px] overflow-hidden cursor-pointer"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex justify-between items-end">
                <div>
                  <div className="px-3 py-1 rounded-full bg-brand-cyan text-black text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-display font-bold">{project.title}</h3>
                </div>
                <div className="text-brand-cyan font-display text-2xl font-bold">{project.growth}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
