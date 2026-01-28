
import React, { useRef } from 'react';

interface HeroProps {
  profileImage: string;
  onImageUpload?: (image: string) => void;
}

const Hero: React.FC<HeroProps> = ({ profileImage, onImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resizeAndCompress = (base64Str: string) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 1000;
      const MAX_HEIGHT = 1333; // Proporção 3:4 aproximada
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        // Comprime para JPEG com 80% de qualidade para garantir que caiba no localStorage (limite ~5MB)
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
        if (onImageUpload) onImageUpload(compressedBase64);
      }
    };
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        resizeAndCompress(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-slate-50 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/5 -skew-x-12 transform origin-top-right" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-800/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Jailton Raniere
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 font-light mb-8">
              Assistente Social | Transformação Digital | Inovação Pública
            </p>
            <div className="w-20 h-1 bg-green-700 mb-8" aria-hidden="true"></div>
            <p className="text-xl text-slate-700 leading-relaxed mb-10 border-l-4 border-slate-200 pl-6 italic">
              “Tecnologia a serviço das políticas públicas, do acesso a direitos e do impacto social.”
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projetos"
                className="px-8 py-4 bg-blue-900 text-white font-medium rounded hover:bg-blue-950 transition-all text-center shadow-lg shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                Ver Portfólio
              </a>
              <a 
                href="https://wa.me/5581995078087"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-medium rounded hover:bg-slate-50 transition-all text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Entrar em Contato
              </a>
            </div>
          </div>

          {/* Coluna da Foto */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4.5] lg:h-[650px] group">
              {/* Moldura decorativa atrás da foto */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-green-700 rounded-2xl" aria-hidden="true"></div>
              
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl bg-slate-200">
                <img 
                  src={profileImage} 
                  alt="Retrato profissional de Jailton Raniere"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Botão de Upload Discreto com Tooltip */}
                <div className="absolute bottom-4 right-4 group/tooltip">
                  <button 
                    onClick={triggerUpload}
                    className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-blue-900 z-20 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
                    aria-label="Click to change photo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                  
                  {/* Tooltip Stylized */}
                  <span className="absolute bottom-full right-0 mb-2 whitespace-nowrap px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none translate-y-1 group-hover/tooltip:translate-y-0 duration-200 z-30">
                    Click to change photo
                    <span className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-slate-900" aria-hidden="true"></span>
                  </span>
                </div>

                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                />
              </div>
              
              {/* Badge de impacto social */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Foco em</p>
                    <p className="text-sm font-bold text-slate-900">Inovação Social</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
