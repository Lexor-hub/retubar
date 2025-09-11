import React from 'react';
import { PhoneIcon, DocumentTextIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark-blue flex-grow flex items-center justify-center">
      <div className="container mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Contato Estratégico</h2>
          <p className="mt-2 text-brand-light-slate">Estamos prontos para resolver seu desafio.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-medium-blue p-8 rounded-lg border-2 border-brand-yellow/80 text-center shadow-2xl flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              <PhoneIcon className="w-10 h-10 text-brand-yellow" />
            </div>
            <h3 className="text-2xl font-bold text-brand-lightest-slate">Para Emergências Industriais</h3>
            <p className="mt-2 text-brand-light-slate">Linha Direta para atendimento imediato.</p>
            <a href="tel:1130909775" className="mt-6 inline-block text-3xl font-bold text-brand-yellow tracking-wider hover:text-amber-300 transition-colors">
              (11) 3090-9775
            </a>
          </div>
          <div className="bg-brand-medium-blue p-8 rounded-lg border border-brand-slate/50 text-center shadow-lg flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              <DocumentTextIcon className="w-10 h-10 text-brand-light-slate" />
            </div>
            <h3 className="text-2xl font-bold text-brand-lightest-slate">Para Parcerias Estratégicas</h3>
            <p className="mt-2 text-brand-light-slate">Solicite uma análise completa para sua planta.</p>
            <a href="mailto:contato@retubar.com.br" className="mt-6 inline-block bg-brand-yellow text-brand-dark-blue font-bold py-3 px-8 rounded-lg hover:bg-amber-300 transition-colors">
              Diagnóstico Técnico Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;