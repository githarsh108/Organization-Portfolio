
import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-56 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-5">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-black mb-12">01 — About Me</h2>
          <div className="sticky top-32">
            <p className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter">
              A minimalist at heart, I build <span className="text-gray-500">performant</span> web solutions.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-7 pt-0 lg:pt-24 flex flex-col space-y-16">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
              I'm Syed Moinuddin, a software engineer with a deep passion for clean interfaces and seamless user interactions. I believe that code is as much a craft as it is a science.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
              With a background in both engineering and design thinking, I bridge the gap between complex backend architectures and beautiful frontend implementations.
            </p>
          </div>
          
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-black mb-8">Capabilities</h3>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {SKILLS.map(skill => (
                <div key={skill.id} className="group relative overflow-hidden interactive">
                  <span className="text-xl md:text-2xl font-bold group-hover:text-gray-500 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <div className="w-0 group-hover:w-full h-[1px] bg-white transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
