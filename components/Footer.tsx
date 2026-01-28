
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-400 text-sm mb-2">
          © {new Date().getFullYear()} Jailton Raniere. Todos os direitos reservados.
        </p>
        <p className="text-slate-300 text-[10px] uppercase tracking-widest font-bold">
          Tecnologia | Impacto | Cidadania
        </p>
      </div>
    </footer>
  );
};

export default Footer;
