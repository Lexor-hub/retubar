import React from 'react';
import { PhoneIcon, DocumentTextIcon, GlobeAltIcon, ShieldCheckIcon } from '../components/Icons';

const contactInfo = [
  {
    icon: <PhoneIcon className="w-8 h-8 text-brand-yellow" />,
    title: "Emergências 24h",
    info: "(11) 3090-9775",
    description: "Atendimento imediato para situações críticas",
    action: "tel:1130909775"
  },
  {
    icon: <DocumentTextIcon className="w-8 h-8 text-brand-yellow" />,
    title: "Orçamentos e Projetos",
    info: "contato@retubar.com.br",
    description: "Solicite análise técnica completa",
    action: "mailto:contato@retubar.com.br"
  },
  {
    icon: <GlobeAltIcon className="w-8 h-8 text-brand-yellow" />,
    title: "Sede Administrativa",
    info: "São Paulo - SP",
    description: "Cobertura nacional com mobilização rápida",
    action: null
  }
];

const serviceAreas = [
  "São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo",
  "Paraná", "Santa Catarina", "Rio Grande do Sul", "Bahia",
  "Pernambuco", "Ceará", "Goiás", "Mato Grosso"
];

const ContatoPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-brand-dark-blue py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-brand-lightest-slate">
            FALE <span className="text-brand-yellow">CONOSCO</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-brand-light-slate">
            Estamos prontos para resolver seu desafio industrial. Entre em contato e descubra 
            como podemos otimizar a performance dos seus equipamentos.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-brand-medium-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Como Podemos Ajudar</h2>
            <div className="mt-3 h-1 w-24 bg-brand-yellow mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-brand-dark-blue p-8 rounded-lg border border-brand-slate/50 shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">{contact.title}</h3>
                <p className="text-brand-light-slate mb-4">{contact.description}</p>
                {contact.action ? (
                  <a
                    href={contact.action}
                    className="text-2xl font-bold text-brand-yellow hover:text-amber-300 transition-colors block"
                  >
                    {contact.info}
                  </a>
                ) : (
                  <span className="text-xl font-semibold text-brand-lightest-slate">{contact.info}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Solicite seu Diagnóstico Técnico</h2>
              <p className="mt-2 text-brand-light-slate">Preencha o formulário e receba uma análise detalhada</p>
            </div>
            <div className="bg-brand-medium-blue p-8 rounded-lg border border-brand-slate/50 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-lightest-slate font-semibold mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-brand-dark-blue border border-brand-slate/50 rounded-lg text-brand-lightest-slate focus:border-brand-yellow focus:outline-none"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-lightest-slate font-semibold mb-2">Empresa *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-brand-dark-blue border border-brand-slate/50 rounded-lg text-brand-lightest-slate focus:border-brand-yellow focus:outline-none"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-lightest-slate font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-brand-dark-blue border border-brand-slate/50 rounded-lg text-brand-lightest-slate focus:border-brand-yellow focus:outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-lightest-slate font-semibold mb-2">Telefone *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-brand-dark-blue border border-brand-slate/50 rounded-lg text-brand-lightest-slate focus:border-brand-yellow focus:outline-none"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-brand-lightest-slate font-semibold mb-2">Tipo de Equipamento</label>
                  <select className="w-full px-4 py-3 bg-brand-dark-blue border border-brand-slate/50 rounded-lg text-brand-lightest-slate focus:border-brand-yellow focus:outline-none">
                    <option value="">Selecione o tipo</option>
                    <option value="trocador-casco-tubo">Trocador Casco e Tubo</option>
                    <option value="air-cooler">Air Cooler</option>
                    <option value="feixe-tubular">Feixe Tubular</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brand-lightest-slate font-semibold mb-2">Descrição do Problema/Projeto *</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-brand-dark-blue border border-brand-slate/50 rounded-lg text-brand-lightest-slate focus:border-brand-yellow focus:outline-none resize-none"
                    placeholder="Descreva detalhadamente sua necessidade, incluindo sintomas, urgência e especificações técnicas..."
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="urgente"
                    className="w-4 h-4 text-brand-yellow bg-brand-dark-blue border-brand-slate/50 rounded focus:ring-brand-yellow"
                  />
                  <label htmlFor="urgente" className="ml-2 text-brand-light-slate">
                    Este é um caso de emergência (equipamento parado)
                  </label>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-brand-yellow text-brand-dark-blue font-bold py-4 px-12 rounded-lg hover:bg-amber-300 transition-colors transform hover:scale-105"
                  >
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-brand-medium-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Cobertura Nacional</h2>
            <p className="mt-2 text-brand-light-slate">Atendemos em todo o território brasileiro</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-dark-blue p-8 rounded-lg border border-brand-slate/50 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <ShieldCheckIcon className="w-5 h-5 text-brand-yellow mr-2 flex-shrink-0" />
                    <span className="text-brand-lightest-slate">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-red-900/50 to-brand-medium-blue p-8 rounded-lg border-2 border-red-500/50">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate mb-4">
              🚨 EMERGÊNCIA INDUSTRIAL?
            </h2>
            <p className="text-lg text-brand-light-slate mb-6">
              Equipamento parado? Não espere! Nossa equipe de emergência está disponível 24 horas.
            </p>
            <a
              href="tel:1130909775"
              className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors text-xl animate-pulse"
            >
              LIGAR AGORA: (11) 3090-9775
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;