import React from 'react';
import { RocketLaunchIcon, BoltIcon, CheckBadgeIcon, SparklesIcon } from './Icons';

const resultsData = [
  {
    icon: <RocketLaunchIcon className="w-12 h-12 text-brand-yellow" />,
    value: "20.000 TUBOS/MÊS",
    description: "Capacidade que garante seus prazos mais apertados",
  },
  {
    icon: <BoltIcon className="w-12 h-12 text-brand-yellow" />,
    value: "25 DIAS DE EXECUÇÃO",
    description: "Equipamento complexo parado há 70 dias retornou à operação em 25 dias",
  },
  {
    icon: <SparklesIcon className="w-12 h-12 text-brand-yellow" />,
    value: "12.000 TUBOS EM 17 DIAS",
    description: "Recorde de produtividade quando a urgência é máxima",
  },
  {
    icon: <CheckBadgeIcon className="w-12 h-12 text-brand-yellow" />,
    value: "100% EFICIÊNCIA",
    description: "Clientes confirmam: equipamentos mais eficientes após nosso serviço",
  },
];

const Results: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-dark-blue pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Números que Falam por Si</h2>
          <div className="mt-3 h-1 w-24 bg-brand-yellow mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resultsData.map((item, index) => (
            <div key={index} className="bg-brand-medium-blue p-8 rounded-lg text-center border border-brand-slate/50 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-2xl font-black text-brand-yellow">{item.value}</p>
              <p className="mt-2 text-brand-light-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="relative block w-full h-[100px]">
              <path d="M0,50 C240,90 480,90 720,50 C960,10 1200,10 1440,50 L1440,100 L0,100 Z" fill="#172A46"></path>
          </svg>
      </div>
    </section>
  );
};

export default Results;