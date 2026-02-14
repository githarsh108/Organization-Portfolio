
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-32 pb-12 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#0a0a0a]">
      <div className="flex flex-col items-start md:items-center text-left md:text-center py-20">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-black mb-12">04 — Get In Touch</h2>
        <div className="relative group overflow-hidden">
          <a 
            href="mailto:syed.work@example.com" 
            className="text-[14vw] md:text-[12vw] font-black uppercase tracking-tighter leading-none inline-block interactive transition-all duration-500 hover:text-transparent hover:text-outline-white"
            style={{ WebkitTextStroke: '1px white' }}
          >
            Let's Talk.
          </a>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          <a href="#" className="text-xs uppercase tracking-widest font-black text-gray-500 hover:text-white transition-colors interactive">LinkedIn</a>
          <a href="#" className="text-xs uppercase tracking-widest font-black text-gray-500 hover:text-white transition-colors interactive">GitHub</a>
          <a href="#" className="text-xs uppercase tracking-widest font-black text-gray-500 hover:text-white transition-colors interactive">X (Twitter)</a>
          <a href="#" className="text-xs uppercase tracking-widest font-black text-gray-500 hover:text-white transition-colors interactive">Resume</a>
        </div>
      </div>
      
      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] font-black text-gray-700">
        <p>© 2024 SYED MOINUDDIN — ENGINEER & DESIGNER</p>
        <p>LOCATED IN HYDERABAD, INDIA</p>
      </div>
    </footer>
  );
};

export default Footer;
