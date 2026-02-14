
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-8 md:px-12 md:py-10 z-[100] flex justify-between items-center mix-blend-difference">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-black text-xs font-black tracking-tighter">SM</span>
        </div>
        <a href="/" className="text-lg font-bold tracking-tighter hover:opacity-60 transition-opacity">
          Org Name
        </a>
      </div>
      
      <div className="hidden md:flex space-x-12 items-center">
        <a href="#work" className="text-[11px] uppercase tracking-[0.2em] font-semibold hover:opacity-60 transition-opacity interactive">Work</a>
        <a href="#about" className="text-[11px] uppercase tracking-[0.2em] font-semibold hover:opacity-60 transition-opacity interactive">About</a>
        <a href="#contact" className="text-[11px] uppercase tracking-[0.2em] font-semibold hover:opacity-60 transition-opacity interactive px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">Connect</a>
      </div>

      <div className="md:hidden flex flex-col space-y-1 group cursor-pointer interactive">
        <div className="w-6 h-[2px] bg-white group-hover:w-4 transition-all"></div>
        <div className="w-6 h-[2px] bg-white"></div>
      </div>
    </nav>
  );
};

export default Navbar;
