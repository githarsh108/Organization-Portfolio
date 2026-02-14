
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, { scale: 1.05, duration: 0.8, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, { scale: 1, duration: 0.8, ease: "power2.out" });
  };

  return (
    <div 
      ref={containerRef}
      className="group flex flex-col md:flex-row gap-8 md:gap-16 py-16 border-b border-white/5 last:border-0 interactive"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="md:w-1/12 flex md:flex-col justify-between text-gray-600 text-[10px] font-black tracking-[0.4em] uppercase">
        <span>0{index + 1}</span>
        <span className="hidden md:block rotate-90 origin-left mt-12">Project</span>
      </div>

      <div className="md:w-7/12 overflow-hidden rounded-sm bg-[#111]">
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full aspect-[16/9] object-cover transition-transform duration-700"
        />
      </div>

      <div className="md:w-4/12 flex flex-col justify-between py-2">
        <div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-500">{project.title}</h3>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black">{project.category}</p>
        </div>
        
        <div className="mt-8 flex items-center gap-4 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
          <div className="w-8 h-[1px] bg-white"></div>
          <span className="text-xs uppercase tracking-widest font-bold">View Case Study</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
