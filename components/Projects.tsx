
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  isAdmin: boolean;
  projects: Project[];
  onUpdate: (newProjects: Project[]) => void;
}

const Projects: React.FC<ProjectsProps> = ({ isAdmin, projects, onUpdate }) => {
  const handleUpdateProject = (id: string, field: keyof Project, value: string) => {
    const newProjects = projects.map(p => p.id === id ? { ...p, [field]: value } : p);
    onUpdate(newProjects);
  };

  return (
    <section id="projetos" className="py-32 bg-white scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 text-[25vw] font-black text-slate-50 select-none pointer-events-none uppercase tracking-tighter">
        IMPACT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24">
          <div className="relative inline-block">
             <span className="text-blue-900 font-bold uppercase tracking-[0.5em] text-[10px] block mb-3">Portfolio Digital</span>
             <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Projetos</h2>
             <div className="w-20 h-2 bg-green-700 mt-6 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isAdmin={isAdmin}
              onUpdate={(field, val) => handleUpdateProject(project.id, field, val)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
