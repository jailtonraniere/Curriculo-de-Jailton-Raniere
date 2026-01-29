
import React from 'react';
import { TimelineEntry } from '../types';

interface TimelineProps {
  isAdmin: boolean;
  entries: TimelineEntry[];
  onUpdate: (newEntries: TimelineEntry[]) => void;
}

const Timeline: React.FC<TimelineProps> = ({ isAdmin, entries, onUpdate }) => {
  const getIcon = (idx: number) => {
    const icons = [
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" /></svg>,
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    ];
    return icons[idx % icons.length];
  };

  const handleEdit = (index: number, field: keyof TimelineEntry, value: any) => {
    const newEntries = [...entries];
    newEntries[index] = { ...newEntries[index], [field]: value };
    onUpdate(newEntries);
  };

  return (
    <section id="trajetoria" className="py-20 lg:py-32 bg-white scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 lg:mb-24 text-center">
          <div className="relative inline-block">
             <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[6rem] lg:text-[8rem] font-black text-slate-50 select-none z-0 tracking-widest leading-none">HISTORY</span>
             <div className="relative z-10">
                <span className="text-blue-900 font-bold uppercase tracking-[0.4em] text-[10px] block mb-2">Cronologia</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">Trajetória</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-900 via-green-600 to-blue-900 mx-auto mt-4 rounded-full"></div>
             </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-12 bottom-12 w-1 bg-slate-100 -translate-x-1/2 rounded-full overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 via-green-600 to-slate-100"></div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {entries.map((entry, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute left-6 md:left-1/2 top-4 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <div className="w-8 h-8 md:w-14 md:h-14 bg-white rounded-lg md:rounded-2xl rotate-45 border-2 border-slate-100 shadow-xl flex items-center justify-center transition-transform group-hover:scale-110">
                       <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 bg-blue-900 rounded-full"></div>
                    </div>
                  </div>

                  <div className={`flex flex-col md:flex-row items-stretch md:items-center w-full`}>
                    <div className={`hidden md:flex w-full md:w-1/2 items-center ${isEven ? 'md:order-2 justify-start pl-20 lg:pl-32' : 'md:order-1 justify-end pr-20 lg:pr-32'}`}>
                        <span 
                          className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] bg-white px-5 py-2 rounded-full shadow-md border border-slate-100"
                          contentEditable={isAdmin}
                          onBlur={(e) => handleEdit(idx, 'period', e.currentTarget.innerText)}
                          suppressContentEditableWarning
                        >
                             {entry.period}
                        </span>
                    </div>

                    <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:order-1 md:pr-20 lg:pr-32' : 'md:order-2 md:pl-20 lg:pl-32'}`}>
                      <div className="bg-white p-8 md:p-10 lg:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.02)] relative overflow-hidden transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
                        <div className={`relative z-10 flex flex-col ${isEven ? 'md:items-end' : 'items-start'}`}>
                          <div className={`flex items-center gap-5 mb-6 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg">
                              {getIcon(idx)}
                            </div>
                            <div className={isEven ? 'md:text-right' : 'text-left'}>
                              <h3 
                                className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-1"
                                contentEditable={isAdmin}
                                onBlur={(e) => handleEdit(idx, 'title', e.currentTarget.innerText)}
                                suppressContentEditableWarning
                              >
                                {entry.title}
                              </h3>
                              <p 
                                className="text-green-700 font-black text-[9px] md:text-xs uppercase tracking-[0.15em]"
                                contentEditable={isAdmin}
                                onBlur={(e) => handleEdit(idx, 'subtitle', e.currentTarget.innerText)}
                                suppressContentEditableWarning
                              >
                                {entry.subtitle}
                              </p>
                            </div>
                          </div>

                          <p 
                            className={`text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-light ${isEven ? 'md:text-right' : 'text-left'}`}
                            contentEditable={isAdmin}
                            onBlur={(e) => handleEdit(idx, 'description', e.currentTarget.innerText)}
                            suppressContentEditableWarning
                          >
                            {entry.description}
                          </p>

                          {entry.highlights && (
                            <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                              {entry.highlights.map((item, hIdx) => (
                                <span 
                                  key={hIdx} 
                                  className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-600 border border-slate-200/60 px-3 py-1.5 rounded-xl"
                                  contentEditable={isAdmin}
                                  onBlur={(e) => {
                                    const newHighlights = [...entry.highlights!];
                                    newHighlights[hIdx] = e.currentTarget.innerText;
                                    handleEdit(idx, 'highlights', newHighlights);
                                  }}
                                  suppressContentEditableWarning
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
