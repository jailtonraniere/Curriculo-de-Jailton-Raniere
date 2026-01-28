
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="flex flex-col h-full bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      {project.imageUrl && (
        <div className="h-48 overflow-hidden bg-slate-100">
          <img 
            src={project.imageUrl} 
            alt={`Representação visual do projeto ${project.name}`}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
          <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-blue-50 text-blue-800 rounded">
            Projeto
          </span>
        </div>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="space-y-3 mt-auto border-t border-slate-100 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-slate-500">Área de Impacto</span>
            <span className="text-xs text-slate-800 font-medium">{project.impactArea}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-slate-500">Tipo de Solução</span>
            <span className="text-xs text-slate-800 font-medium">{project.solutionType}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
