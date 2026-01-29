
import React from 'react';
import { generateResumePDF } from '../utils/pdfGenerator';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-white scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative group">
          {/* Section Decoration */}
          <div className="absolute -bottom-16 -right-16 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none">
            REACH
          </div>
          
          <div className="p-10 lg:p-20 lg:p-24 flex-1 relative z-10">
            <div className="mb-12 lg:mb-16">
              <span className="text-green-500 font-bold uppercase tracking-[0.6em] text-[10px] lg:text-[11px] block mb-4 lg:mb-6">Vamos conversar?</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Contato</h2>
              <div className="w-16 h-2 bg-blue-500 mt-6 lg:mt-8 rounded-full transition-all group-hover:w-32 duration-700"></div>
            </div>
            
            <p className="text-slate-400 mb-12 lg:mb-16 text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
              Estou aberto a parcerias, cooperação técnica e consultoria estratégica em projetos de <span className="text-white font-medium underline underline-offset-8 decoration-blue-500/30">Inovação Social</span> e transformação digital.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-16 lg:mb-20">
              <a 
                href="https://wa.me/5581995078087" 
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center space-x-6 lg:space-x-8 focus:outline-none"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center group-hover/link:bg-green-500 group-hover/link:scale-110 transition-all duration-300">
                  <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.161 1.417 4.793 1.417 5.375 0 9.75-4.374 9.753-9.75.002-2.592-1.01-5.031-2.852-6.874-1.842-1.842-4.281-2.854-6.872-2.855-5.375 0-9.75 4.374-9.753 9.75-.001 1.732.478 3.418 1.383 4.885l-1.042 3.804 3.893-1.02zm11.751-6.82c-.313-.156-1.853-.914-2.139-1.017-.286-.103-.494-.156-.701.156-.207.312-.804 1.017-1.011 1.25-.207.234-.415.26-.728.104-.313-.156-1.32-.486-2.515-1.551-.93-.83-1.557-1.855-1.739-2.167-.182-.313-.019-.482.137-.638.14-.14.313-.365.469-.547.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.547-.078-.156-.701-1.691-.96-2.316-.252-.61-.512-.527-.701-.537-.182-.009-.39-.01-.597-.01-.208 0-.546.078-.832.39-.286.312-1.091 1.067-1.091 2.603 0 1.536 1.117 3.019 1.273 3.227.156.208 2.197 3.355 5.322 4.704.743.321 1.323.513 1.774.657.746.237 1.424.204 1.96.124.597-.089 1.853-.758 2.113-1.485.26-.728.26-1.353.182-1.485-.077-.13-.286-.208-.598-.364z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl text-white font-bold group-hover/link:text-green-500 transition-colors tracking-tight">(81) 99507-8087</span>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-2">WhatsApp Business</span>
                </div>
              </a>

              <a 
                href="mailto:jailtonraniere@gmail.com" 
                className="group/link flex items-center space-x-6 lg:space-x-8 focus:outline-none"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center group-hover/link:bg-blue-500 group-hover/link:scale-110 transition-all duration-300">
                  <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl text-white font-bold group-hover/link:text-blue-500 transition-colors tracking-tight">jailtonraniere@gmail.com</span>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-2">E-mail Institucional</span>
                </div>
              </a>
            </div>

            <div className="pt-12 lg:pt-16 border-t border-white/5">
              <button 
                onClick={generateResumePDF}
                className="inline-flex items-center px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-50 hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-white/5 uppercase tracking-[0.2em] text-xs"
              >
                <svg className="w-5 h-5 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar Perfil Institucional
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block w-1/4 bg-slate-800 relative overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,#3b82f6_0%,transparent_60%)]"></div>
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_80%,#10b981_0%,transparent_60%)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
