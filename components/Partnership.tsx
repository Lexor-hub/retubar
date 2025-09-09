import React from 'react';
import { UserGroupIcon, LightBulbIcon, PresentationChartLineIcon } from './Icons';

const partnershipBenefits = [
  {
    icon: <UserGroupIcon className="w-8 h-8 text-brand-yellow" />,
    title: "Prioridade no atendimento",
    description: "Para clientes estratégicos.",
  },
  {
    icon: <LightBulbIcon className="w-8 h-8 text-brand-yellow" />,
    title: "Consultoria técnica",
    description: "Para otimização contínua.",
  },
  {
    icon: <PresentationChartLineIcon className="w-8 h-8 text-brand-yellow" />,
    title: "Condições especiais",
    description: "Para contratos de longo prazo.",
  },
];

const Partnership: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-medium-blue pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Muito Mais que Fornecedores: Parceiros Estratégicos</h2>
          <div className="mt-3 h-1 w-24 bg-brand-yellow mx-auto mb-6"></div>
          <p className="text-lg text-brand-light-slate italic border-l-4 border-brand-yellow pl-6 py-2 text-left">
            "Construímos relacionamentos duradouros porque entendemos que sua operação industrial não para. Nossa expertise de quase duas décadas se traduz em resultados consistentes e parceria verdadeira."
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {partnershipBenefits.map((benefit, index) => (
            <div key={index} className="bg-brand-dark-blue p-6 rounded-lg border border-brand-slate/50 shadow-lg">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-brand-lightest-slate">{benefit.title}</h3>
              <p className="text-brand-light-slate">{benefit.description}</p>
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

export default Partnership;