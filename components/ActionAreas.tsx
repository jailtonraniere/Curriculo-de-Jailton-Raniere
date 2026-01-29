
import React from 'react';

interface ActionAreasProps {
  isAdmin: boolean;
  areas: string[];
  onUpdate: (newAreas: string[]) => void;
}

const ActionAreas: React.FC<ActionAreasProps> = ({ isAdmin, areas, onUpdate }) => {
  const handleEdit = (index: number, value: string) => {
    const newAreas = [...areas];
    newAreas[index] = value;
    onUpdate(newAreas);
  };

  return (
    <section id="atuacao" className="py-20 lg:py-32 bg-slate-50 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-200/20 select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter z-0">
        EXPERTISE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="relative inline-block">
             <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[7rem] lg:text-[8rem] font-black text-slate-200/50 select-none z-0 tracking-widest leading-none">AREA</span>
             <div className="relative z-10">
                <span className="text-green-700 font-black uppercase tracking-[0.6em] text-[10px] block mb-4">Core Skills</span>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">Áreas de Atuação</h2>
                <div className="w-24 h-2 bg-gradient-to-r from-blue-900 to-green-700 mx-auto mt-6 rounded-full"></div>
             </div>
          </div>
        </div>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {areas.map((area, index) => (
            <li 
              key={index} 
              className="group bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] transition-all duration-700 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.06)]"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner group-hover:bg-blue-900 transition-colors duration-500">
                <span className="text-2xl font-black text-slate-300 group-hover:text-white transition-colors">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 
                className="text-xl md:text-2xl font-bold text-slate-800 leading-tight font-serif mb-6"
                contentEditable={isAdmin}
                onBlur={(e) => handleEdit(index, e.currentTarget.innerText)}
                suppressContentEditableWarning
              >
                {area}
              </h3>
              <div className="w-10 h-1.5 bg-slate-100 mt-auto group-hover:w-16 group-hover:bg-green-700 transition-all duration-500 rounded-full"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActionAreas;
