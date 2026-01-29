
import React from 'react';

interface CompetenciesProps {
  isAdmin: boolean;
  competencies: string[];
  onUpdate: (newComp: string[]) => void;
}

const Competencies: React.FC<CompetenciesProps> = ({ isAdmin, competencies, onUpdate }) => {
  const handleEdit = (idx: number, value: string) => {
    const newComp = [...competencies];
    newComp[idx] = value;
    onUpdate(newComp);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 lg:mb-16">
          <span className="text-blue-900 font-black uppercase tracking-[0.5em] text-[10px] block mb-4">Expertise Técnica</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Competências Estratégicas</h2>
          <div className="w-12 h-1.5 bg-green-700 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {competencies.map((skill, idx) => (
            <span 
              key={idx}
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 text-sm md:text-base font-bold rounded-2xl hover:bg-blue-900 hover:text-white hover:border-blue-900 hover:scale-105 transition-all cursor-default shadow-sm tracking-wide"
              contentEditable={isAdmin}
              onBlur={(e) => handleEdit(idx, e.currentTarget.innerText)}
              suppressContentEditableWarning
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
