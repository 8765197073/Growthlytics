import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Loader2, Sparkles } from "lucide-react";

export default function InterestForm() {
  const [formData, setFormData] = useState({ name: "", email: "", overview: "" });
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const currentEmail = formData.email;

    try {
      console.log("Submitting form to backend...", formData);
      
      // Try regular API submission first
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmittedEmail(currentEmail);
        setStatus("success");
        setFormData({ name: "", email: "", overview: "" });
        setTimeout(() => setStatus("idle"), 8000);
        return;
      }

      // If API fails (likely 404 on Netlify), try Netlify Forms submission
      console.log("API submission failed, attempting Netlify Forms fallback...");
      const netlifyFormData = new URLSearchParams();
      netlifyFormData.append("form-name", "growthlytics-demo");
      netlifyFormData.append("name", formData.name);
      netlifyFormData.append("email", formData.email);
      netlifyFormData.append("overview", formData.overview);

      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyFormData.toString(),
      });

      if (netlifyResponse.ok) {
        setSubmittedEmail(currentEmail);
        setStatus("success");
        setFormData({ name: "", email: "", overview: "" });
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        setErrorMessage("Failed to send submission. Please try again later.");
        setStatus("idle");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Last ditch effort for Netlify if the network error was because of the endpoint
      setErrorMessage("Network error. If you are on Netlify, please check your form configuration.");
      setStatus("idle");
    }
  };

  return (
    <section id="book-demo" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop" 
                alt="3D Analytics Visualization"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-glass rounded-2xl border border-white/10 backdrop-blur-xl">
                <Sparkles className="text-brand-cyan mb-2" />
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Growth Overview</h4>
                <p className="text-sm text-gray-400">Capture every data point that matters to your scale.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-glass p-8 md:p-12 rounded-3xl border-2 border-brand-cyan/20 shadow-[0_0_50px_rgba(0,242,255,0.05)]"
          >
            <div className="text-center lg:text-left mb-10">
              <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2 block">Action Required</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Book Your Growth Demo</h2>
              <p className="text-gray-400">Tell us about your business dreams, and we'll show you the data route to get there.</p>
            </div>

            <form 
              name="growthlytics-demo"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="growthlytics-demo" />
              <p className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Business Overview</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.overview}
                  onChange={(e) => setFormData({...formData, overview: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                  placeholder="Tell us about your current goals, challenges, and vision for growth..."
                />
              </div>

              <button 
                disabled={status !== "idle"}
                className="w-full bg-brand-cyan text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all transform active:scale-95 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  <>Submission Successful <CheckCircle className="w-5 h-5" /></>
                ) : (
                  <>Secure My Consultation <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>

            <AnimatePresence>
              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-brand-cyan text-center mt-6 font-bold"
                >
                  Confirmation sent to {submittedEmail}. We'll reach out shortly.
                </motion.p>
              )}
              {errorMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm whitespace-pre-wrap"
                >
                  <p className="font-bold mb-1">Submission Error:</p>
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
