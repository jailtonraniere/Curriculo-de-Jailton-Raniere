
import React, { useRef } from 'react';

interface HeroProps {
  isAdmin: boolean;
  profileImage: string;
  onImageUpload?: (image: string) => void;
  name: string;
  title: string;
  onUpdate: (val: string) => void;
  onNameUpdate: (val: string) => void;
}

const Hero: React.FC<HeroProps> = ({ isAdmin, profileImage, onImageUpload, name, title, onUpdate, onNameUpdate }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resizeAndCompress = (base64Str: string) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800; 
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        const MAX_HEIGHT = 1000;
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
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
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
    if (isAdmin) fileInputRef.current?.click();
  };

  return (
    <section className="relative min-h-[80vh] flex items-center pt-28 pb-16 lg:pt-40 lg:pb-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/[0.03] -skew-x-12 transform origin-top-right" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-800/[0.03] rounded-full blur-3xl -translate-x-1/2" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[0.95] mb-8 lg:mb-12 tracking-tighter">
              <span 
                contentEditable={isAdmin}
                onBlur={(e) => onNameUpdate(e.currentTarget.innerText)}
                suppressContentEditableWarning
              >{name.split(' ')[0]}</span> <br />
              <span 
                className="text-blue-900"
                contentEditable={isAdmin}
                onBlur={(e) => onNameUpdate(name.split(' ')[0] + ' ' + e.currentTarget.innerText)}
                suppressContentEditableWarning
              >{name.split(' ')[1] || ''}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light mb-12 lg:mb-16 max-w-lg leading-relaxed">
              <span 
                contentEditable={isAdmin}
                onBlur={(e) => onUpdate(e.currentTarget.innerText)}
                suppressContentEditableWarning
              >{title}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 lg:gap-8">
              <a href="#atuacao" className="group relative px-10 py-5 lg:px-12 lg:py-6 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-slate-900/20 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Explorar Atuação</span>
              </a>
              <a href="#contato" className="px-10 py-5 lg:px-12 lg:py-6 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all text-center shadow-sm">
                Falar com Jailton
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
            <div className={`relative w-full max-w-[340px] lg:max-w-md aspect-[4/5] group ${isAdmin ? 'cursor-pointer' : ''}`} onClick={triggerUpload}>
              <div className="absolute -top-6 -right-6 w-full h-full bg-green-700/5 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" aria-hidden="true"></div>
              
              <div className="relative w-full h-full overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-slate-200 border-8 border-white">
                <img src={profileImage} alt="Jailton Raniere" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                
                {isAdmin && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-[2px]">
                    <div className="p-5 bg-white rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                      <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                )}

                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
