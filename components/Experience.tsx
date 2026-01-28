
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trajetória Profissional</h2>
            <div className="w-16 h-1 bg-green-500"></div>
          </div>
          <p className="text-slate-400 max-w-md">
            Experiência consolidada no setor público e gestão de inovação voltada para o bem comum.
          </p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-bold text-green-500">{exp.company}</h3>
                  <p className="text-slate-400 mt-2 font-medium">{exp.role}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exp.tasks.map((task, tidx) => (
                      <li key={tidx} className="flex items-start">
                        <span className="text-green-500 mr-2">▹</span>
                        <span className="text-slate-400 text-sm leading-snug">{task}</span>
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
