
import React from 'react';
import { generateResumePDF } from '../utils/pdfGenerator';

interface AboutProps {
  isAdmin: boolean;
  profileImage: string;
  bio: {
    p1: string;
    p2: string;
    quote: string;
  };
  onUpdate: (path: string, val: string) => void;
}

const About: React.FC<AboutProps> = ({ isAdmin, profileImage, bio, onUpdate }) => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="mb-12 lg:mb-16 relative">
              <span className="absolute -top-12 -left-8 text-[8rem] lg:text-[10rem] font-black text-slate-50 select-none z-0 tracking-tighter leading-none">ABOUT</span>
              <div className="relative z-10">
                <span className="text-blue-900 font-black uppercase tracking-[0.5em] text-[10px] lg:text-[11px] block mb-4 lg:mb-6">Perfil Institucional</span>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tighter">A Jornada de Jailton</h2>
                <div className="w-20 h-2 bg-green-700 mt-6 lg:mt-8 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-8 lg:space-y-10 text-lg lg:text-xl text-slate-600 leading-relaxed font-light">
              <p 
                contentEditable={isAdmin} 
                onBlur={(e) => onUpdate('p1', e.currentTarget.innerText)}
                suppressContentEditableWarning
              >
                {bio.p1}
              </p>
              <p 
                contentEditable={isAdmin} 
                onBlur={(e) => onUpdate('p2', e.currentTarget.innerText)}
                suppressContentEditableWarning
              >
                {bio.p2}
              </p>
              <div className="p-10 lg:p-14 bg-slate-50 rounded-[3rem] border-l-8 border-blue-900 italic text-slate-500 shadow-sm relative mt-10">
                <span className="absolute top-6 left-6 text-6xl text-blue-900/10 font-serif">"</span>
                <span 
                  className="relative z-10 block"
                  contentEditable={isAdmin} 
                  onBlur={(e) => onUpdate('quote', e.currentTarget.innerText)}
                  suppressContentEditableWarning
                >{bio.quote}</span>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-16">
              <button 
                onClick={generateResumePDF}
                className="group relative inline-flex items-center px-10 py-5 bg-slate-900 text-white font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-900/30 uppercase tracking-[0.2em] text-xs"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg className="w-5 h-5 mr-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10">Baixar Perfil Completo (PDF)</span>
              </button>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-blue-900/5 rounded-[4rem] lg:rounded-[5rem] -rotate-3 scale-105" aria-hidden="true"></div>
            <div className="relative bg-white p-12 md:p-16 lg:p-24 rounded-[4rem] lg:rounded-[5rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                <div className="group">
                  <h3 className="font-black text-blue-900 mb-4 uppercase text-[10px] lg:text-[11px] tracking-[0.3em]">Visão</h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">Governança digital inclusiva e focada na excelência absoluta do serviço ao cidadão.</p>
                </div>
                <div className="group">
                  <h3 className="font-black text-green-700 mb-4 uppercase text-[10px] lg:text-[11px] tracking-[0.3em]">Missão</h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">Transformar a arquitetura social através da inovação disruptiva e integridade técnica.</p>
                </div>
                <div className="group">
                  <h3 className="font-black text-slate-400 mb-4 uppercase text-[10px] lg:text-[11px] tracking-[0.3em]">Valores</h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">Ética como base, transparência radical e compromisso inegociável com a equidade.</p>
                </div>
                <div className="group">
                  <h3 className="font-black text-blue-400 mb-4 uppercase text-[10px] lg:text-[11px] tracking-[0.3em]">Foco</h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">Impacto sistêmico mensurável e digitalização humanizada de ponta a ponta.</p>
                </div>
              </div>
              
              <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white flex-shrink-0">
                  <img src={profileImage} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="text-slate-900 text-base font-bold leading-relaxed italic font-serif text-center sm:text-left">
                  "Onde a tecnologia encontra o propósito social, nasce a verdadeira mudança."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
