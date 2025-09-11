import React from 'react';
import { BeakerIcon, DocumentChartBarIcon } from './Icons';

const segmentsData = [
  {
    icon: <BeakerIcon className="w-16 h-16 text-brand-yellow" />,
    title: "PETROQUÍMICA",
    description: "Padrões internacionais para processos críticos",
    points: ["Conformidade com normas PETROBRAS", "Zero tolerância a falhas"],
  },
  {
    icon: <DocumentChartBarIcon className="w-16 h-16 text-brand-yellow" />,
    title: "PAPEL & CELULOSE",
    description: "Eficiência térmica para processos contínuos",
    points: ["Otimização de trocadores específicos", "Sustentabilidade dos processos"],
  },
];

const Segments: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-medium-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Experiência nos Setores Mais Exigentes</h2>
          <div className="mt-3 h-1 w-24 bg-brand-yellow mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {segmentsData.map((segment, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-brand-dark-blue p-8 rounded-lg border border-brand-slate/50 shadow-lg">
              <div className="mb-4">{segment.icon}</div>
              <h3 className="text-2xl font-bold text-brand-lightest-slate">{segment.title}</h3>
              <p className="mt-2 text-brand-light-slate">{segment.description}</p>
              <div className="mt-4 border-t border-brand-slate/50 w-1/4"></div>
              <ul className="mt-4 space-y-2 text-brand-lightest-slate">
                {segment.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;