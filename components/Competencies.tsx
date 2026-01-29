
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
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Competências Estratégicas</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {competencies.map((skill, idx) => (
            <span 
              key={idx}
              className="px-6 py-3 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all cursor-default shadow-sm"
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
