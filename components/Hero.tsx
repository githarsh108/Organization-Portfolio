
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1 = useRef<HTMLSpanElement>(null);
  const titleLine2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.to(".reveal-item", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2
      })
      .from(".hero-info", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
      }, "-=0.6");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 xl:px-32 bg-[#0a0a0a] overflow-hidden">
      <div className="z-10">
        <div className="overflow-hidden mb-[-2vw]">
          <h1 className="text-[14vw] md:text-[12vw] leading-[1] font-black uppercase tracking-tighter flex flex-col">
            <span className="reveal-item translate-y-full opacity-0">Software</span>
            <span className="reveal-item translate-y-full opacity-0 text-outline-white text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Engineer</span>
          </h1>
        </div>
      </div>
      
      <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="hero-info max-w-lg">
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-[1.4] tracking-tight">
            Independent developer crafting high-end digital experiences, based in India. Focused on the intersection of design and technology.
          </p>
        </div>
        
        <div className="hero-info flex flex-col space-y-4 md:text-right">
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-black">Availability</span>
            <span className="text-xs uppercase tracking-widest text-white/80 font-bold flex items-center md:justify-end gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for Freelance
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4">
        <div className="w-[1px] h-12 bg-white/20"></div>
        <span className="text-[9px] uppercase tracking-[0.4em] text-gray-500 rotate-0">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;
