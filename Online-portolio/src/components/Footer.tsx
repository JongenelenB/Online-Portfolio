import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, Download } from 'lucide-react';

export default function Contact() {
  const currentYear = new Date().getFullYear();
  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    formData.append("access_key", "d005d495-c887-47ec-af00-93b8fbef82cf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        event.currentTarget.reset(); 
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
    console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="Contact" className="w-full h-auto flex flex-col items-center justify-center pt-32 pb-0 bg-gray-50">
      
      <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* LEFT COLUMN: Text & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">
              Get In Touch
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mt-4 leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to send me a message. 
            I'm always open to discussing new projects, creative ideas or opportunities.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { icon: <Mail className="text-orange-500" />, title: "Email", value: "Jongenelen.Bjorn@gmail.com", link: "mailto:Jongenelen.Bjorn@gmail.com" },
              { icon: <Phone className="text-orange-500" />, title: "Phone", value: "+32 485 50 12 97", link: "tel:+32485501297" },
              { icon: <MapPin className="text-orange-500" />, title: "Location", value: "Antwerp, Belgium", link: "#" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="p-3 bg-white rounded-lg shadow-sm text-orange-500 border border-gray-100">
                  {item.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.title}</p>
                  <a href={item.link} className="text-lg font-medium text-gray-800 hover:text-orange-500 transition-colors">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center lg:justify-start gap-6">
            <a href="https://github.com/bjornjongenelen" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-all text-gray-700 hover:text-orange-500">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/bjornjongenelen" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-all text-gray-700 hover:text-orange-500">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full rounded-xl shadow-lg overflow-hidden border-l-4 border-orange-500 bg-white p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
          
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none" placeholder="Tell me about your project..." />
            </div>

            <button 
              type="submit"
              disabled={status === "sending"}
              className={`w-full relative inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-red-600 to-orange-400 overflow-hidden group font-medium text-white transition-all shadow-md ${status === "sending" ? "opacity-70" : "hover:shadow-orange-200"}`}
            >
              <span className="relative w-full px-6 py-3 transition-all ease-in duration-75 bg-opacity-0 rounded-md group-hover:bg-opacity-0">
                <span className="flex items-center justify-center gap-2">
                   {status === "sending" ? "Sending..." : <><Send size={18} /> Send Message</>}
                </span>
              </span>
            </button>

            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-green-600 font-medium bg-green-50 py-3 rounded-lg border border-green-100">
                <CheckCircle2 size={18} /> Message Sent Successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

{/* FOOTER MET DOWNLOAD KNOP */}
      <footer className="w-full mt-16 border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
        <div className="flex flex-col items-center gap-3 mb-6">
          <p className="font-medium text-gray-400 italic text-xs">Want to see my full professional history?</p>
          <a 
            href="./src/assets/cv/CV - Bjorn Jongenelen.pdf" 
            download="CV_Bjorn_Jongenelen.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-orange-500 hover:text-orange-500 rounded-full transition-all duration-300 font-bold text-gray-700 shadow-sm hover:shadow-md active:scale-95 text-xs"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
        
        <div className="pb-8">
          <p>© {currentYear} Bjorn Jongenelen.</p>
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-600 mt-1">
            Built with ❤️ and a lot of ☕
          </p>
        </div>
      </footer>
    </section>
  );
}