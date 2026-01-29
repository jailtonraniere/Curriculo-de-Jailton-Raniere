
import React from 'react';

interface FooterProps {
  isAdmin: boolean;
  onOpenLogin: () => void;
  onLogout: () => void;
}

const Footer: React.FC<FooterProps> = ({ isAdmin, onOpenLogin, onLogout }) => {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white text-center relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-400 text-sm mb-2">
          © {new Date().getFullYear()} Jailton Raniere. Todos os direitos reservados.
        </p>
        <p className="text-slate-300 text-[10px] uppercase tracking-widest font-bold mb-8">
          Tecnologia | Impacto | Cidadania
        </p>
        
        <button 
          onClick={isAdmin ? onLogout : onOpenLogin}
          className="inline-flex items-center space-x-2 text-slate-300 hover:text-blue-600 transition-colors duration-300 group"
        >
          <svg className={`w-4 h-4 ${isAdmin ? 'text-blue-600' : 'text-slate-200 group-hover:text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/>
          </svg>
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold">
            {isAdmin ? 'Sair do Painel' : 'Acesso Restrito'}
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
