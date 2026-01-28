
import React, { useState } from 'react';
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

// Foto profissional de Jailton Raniere (URL fixa conforme solicitado)
const DEFAULT_PHOTO = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
const STORAGE_KEY = 'jailton_profile_image_v2';

const App: React.FC = () => {
  // Mantemos o estado apenas para leitura, removendo a lógica de alteração para fixar a imagem institucional
  const [profileImage] = useState<string>(() => {
    try {
      // Prioriza o que já estiver salvo, caso contrário usa a nova padrão
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_PHOTO;
    } catch (e) {
      return DEFAULT_PHOTO;
    }
  });

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-blue-900 focus:text-white focus:px-4 focus:py-2 focus:top-4 focus:left-4 rounded shadow-lg transition-all outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero profileImage={profileImage} />
        <About profileImage={profileImage} />
        <ActionAreas />
        <Timeline />
        <Projects />
        <Experience />
        <Education />
        <Competencies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
