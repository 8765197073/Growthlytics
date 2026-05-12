import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, TrendingUp, Target, Users, ShieldCheck, X, Clock, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "The Future of SEO: AI-Driven Search and How to Stay Ahead",
    summary: "As generative AI transforms how users search, we explore how to optimize for 'answer engines' and AI overviews. Learn to leverage semantic relevance over keyword stuffing.",
    content: `
      The landscape of Search Engine Optimization is undergoing its most significant transformation since the inception of Google. With the rise of Search Generative Experience (SGE) and AI Overviews, the goal is no longer just to rank #1—it's to be the source that AI cites.

      Key Strategies for 2024:
      1. Semantic Relevance: Focus on topics, not just keywords. AI understands context and intent better than ever.
      2. E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness are non-negotiable. Real-world insights trump generic AI-generated filler.
      3. Brand Authority: Building a recognizable brand name is the best defense against algorithm shifts.

      Conclusion:
      Digital entities that provide unique, data-backed value will thrive. Survival in the AI era requires a shift from 'creating content for search' to 'creating value for humans that AI happens to find useful'.
    `,
    icon: <Search className="w-6 h-6 text-brand-cyan" />,
    date: "May 5, 2024",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Maximizing ROI on Meta Ads: Strategies for 2024",
    summary: "Advanced attribution modeling and creative-led growth strategies for the current Meta ecosystem. Discover why creative testing is your new best friend for scaling.",
    content: `
      In 2024, Meta Ads have shifted from a platform of technical hacks to a platform of creative excellence. Advantage+ campaigns have automated much of the targeting, leaving 'Creative' as the last remaining lever for performance.

      The Growth Blueprint:
      1. Creative-Led Targeting: Let your video hooks and headlines do the segmentation.
      2. Diversified Format Testing: Reels are still the primary growth engine. Use them for top-of-funnel awareness.
      3. Zero-Click Content: Build trust within the feed before asking for the click.

      Scaling Secrets:
      Don't scale by budget alone; scale by creative diversity. A healthy ad account should have at least 5 different creative 'angles' running simultaneously.
    `,
    icon: <TrendingUp className="w-6 h-6 text-brand-cyan" />,
    date: "April 28, 2024",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Content That Converts: Building a Data-Driven Content Strategy",
    summary: "Stop guessing what your audience wants. Learn how to use heatmaps and user flow data to craft content that guides prospects through the funnel.",
    content: `
      Data-driven content strategy is the intersection of psychology and analytics. Most brands create content to 'be active'; winners create content to 'move numbers'.

      Building the Funnel:
      1. TOFU (Awareness): Answer the questions your audience is asking on Reddit and Quora.
      2. MOFU (Consideration): Use case studies and whitepapers to prove technical capability.
      3. BOFU (Conversion): Targeted comparisons and feature deep-dives to close the gap.

      Optimization Checklist:
      - Use heatmaps (Hotjar/VWO) to see where users drop off.
      - A/B test your headlines for 'curiosity gaps'.
      - Ensure every piece of content has a singular, clear Call to Action.
    `,
    icon: <Target className="w-6 h-6 text-brand-cyan" />,
    date: "April 15, 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Social Media 2.0: Moving From 'Likes' to ROI-Driven Communities",
    summary: "Viral loops are dead. Engagement is the new currency. We break down the shift from vanity metrics to meaningful interactions that drive business growth.",
    content: `
      The era of chasing viral numbers is coming to an end. Algorithms now prioritize 'meaningful relationship units' over simple scrolls. To survive, brands must transition from broadcasters to community leaders.

      Community Building Pillars:
      1. Vertical Communities: Focus on micro-niches where your expertise is unchallenged.
      2. Interactive Storytelling: Use Polls, AMAs, and Live sessions to lower the barrier between brand and consumer.
      3. Direct Response Social: Every post should contribute to a 'Sales Velocity' metric, not just reach.

      Growth Metric:
      Measure 'Share of Conversation' rather than 'Follower Count'. A small, loyal audience that talks back is worth 10x a silent million.
    `,
    icon: <Users className="w-6 h-6 text-brand-cyan" />,
    date: "April 02, 2024",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Data Privacy & The Cookieless Future: A Survival Guide",
    summary: "With third-party cookies disappearing, first-party data is your only safety net. Learn how to build a privacy-first marketing stack.",
    content: `
      The cookie is crumbling, and the marketing world is scrambling. However, privacy is not an obstacle—it's an opportunity to build deeper trust with your customers.

      The First-Party Strategy:
      1. Lead Magnets: Give immense value (tools, data, templates) in exchange for direct contact info.
      2. Identity Resolution: Use server-side tracking (GTM Server Side) to maintain data accuracy without violating browser privacy settings.
      3. Zero-Party Data: Simply ask your users what they want. Quizzes and preference centers are marketing goldmines.

      The Future is Permission-Based:
      Marketing in 2024 must be invited. Use personalized CRM flows to nurture leads who have explicitly opted into your world.
    `,
    icon: <ShieldCheck className="w-6 h-6 text-brand-cyan" />,
    date: "March 20, 2024",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
  }
];

function Search({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  );
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <section id="blog" className="py-24 px-6 md:px-12 bg-black/40 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-brand-cyan uppercase tracking-widest text-sm font-bold">Insights</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">Growth Strategies & Trends</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
            "Data is the new oil, but strategy is the refinery." — Stay ahead with our expert analysis.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass rounded-2xl overflow-hidden group hover:border-brand-cyan/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4 bg-brand-cyan text-black text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {post.date}
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="mb-4">{post.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="text-brand-cyan text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Blog Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center bg-black/95 p-0 sm:p-4 md:p-8"
          >
            <motion.div 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              className="bg-brand-blue border-t sm:border border-white/10 w-full max-w-4xl h-[95vh] sm:h-auto sm:max-h-[90vh] rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="relative h-64 md:h-80 w-full shrink-0">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent" />
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-brand-cyan hover:text-black transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <span className="bg-brand-cyan text-black px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase mb-3 inline-block">
                    {selectedPost.date}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold leading-tight line-clamp-3">{selectedPost.title}</h2>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12 no-scrollbar">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-gray-400 text-xs sm:text-sm border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-cyan" />
                    <span>6 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-brand-cyan" />
                    <span>Written by Analytics Team</span>
                  </div>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>

                <div className="mt-12 p-6 sm:p-8 bg-glass rounded-2xl border border-brand-cyan/20 text-center">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Want results like this?</h4>
                  <p className="text-gray-400 mb-6 text-xs sm:text-sm">Let our experts audit your current strategy and find the gaps.</p>
                  <a 
                    href="#book-demo" 
                    onClick={() => setSelectedPost(null)}
                    className="inline-block w-full sm:w-auto bg-brand-cyan text-black px-8 py-3 rounded-xl font-bold hover:bg-white transition-colors"
                  >
                    Book a Growth Audit
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
