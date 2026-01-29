
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isAdmin?: boolean;
  onUpdate?: (field: keyof Project, value: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isAdmin, onUpdate }) => {
  const handleChange = (field: keyof Project, value: string) => {
    if (onUpdate) onUpdate(field, value);
  };

  return (
    <article className="flex flex-col h-full bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      {project.imageUrl && (
        <div className="h-48 overflow-hidden bg-slate-100 relative group/img">
          <img 
            src={project.imageUrl} 
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          {isAdmin && (
            <div 
              className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center cursor-pointer transition-opacity"
              onClick={() => {
                const url = prompt("URL da imagem do projeto:", project.imageUrl);
                if (url) handleChange('imageUrl', url);
              }}
            >
              <span className="text-white text-xs font-bold uppercase tracking-widest">Alterar Imagem</span>
            </div>
          )}
        </div>
      )}
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 
            className="text-xl font-bold text-slate-900"
            contentEditable={isAdmin}
            onBlur={(e) => handleChange('name', e.currentTarget.innerText)}
            suppressContentEditableWarning
          >
            {project.name}
          </h3>
          <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-blue-50 text-blue-800 rounded">
            Projeto
          </span>
        </div>
        <p 
          className="text-slate-600 text-sm mb-6 leading-relaxed"
          contentEditable={isAdmin}
          onBlur={(e) => handleChange('description', e.currentTarget.innerText)}
          suppressContentEditableWarning
        >
          {project.description}
        </p>
        <div className="space-y-3 mt-auto border-t border-slate-100 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-slate-500">Área de Impacto</span>
            <span 
              className="text-xs text-slate-800 font-medium"
              contentEditable={isAdmin}
              onBlur={(e) => handleChange('impactArea', e.currentTarget.innerText)}
              suppressContentEditableWarning
            >
              {project.impactArea}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-slate-500">Tipo de Solução</span>
            <span 
              className="text-xs text-slate-800 font-medium"
              contentEditable={isAdmin}
              onBlur={(e) => handleChange('solutionType', e.currentTarget.innerText)}
              suppressContentEditableWarning
            >
              {project.solutionType}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
