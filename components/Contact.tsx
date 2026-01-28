
import React from 'react';
import { generateResumePDF } from '../utils/pdfGenerator';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-12 lg:p-16 flex-1">
            <h2 className="text-3xl font-bold text-white mb-8">Vamos colaborar?</h2>
            <p className="text-slate-400 mb-12 text-lg">
              Estou aberto a parcerias, cooperação técnica e consultoria em projetos GovTech e impacto social.
            </p>
            
            <div className="space-y-8 mb-12">
              <a 
                href="https://wa.me/5581995078087" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com Jailton Raniere no WhatsApp: (81) 99507-8087"
                className="flex items-center group focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg p-1 w-fit"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-green-500 transition-colors" aria-hidden="true">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.161 1.417 4.793 1.417 5.375 0 9.75-4.374 9.753-9.75.002-2.592-1.01-5.031-2.852-6.874-1.842-1.842-4.281-2.854-6.872-2.855-5.375 0-9.75 4.374-9.753 9.75-.001 1.732.478 3.418 1.383 4.885l-1.042 3.804 3.893-1.02zm11.751-6.82c-.313-.156-1.853-.914-2.139-1.017-.286-.103-.494-.156-.701.156-.207.312-.804 1.017-1.011 1.25-.207.234-.415.26-.728.104-.313-.156-1.32-.486-2.515-1.551-.93-.83-1.557-1.855-1.739-2.167-.182-.313-.019-.482.137-.638.14-.14.313-.365.469-.547.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.547-.078-.156-.701-1.691-.96-2.316-.252-.61-.512-.527-.701-.537-.182-.009-.39-.01-.597-.01-.208 0-.546.078-.832.39-.286.312-1.091 1.067-1.091 2.603 0 1.536 1.117 3.019 1.273 3.227.156.208 2.197 3.355 5.322 4.704.743.321 1.323.513 1.774.657.746.237 1.424.204 1.96.124.597-.089 1.853-.758 2.113-1.485.26-.728.26-1.353.182-1.485-.077-.13-.286-.208-.598-.364z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl text-white font-medium">(81) 99507-8087</span>
                  <span className="text-xs text-green-500 font-bold uppercase tracking-widest">WhatsApp</span>
                </div>
              </a>

              <a 
                href="mailto:jailtonraniere@gmail.com" 
                aria-label="Enviar e-mail para jailtonraniere@gmail.com"
                className="flex items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 w-fit"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-blue-500 transition-colors" aria-hidden="true">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <span className="text-xl text-white font-medium">jailtonraniere@gmail.com</span>
              </a>

              <a 
                href="https://linkedin.com/in/jailton-raniere-a14240b5/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Perfil do LinkedIn de Jailton Raniere (abre em nova aba)"
                className="flex items-center group focus:outline-none focus:ring-2 focus:ring-slate-100 rounded-lg p-1 w-fit"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors" aria-hidden="true">
                  <svg className="w-6 h-6 fill-current text-white group-hover:text-slate-900" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-xl text-white font-medium">LinkedIn</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10">
              <button 
                onClick={generateResumePDF}
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded hover:bg-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Gerar e baixar currículo profissional completo de Jailton Raniere em PDF"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar Perfil Institucional (PDF)
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-1/3 bg-slate-800 relative" aria-hidden="true">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
