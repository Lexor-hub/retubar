import React from 'react';
import { Cog8ToothIcon, ShieldCheckIcon, DocumentTextIcon } from './Icons';

const differentiatorsData = [
  {
    icon: <Cog8ToothIcon className="w-10 h-10 text-brand-yellow" />,
    title: "CAPACIDADE OPERACIONAL ÚNICA",
    points: [
      "20.000 tubos/mês de capacidade de manutenção",
      "Cobertura nacional com mobilização rápida",
      "Estoque estratégico para emergências industriais",
    ],
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-brand-yellow" />,
    title: "EXCELÊNCIA TÉCNICA CERTIFICADA",
    points: [
      "ISO 9001 + conformidade ASME e PETROBRAS",
      "Quase duas décadas de casos complexos resolvidos",
      "18 meses de garantia em todos os serviços",
    ],
  },
  {
    icon: <DocumentTextIcon className="w-10 h-10 text-brand-yellow" />,
    title: "PROCESSOS TRANSPARENTES",
    points: [
      "Orçamento técnico remoto em tempo recorde",
      "Acompanhamento presencial na fábrica",
      "Cronogramas detalhados com reports regulares",
    ],
  },
];

const Differentiators: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-medium-blue pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Por que Líderes Industriais Nos Escolhem</h2>
          <p className="mt-2 text-brand-light-slate max-w-2xl mx-auto">Nossa abordagem combina capacidade incomparável, expertise certificada e transparência total.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiatorsData.map((item, index) => (
            <div key={index} className="bg-brand-dark-blue p-8 rounded-lg border border-brand-slate/50 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-bold text-brand-lightest-slate">{item.title}</h3>
              </div>
              <ul className="space-y-3 text-brand-light-slate">
                {item.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-yellow mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="relative block w-full h-[100px]">
              <path d="M0,50 C240,90 480,90 720,50 C960,10 1200,10 1440,50 L1440,100 L0,100 Z" fill="#0A192F"></path>
          </svg>
      </div>
    </section>
  );
};

export default Differentiators;