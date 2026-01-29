
import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ActionAreas from './components/ActionAreas';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Competencies from './components/Competencies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PROJECTS as DEFAULT_PROJECTS, TIMELINE_ENTRIES as DEFAULT_TIMELINE, EDUCATION as DEFAULT_EDUCATION, AREAS as DEFAULT_AREAS, COMPETENCIES as DEFAULT_COMPETENCIES } from './constants';

const PHOTO_STORAGE_KEY = 'jailton_profile_image_v3';
const DATA_STORAGE_KEY = 'jailton_portfolio_data_v1';
const ADMIN_STORAGE_KEY = 'jailton_is_admin';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
  });

  const [showLogin, setShowLogin] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState(false);

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(DATA_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
    return {
      name: "Jailton Raniere",
      title: "Especialista em Transformação Digital e Inovação Pública com foco em impacto social.",
      bio: {
        p1: "Profissional com formação sólida em Serviço Social e atuação estratégica no setor público, unindo décadas de experiência em políticas públicas com a fronteira da Transformação Digital.",
        p2: "Sua carreira é definida pela capacidade de projetar soluções que integram tecnologia e sensibilidade humana, modernizando o atendimento ao cidadão e otimizando a eficiência governamental através de dados e inovação social.",
        quote: "Minha missão é democratizar a eficiência do Estado, garantindo que a tecnologia sirva como ponte para o acesso universal a direitos fundamentais."
      },
      projects: DEFAULT_PROJECTS,
      timeline: DEFAULT_TIMELINE,
      education: DEFAULT_EDUCATION,
      areas: DEFAULT_AREAS,
      competencies: DEFAULT_COMPETENCIES
    };
  });

  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem(PHOTO_STORAGE_KEY) || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
  });

  // Keyboard shortcut: Shift + Alt + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.altKey && e.key.toLowerCase() === 'a') {
        setShowLogin(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const toggleAdmin = useCallback((status: boolean) => {
    setIsAdmin(status);
    localStorage.setItem(ADMIN_STORAGE_KEY, status.toString());
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "admin123") {
      toggleAdmin(true);
      setShowLogin(false);
      setPasswordInput("");
      setLoginError(false);
    } else {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 2000);
    }
  };

  const updateData = (path: string, value: any) => {
    setData((prev: any) => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleImageUpload = useCallback((newImage: string) => {
    setProfileImage(newImage);
    localStorage.setItem(PHOTO_STORAGE_KEY, newImage);
  }, []);

  return (
    <div className={`min-h-screen selection:bg-blue-100 selection:text-blue-900 scroll-smooth bg-white ${isAdmin ? 'admin-active' : ''}`}>
      <Navbar isAdmin={isAdmin} />
      
      <main id="main-content">
        <Hero 
          isAdmin={isAdmin}
          profileImage={profileImage} 
          onImageUpload={handleImageUpload}
          name={data.name}
          title={data.title}
          onUpdate={(val: string) => updateData('title', val)}
          onNameUpdate={(val: string) => updateData('name', val)}
        />
        <About 
          isAdmin={isAdmin}
          profileImage={profileImage} 
          bio={data.bio}
          onUpdate={(path: string, val: string) => updateData(`bio.${path}`, val)}
        />
        <ActionAreas 
          isAdmin={isAdmin}
          areas={data.areas}
          onUpdate={(newAreas: string[]) => updateData('areas', newAreas)}
        />
        <Timeline 
          isAdmin={isAdmin}
          entries={data.timeline}
          onUpdate={(newEntries: any[]) => updateData('timeline', newEntries)}
        />
        <Projects 
          isAdmin={isAdmin}
          projects={data.projects}
          onUpdate={(newProjects: any[]) => updateData('projects', newProjects)}
        />
        <Experience />
        <Education 
          isAdmin={isAdmin}
          education={data.education}
          onUpdate={(newEdu: any[]) => updateData('education', newEdu)}
        />
        <Competencies 
          isAdmin={isAdmin}
          competencies={data.competencies}
          onUpdate={(newComp: string[]) => updateData('competencies', newComp)}
        />
        <Contact />
      </main>
      
      <Footer 
        onOpenLogin={() => setShowLogin(true)} 
        onLogout={() => toggleAdmin(false)}
        isAdmin={isAdmin} 
      />

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden p-8 border border-slate-100 animate-in zoom-in-95 duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Acesso Restrito</h2>
              <p className="text-slate-500 text-sm mt-2">Insira sua senha administrativa</p>
            </div>
            
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <input 
                  autoFocus
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Senha"
                  className={`w-full px-5 py-4 bg-slate-50 border rounded-xl outline-none transition-all ${loginError ? 'border-red-500 ring-4 ring-red-50' : 'border-slate-100 focus:border-blue-900 focus:ring-4 focus:ring-blue-50'}`}
                />
                {loginError && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-2 text-center">Senha incorreta</p>}
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
              >
                Acessar Painel
              </button>
              
              <button 
                type="button"
                onClick={() => setShowLogin(false)}
                className="w-full py-3 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-600 transition-colors"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}

      {isAdmin && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] pointer-events-none">
          <div className="bg-blue-900 text-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-6 pointer-events-auto border-4 border-white">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Status</span>
              <span className="text-xs font-medium">Modo Edição Ativo</span>
            </div>
            <div className="h-6 w-px bg-white/20"></div>
            <button 
              onClick={() => toggleAdmin(false)}
              className="bg-white text-blue-900 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all"
            >
              Publicar / Sair
            </button>
          </div>
        </div>
      )}

      <style>{`
        .admin-active [contenteditable="true"] {
          outline: none;
          min-width: 20px;
          display: inline-block;
          transition: all 0.2s;
        }
        .admin-active [contenteditable="true"]:hover {
          background: rgba(59, 130, 246, 0.05);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
          border-radius: 4px;
        }
        .admin-active [contenteditable="true"]:focus {
          background: rgba(59, 130, 246, 0.1);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default App;
