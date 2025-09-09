import React from 'react';
import { Cog8ToothIcon, ShieldCheckIcon, BoltIcon, CheckBadgeIcon } from '../components/Icons';

const servicesData = [
  {
    icon: <Cog8ToothIcon className="w-12 h-12 text-brand-yellow" />,
    title: "Retubagem Completa",
    description: "Substituição total de tubos com materiais de alta resistência",
    features: [
      "Análise metalúrgica completa",
      "Materiais certificados ASME",
      "Testes hidrostáticos rigorosos",
      "Garantia de 18 meses"
    ]
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-brand-yellow" />,
    title: "Manutenção Preventiva",
    description: "Programas de manutenção para evitar paradas não programadas",
    features: [
      "Inspeção por ultrassom",
      "Análise de corrosão",
      "Cronograma personalizado",
      "Relatórios técnicos detalhados"
    ]
  },
  {
    icon: <BoltIcon className="w-12 h-12 text-brand-yellow" />,
    title: "Emergências 24h",
    description: "Atendimento imediato para situações críticas",
    features: [
      "Mobilização em até 4 horas",
      "Equipe técnica especializada",
      "Estoque de emergência",
      "Soluções temporárias"
    ]
  },
  {
    icon: <CheckBadgeIcon className="w-12 h-12 text-brand-yellow" />,
    title: "Reforma de Feixes",
    description: "Recuperação completa de feixes tubulares",
    features: [
      "Desmontagem controlada",
      "Limpeza química especializada",
      "Remontagem com novos tubos",
      "Testes de performance"
    ]
  }
];

const ManutencaoPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-brand-dark-blue py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092921440-4c3030ba017a?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-brand-lightest-slate">
            SERVIÇOS DE <span className="text-brand-yellow">MANUTENÇÃO</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-brand-light-slate">
            Especialistas em manutenção de trocadores de calor com quase duas décadas de experiência. 
            Quando a parada não é opção, somos a solução.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-medium-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Nossos Serviços Especializados</h2>
            <div className="mt-3 h-1 w-24 bg-brand-yellow mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-brand-dark-blue p-8 rounded-lg border border-brand-slate/50 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-brand-lightest-slate">{service.title}</h3>
                </div>
                <p className="text-brand-light-slate mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-brand-lightest-slate">
                      <svg className="w-5 h-5 text-brand-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Processo de Manutenção</h2>
            <p className="mt-2 text-brand-light-slate">Metodologia comprovada para resultados consistentes</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Diagnóstico", desc: "Análise técnica completa" },
                { step: "2", title: "Planejamento", desc: "Cronograma detalhado" },
                { step: "3", title: "Execução", desc: "Manutenção especializada" },
                { step: "4", title: "Validação", desc: "Testes e entrega" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-yellow text-brand-dark-blue font-black text-2xl rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">{item.title}</h3>
                  <p className="text-brand-light-slate">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-medium-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate mb-6">
            Precisa de Manutenção Urgente?
          </h2>
          <p className="text-lg text-brand-light-slate mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender emergências 24 horas por dia, 7 dias por semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1130909775"
              className="bg-brand-yellow text-brand-dark-blue font-bold py-4 px-8 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Emergência: (11) 3090-9775
            </a>
            <a
              href="mailto:contato@retubar.com.br"
              className="border-2 border-brand-yellow text-brand-yellow font-bold py-4 px-8 rounded-lg hover:bg-brand-yellow hover:text-brand-dark-blue transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManutencaoPage;