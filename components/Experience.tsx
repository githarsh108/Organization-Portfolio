
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-40 px-10 md:px-20 lg:px-40 border-t border-white/5">
      <div className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-10">03 / EXPERIENCE</h2>
      </div>
      
      <div className="divide-y divide-white/10">
        {EXPERIENCES.map(exp => (
          <div key={exp.id} className="grid grid-cols-1 md:grid-cols-3 py-12 group hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
            <div className="text-gray-500 font-medium mb-4 md:mb-0 uppercase tracking-widest text-xs">{exp.period}</div>
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
              <p className="text-gray-400 italic mb-4 md:mb-0">{exp.role}</p>
            </div>
            <div className="text-gray-500 leading-relaxed max-w-md">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
