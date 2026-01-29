
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Trajetória Profissional</h2>
            <div className="w-20 h-2 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-slate-400 max-w-lg text-lg leading-relaxed font-light">
            Experiência consolidada no setor público e gestão de inovação voltada para o bem comum e eficiência do Estado.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
                <div className="md:col-span-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-500 leading-tight">{exp.company}</h3>
                  <p className="text-slate-400 mt-3 font-bold uppercase tracking-widest text-[10px]">{exp.role}</p>
                </div>
                <div className="md:col-span-3 border-l border-white/10 pl-10 md:pl-16">
                  <p className="text-lg lg:text-xl text-slate-300 mb-8 lg:mb-12 leading-relaxed font-light">
                    {exp.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    {exp.tasks.map((task, tidx) => (
                      <li key={tidx} className="flex items-start group/task">
                        <span className="text-green-500 mr-3 text-lg group-hover/task:translate-x-1 transition-transform">▹</span>
                        <span className="text-slate-400 text-base leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
