import React from 'react';
import { PhoneIcon, DocumentTextIcon } from './Icons';
import { PageType } from '../types';

interface ContactProps {
  onNavigate?: (page: PageType) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <section id="contato" className="py-20 bg-brand-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-lightest-slate sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-xl text-brand-light-slate">
            Estamos prontos para ajudar sua empresa a alcançar a excelência operacional
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-brand-slate p-8 rounded-lg">
            <div className="flex items-center">
              <PhoneIcon className="h-8 w-8 text-brand-yellow" />
              <h3 className="ml-3 text-2xl font-bold text-brand-lightest-slate">Fale Conosco</h3>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-brand-light-slate font-semibold">Telefone:</p>
                <p className="text-brand-lightest-slate">(11) 99999-9999</p>
              </div>
              <div>
                <p className="text-brand-light-slate font-semibold">Email:</p>
                <p className="text-brand-lightest-slate">contato@retubar.com.br</p>
              </div>
              <div>
                <p className="text-brand-light-slate font-semibold">Horário de Atendimento:</p>
                <p className="text-brand-lightest-slate">Segunda a Sexta: 8h às 18h</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-slate p-8 rounded-lg">
            <div className="flex items-center">
              <DocumentTextIcon className="h-8 w-8 text-brand-yellow" />
              <h3 className="text-2xl font-bold text-brand-lightest-slate">Para Parcerias Estratégicas</h3>
            </div>
            <p className="mt-2 text-brand-light-slate">Solicite uma análise completa para sua planta.</p>
            <button 
              onClick={() => onNavigate?.('contato')}
              className="mt-6 inline-block bg-brand-yellow text-brand-dark-blue font-bold py-3 px-8 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Diagnóstico Técnico Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;