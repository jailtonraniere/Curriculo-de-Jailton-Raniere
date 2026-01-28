
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Formação Acadêmica</h2>
            <p className="text-slate-600">
              Aprimoramento contínuo em ciência de dados e gestão de inovação para embasar decisões estratégicas no setor público.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="flex flex-col pb-8 border-b border-slate-100 last:border-0">
                <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                <div className="flex items-center text-blue-900 font-medium mt-1">
                  <span>{edu.institution}</span>
                </div>
                {edu.details && (
                  <p className="text-slate-500 text-sm mt-2">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
