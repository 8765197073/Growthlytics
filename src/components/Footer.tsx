import { TrendingUp, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-cyan rounded-lg flex items-center justify-center">
                <TrendingUp strokeWidth={3} className="text-black" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tighter">
                GROWTH<span className="text-brand-cyan">LYTICS</span>
              </span>
            </a>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              We are a team of performance marketers, data scientists, and creative storytellers dedicated to pushing the boundaries of what's possible in digital growth.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, url: "https://www.instagram.com/_growthlytics_" },
                { Icon: Facebook, url: "https://www.facebook.com/share/18SHphxJvW/" }
              ].map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-cyan hover:text-brand-cyan hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-8 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="/#services" className="hover:text-brand-cyan transition-colors">Services</a></li>
              <li><a href="/#portfolio" className="hover:text-brand-cyan transition-colors">Portfolio</a></li>
              <li><Link to="/career" className="hover:text-brand-cyan transition-colors">Career</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-brand-cyan transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-8 text-sm">Contact</h4>
            <ul className="space-y-4 text-white/50">
              <li>E: growthlytics23@gmail.com</li>
              <li className="break-words">11/1 Arabinda Road, Konnagar, West Bengal, India, 712246</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
          © 2026 GROWTHLYTICS AGENCY. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
