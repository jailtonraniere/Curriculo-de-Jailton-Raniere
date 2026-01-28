
import React from 'react';
import { TIMELINE_ENTRIES } from '../constants';

const Timeline: React.FC = () => {
  const getIcon = (idx: number) => {
    const icons = [
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" /></svg>,
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" /></svg>,
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    ];
    return icons[idx % icons.length];
  };

  return (
    <section id="trajetoria" className="py-24 bg-slate-50 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent opacity-50" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Trajetória na Assistência Social</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-700 to-blue-900 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Uma jornada de impacto dedicada ao fortalecimento das políticas públicas e inovação no atendimento ao cidadão.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Marcador de 'Atualmente' no topo */}
          <div className="mb-16 text-center relative z-20">
             <div className="inline-flex items-center space-x-2 px-6 py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Atualmente</span>
             </div>
          </div>

          {/* Vertical Line */}
          <div 
            className="absolute left-4 md:left-1/2 top-10 bottom-10 w-1 bg-slate-200 -translate-x-1/2 rounded-full overflow-hidden" 
            aria-hidden="true"
          >
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-600 via-blue-700 to-green-600 opacity-20"></div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_ENTRIES.map((entry, idx) => (
              <div key={idx} className="relative group">
                <div className={`flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node (Dot) */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full border-2 md:border-4 border-slate-50 shadow-md flex items-center justify-center group-hover:border-green-600 transition-all duration-300">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-700 rounded-full group-hover:scale-125 transition-transform"></div>
                    </div>
                  </div>

                  {/* Period Badge - Mobile (Visível apenas em telas pequenas) */}
                  <div className="ml-12 md:hidden mb-2">
                     <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded border border-green-100 uppercase tracking-widest">
                        {entry.period}
                     </span>
                  </div>

                  {/* Content Card container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pl-12 lg:pl-16' : 'md:pr-12 lg:pr-16'}`}>
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-900/10 transition-all duration-500 relative group-hover:-translate-y-1">
                      
                      <div className={`flex items-start gap-4 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                        <div className="flex-shrink-0 w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-md group-hover:bg-blue-900 transition-colors">
                          {getIcon(idx)}
                        </div>
                        <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                          <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight mb-1">{entry.title}</h3>
                          <p className="text-blue-700 font-semibold text-xs md:text-sm">{entry.subtitle}</p>
                        </div>
                      </div>

                      <p className={`text-slate-600 text-sm leading-relaxed mb-6 ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                        {entry.description}
                      </p>

                      {entry.highlights && (
                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                          {entry.highlights.map((item, hIdx) => (
                            <span key={hIdx} className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 border border-slate-100 px-2 py-1 rounded transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                              {item}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Desktop Period Badge Overlay - Corrigido o alinhamento central */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? 'left-[-125px] lg:left-[-145px]' : 'right-[-125px] lg:right-[-145px]'} w-24 text-center z-10`}>
                        <span className="text-slate-900 font-bold text-[11px] uppercase tracking-widest bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                           {entry.period}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Marcador de 'Início' na base */}
          <div className="mt-16 text-center relative z-20">
             <div className="inline-flex items-center space-x-2 px-6 py-2 bg-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-sm">
                <span>Início da Trajetória</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
