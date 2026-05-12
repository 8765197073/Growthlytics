import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

const serviceData: Record<string, { title: string; description: string; caseStudy: string }> = {
  "seo-optimization": {
    title: "SEO Optimization",
    description: "Dominating search rankings through technical audits, keyword research, and high-authority link building. We help you increase organic traffic and visibility.",
    caseStudy: "Increased organic traffic by 150% for a leading e-commerce brand in 6 months."
  },
  "ai-app-development": {
    title: "AI App Development",
    description: "Leveraging cutting-edge language models to create intelligent applications for automation and enhanced user experiences.",
    caseStudy: "Developed an AI-powered customer service bot reducing support ticket volume by 40%."
  },
  "website-development": {
    title: "Website Development",
    description: "Building high-performance, responsive websites tailored to your brand, optimized for speed and conversion.",
    caseStudy: "Rebuilt a corporate website resulting in a 30% increase in lead generation."
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    description: "Building communities and driving engagement across Meta, TikTok, and LinkedIn with viral-ready campaigns.",
    caseStudy: "Achieved viral engagement with a multi-platform campaign reaching 1 million+ impressions."
  },
  "excel-data-analytics": {
    title: "Excel & Data Analytics",
    description: "Transforming raw data into actionable insights with complex modeling, automation, and custom dashboards.",
    caseStudy: "Automated manual reporting, saving 20 hours of work per week for a finance team."
  },
  "google-ads-ppc": {
    title: "Google Ads (PPC)",
    description: "Maximizing ROI with precision-targeted search, display, and YouTube campaigns that convert intent into sales.",
    caseStudy: "Reduced cost-per-acquisition by 25% while increasing conversions by 50%."
  },
  "meta-business-suite": {
    title: "Meta Business Suite",
    description: "Comprehensive management of your Facebook and Instagram ecosystem, integrated with unified messaging.",
    caseStudy: "Streamlined social operations, increasing response times by 60%."
  },
  "content-strategy": {
    title: "Content Strategy",
    description: "Story-driven content ecosystems designed to nurture leads and establish industry authority.",
    caseStudy: "Developed a content roadmap that boosted blog traffic by 200% year-over-year."
  }
};

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) return (
    <div className="py-48 text-center text-white">
      <h2 className="text-3xl font-display font-bold mb-4">Service Not Found</h2>
      <p className="text-white/50 mb-8">The service you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="px-8 py-4 bg-brand-cyan text-black font-bold rounded-full hover:bg-white transition-all">
        Back to Home
      </Link>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 max-w-4xl mx-auto px-6 text-white"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-brand-cyan mb-8 hover:gap-4 transition-all">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="text-5xl font-display font-bold mb-6">{service.title}</h1>
      <p className="text-xl text-white/70 mb-12">{service.description}</p>
      
      <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 mb-12">
        <h2 className="text-2xl font-bold mb-4">Case Study</h2>
        <p className="text-lg">{service.caseStudy}</p>
      </div>

      <a href="/#book-demo" className="px-8 py-4 bg-brand-cyan text-black font-bold rounded-full hover:bg-white transition-all">
        Book a Consultation
      </a>
    </motion.div>
  );
}
