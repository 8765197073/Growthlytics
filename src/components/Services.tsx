import { motion } from "motion/react";
import { Search, Share2, Table, Megaphone, Layout, FileText, ChevronRight, Bot, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominating search rankings through technical audits, keyword research, and high-authority link building.",
    color: "from-cyan-400 to-blue-500",
    slug: "seo-optimization"
  },
  {
    icon: Bot,
    title: "AI App Development",
    desc: "Leveraging cutting-edge language models to create intelligent applications for automation and enhanced user experiences.",
    color: "from-violet-400 to-purple-600",
    slug: "ai-app-development"
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Building high-performance, responsive websites tailored to your brand, optimized for speed and conversion.",
    color: "from-blue-400 to-cyan-600",
    slug: "website-development"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Building communities and driving engagement across Meta, TikTok, and LinkedIn with viral-ready campaigns.",
    color: "from-purple-500 to-pink-500",
    slug: "social-media-marketing"
  },
  {
    icon: Table,
    title: "Excel & Data Analytics",
    desc: "Transforming raw data into actionable insights with complex modeling, automation, and custom dashboards.",
    color: "from-green-400 to-emerald-600",
    slug: "excel-data-analytics"
  },
  {
    icon: Megaphone,
    title: "Google Ads (PPC)",
    desc: "Maximizing ROI with precision-targeted search, display, and YouTube campaigns that convert intent into sales.",
    color: "from-yellow-400 to-orange-500",
    slug: "google-ads-ppc"
  },
  {
    icon: Layout,
    title: "Meta Business Suite",
    desc: "Comprehensive management of your Facebook and Instagram ecosystem, integrated with unified messaging.",
    color: "from-blue-500 to-indigo-600",
    slug: "meta-business-suite"
  },
  {
    icon: FileText,
    title: "Content Strategy",
    desc: "Story-driven content ecosystems designed to nurture leads and establish industry authority.",
    color: "from-red-400 to-orange-600",
    slug: "content-strategy"
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black/30" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">OUR CORE <span className="text-brand-cyan">EXPERTISE</span></h2>
          <p className="text-white/50 max-w-2xl text-lg">
            We don't just run ads; we engineer growth systems. Explore our modular services designed for the modern digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-glass rounded-[32px] hover:bg-white/10 transition-all cursor-pointer border border-white/5"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-3.5 mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <Link to={`/service/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan uppercase tracking-widest group-hover:gap-4 transition-all">
                Learn More <ChevronRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
