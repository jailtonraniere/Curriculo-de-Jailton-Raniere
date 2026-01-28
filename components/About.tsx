
import React from 'react';
import { generateResumePDF } from '../utils/pdfGenerator';

interface AboutProps {
  profileImage: string;
}

const About: React.FC<AboutProps> = ({ profileImage }) => {
  return (
    <section id="sobre" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm md:hidden">
                <img 
                  src={profileImage} 
                  alt="" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 relative">
                Perfil Profissional
                <span className="block w-12 h-1 bg-green-700 mt-2" aria-hidden="true"></span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Profissional com formação em Serviço Social e atuação sólida no setor público, acumulando vasta experiência em políticas públicas, transformação digital e inovação social.
              </p>
              <p>
                Minha trajetória é marcada pela gestão de projetos estratégicos que unem tecnologia e humanização. Atuo no desenvolvimento de soluções digitais, integração de dados e modernização de serviços públicos, sempre com o objetivo central de fortalecer políticas sociais.
              </p>
              <p>
                Acredito que a tecnologia deve ser um meio para garantir transparência, eficiência e, acima de tudo, o acesso a direitos fundamentais de forma democrática.
              </p>
            </div>
            
            <div className="mt-10">
              <button 
                onClick={generateResumePDF}
                className="inline-flex items-center px-6 py-3 border border-blue-900 text-blue-900 font-semibold rounded hover:bg-blue-900 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                aria-label="Baixar currículo profissional de Jailton Raniere em PDF"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar Currículo (PDF)
              </button>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded shadow-sm border-t-4 border-blue-900">
                <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Visão</h3>
                <p className="text-slate-600 text-sm">Governança digital inclusiva e eficiente.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border-t-4 border-green-700">
                <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Missão</h3>
                <p className="text-slate-600 text-sm">Transformar o serviço público através da inovação social.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border-t-4 border-slate-400">
                <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Valores</h3>
                <p className="text-slate-600 text-sm">Ética profissional, transparência e equidade social.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border-t-4 border-blue-400">
                <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Foco</h3>
                <p className="text-slate-600 text-sm">Impacto social medido por dados e vidas transformadas.</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-900 rounded shadow-lg">
              <p className="text-white text-sm font-medium leading-relaxed italic">
                "Combinando ciência de dados e serviço social para criar um governo mais próximo do cidadão."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
