import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="Contact" className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titel Sectie */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Linkerkant: Contact Informatie */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of the following channels. 
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Mail size={20} />, title: 'Email', value: 'hello@bjorn.com', link: 'mailto:hello@bjorn.com' },
                { icon: <Phone size={20} />, title: 'Phone', value: '+31 (0) 6 12345678', link: 'tel:+31612345678' },
                { icon: <MapPin size={20} />, title: 'Location', value: 'Antwerpen, België', link: '#' },
              ].map((item, i) => (
                <a 
                  href={item.link}
                  key={i} 
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all group"
                >
                  <div className="p-3 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors">
                    <span className="text-red-500">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.title}</p>
                    <p className="font-semibold text-gray-200">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Rechterkant: Web3Forms Contact Formulier */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-r from-red-600/30 to-orange-400/30 shadow-2xl"
          >
            <div className="bg-[#0f0f0f] p-8 rounded-[23px] border border-white/5">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
                {/* Web3Forms Access Key - VERVANG DEZE WAARDE */}
                <input type="hidden" name="access_key" value="JOUW_ACCESS_KEY_HIER" />
                
                {/* Anti-spam (honeypot) */}
                <input type="checkbox" name="botcheck" className="hidden" />

                <div>
                  <label className="text-sm text-gray-400 block mb-2 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all text-gray-200" 
                    placeholder="Bjorn Jongenelen" 
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-2 font-medium">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all text-gray-200" 
                    placeholder="bjorn@example.com" 
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-2 font-medium">Your Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all text-gray-200 resize-none" 
                    placeholder="How can I help you?" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-400 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-red-600/20"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Sectie */}
      <footer className="mt-32 pt-16 border-t border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          
          {/* Brand/Bio */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
              Bjorn
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Creative Developer & Designer passionate about building exceptional digital experiences and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              {['Home', 'About Me', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="hover:text-red-500 transition-colors inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: <Github size={20} />, url: 'https://github.com' },
                { icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
                { icon: <Mail size={20} />, url: 'mailto:hello@bjorn.com' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-red-600 hover:border-red-600 hover:text-white transition-all text-gray-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="text-center py-8 border-t border-white/5 text-gray-500 text-[10px] uppercase tracking-[0.2em]">
          © {currentYear} Bjorn Jongenelen. Made with <span className="text-red-600 mx-1">❤️</span> in Belgium
        </div>
      </footer>
    </section>
  );
}