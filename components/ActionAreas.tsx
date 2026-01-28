
import React from 'react';
import { AREAS } from '../constants';

const ActionAreas: React.FC = () => {
  return (
    <section id="atuacao" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Áreas de Atuação</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Expertise técnica e estratégica aplicada ao fortalecimento do setor público e impacto social sustentável.
          </p>
        </div>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((area, index) => (
            <li key={index} className="bg-white p-8 rounded border border-slate-200 hover:border-blue-900 transition-colors group">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-green-700 group-hover:w-8 transition-all" aria-hidden="true"></div>
                <h3 className="text-lg font-medium text-slate-800">{area}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActionAreas;
