import React from 'react';
import { Cog8ToothIcon, BeakerIcon, ShieldCheckIcon, DocumentTextIcon } from '../components/Icons';

const fabricationData = [
  {
    icon: <Cog8ToothIcon className="w-12 h-12 text-brand-yellow" />,
    title: "Feixes Tubulares Sob Medida",
    description: "Fabricação completa de feixes tubulares para todas as aplicações industriais",
    specs: [
      "Materiais: Aço carbono, inox, ligas especiais",
      "Diâmetros: 1/4\" a 2\" (6mm a 50mm)",
      "Comprimentos: até 12 metros",
      "Normas: ASME, PETROBRAS, DIN"
    ]
  },
  {
    icon: <BeakerIcon className="w-12 h-12 text-brand-yellow" />,
    title: "Trocadores Completos",
    description: "Fabricação de trocadores de calor casco e tubo para processos específicos",
    specs: [
      "Projeto térmico otimizado",
      "Análise de tensões (FEA)",
      "Soldas certificadas",
      "Testes hidrostáticos"
    ]
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-brand-yellow" />,
    title: "Air Coolers",
    description: "Fabricação de resfriadores a ar para aplicações industriais críticas",
    specs: [
      "Ventiladores de alta eficiência",
      "Estruturas galvanizadas",
      "Controles automáticos",
      "Baixo nível de ruído"
    ]
  },
  {
    icon: <DocumentTextIcon className="w-12 h-12 text-brand-yellow" />,
    title: "Projetos Especiais",
    description: "Desenvolvimento de soluções customizadas para desafios únicos",
    specs: [
      "Engenharia reversa",
      "Melhorias de performance",
      "Adaptações para novos processos",
      "Consultoria técnica"
    ]
  }
];

const qualityStandards = [
  "ISO 9001:2015 - Sistema de Gestão da Qualidade",
  "ASME Section VIII - Vasos de Pressão",
  "PETROBRAS N-253 - Trocadores de Calor",
  "AWS D1.1 - Soldagem Estrutural",
  "TEMA - Tubular Exchanger Manufacturers Association"
];

const FabricacaoPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-brand-dark-blue py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-brand-lightest-slate">
            <span className="text-brand-yellow">FABRICAÇÃO</span> INDUSTRIAL
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-brand-light-slate">
            Fabricamos equipamentos de troca térmica com a mais alta qualidade e precisão. 
            Cada projeto é desenvolvido para superar as expectativas de performance e durabilidade.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-brand-medium-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Nossos Produtos</h2>
            <div className="mt-3 h-1 w-24 bg-brand-yellow mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fabricationData.map((product, index) => (
              <div key={index} className="bg-brand-dark-blue p-8 rounded-lg border border-brand-slate/50 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  {product.icon}
                  <h3 className="text-2xl font-bold text-brand-lightest-slate">{product.title}</h3>
                </div>
                <p className="text-brand-light-slate mb-6">{product.description}</p>
                <div className="space-y-3">
                  {product.specs.map((spec, sIndex) => (
                    <div key={sIndex} className="flex items-start text-brand-lightest-slate">
                      <svg className="w-5 h-5 text-brand-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Padrões de Qualidade</h2>
            <p className="mt-2 text-brand-light-slate">Certificações e normas que garantem a excelência</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-medium-blue p-8 rounded-lg border border-brand-slate/50 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-6 h-6 text-brand-yellow mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-lightest-slate font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-brand-medium-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Processo de Fabricação</h2>
            <p className="mt-2 text-brand-light-slate">Do projeto à entrega, cada etapa é controlada</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Projeto", desc: "Cálculos térmicos e mecânicos" },
                { step: "2", title: "Materiais", desc: "Seleção e certificação" },
                { step: "3", title: "Fabricação", desc: "Soldagem e montagem" },
                { step: "4", title: "Testes", desc: "Hidrostático e performance" },
                { step: "5", title: "Entrega", desc: "Instalação e comissionamento" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-yellow text-brand-dark-blue font-black text-xl rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-brand-lightest-slate mb-2">{item.title}</h3>
                  <p className="text-brand-light-slate text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate mb-6">
            Precisa de um Equipamento Customizado?
          </h2>
          <p className="text-lg text-brand-light-slate mb-8 max-w-2xl mx-auto">
            Nossa equipe de engenharia está pronta para desenvolver a solução perfeita para sua aplicação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:projetos@retubar.com.br"
              className="bg-brand-yellow text-brand-dark-blue font-bold py-4 px-8 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Solicitar Projeto
            </a>
            <a
              href="tel:1130909775"
              className="border-2 border-brand-yellow text-brand-yellow font-bold py-4 px-8 rounded-lg hover:bg-brand-yellow hover:text-brand-dark-blue transition-colors"
            >
              Falar com Engenheiro
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FabricacaoPage;