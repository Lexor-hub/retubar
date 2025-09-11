import React from 'react';
import { BuildingOffice2Icon, Cog8ToothIcon, DocumentTextIcon, LightBulbIcon } from './Icons';

type PageProps = {
  navigateTo: (page: string) => void;
};

const Fabricacao: React.FC<PageProps> = ({ navigateTo }) => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-brand-medium-blue py-20 md:py-32 text-center">
        <div className="container mx-auto px-6 z-10">
          <BuildingOffice2Icon className="w-16 h-16 mx-auto text-brand-yellow mb-4" />
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-brand-lightest-slate">
            ENGENHARIA DE PRECISÃO PARA SUA MÁXIMA PERFORMANCE
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-brand-light-slate">
            Não apenas fabricamos equipamentos. Criamos soluções de alta performance baseadas em quase duas décadas de experiência em manutenção crítica. Projetos que nascem para durar.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Por Que Nossa Fabricação é Superior?</h2>
          <div className="mt-3 h-1 w-24 bg-brand-yellow mx-auto"></div>
          <p className="mt-6 max-w-4xl mx-auto text-lg text-brand-light-slate">
            Nossa engenharia nasce da experiência em campo. Por quase 20 anos, vimos de perto os pontos de falha, os materiais inadequados e os erros de projeto que comprometem a vida útil dos equipamentos. Usamos esse conhecimento para construir trocadores de calor e feixes tubulares que não apenas atendem, mas superam as especificações originais, evitando paradas futuras e garantindo a eficiência da sua operação.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-brand-medium-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Nossas Soluções de Engenharia</h2>
            <p className="mt-2 text-brand-light-slate">Do projeto à fabricação, entregamos confiabilidade.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Product Card 1 */}
            <div className="bg-brand-dark-blue rounded-lg p-8 border border-brand-slate/50 shadow-lg flex flex-col">
                <Cog8ToothIcon className="w-10 h-10 text-brand-yellow mb-4"/>
                <h3 className="text-xl font-bold text-brand-yellow">FEIXE TUBULAR DE ALTA PERFORMANCE</h3>
                <p className="mt-2 text-brand-light-slate flex-grow">Projetamos feixes que vão além da simples substituição. Otimizamos o design termohidráulico, selecionamos materiais que resistem às condições mais severas e garantimos tolerâncias precisas, resultando em maior eficiência e vida útil estendida.</p>
            </div>

            {/* Product Card 2 */}
            <div className="bg-brand-dark-blue rounded-lg p-8 border-2 border-brand-yellow shadow-lg flex flex-col">
                <BuildingOffice2Icon className="w-10 h-10 text-brand-yellow mb-4"/>
                <h3 className="text-xl font-bold text-brand-yellow">TROCADOR DE CALOR CASCO E TUBO</h3>
                <p className="mt-2 text-brand-light-slate flex-grow">Sua operação é única. Desenvolvemos projetos customizados de trocadores casco e tubo, desde a concepção até a entrega. Cada equipamento é calculado e construído para se integrar perfeitamente ao seu processo, garantindo a performance que sua planta exige.</p>
            </div>
            
            {/* Product Card 3 */}
            <div className="bg-brand-dark-blue rounded-lg p-8 border border-brand-slate/50 shadow-lg flex flex-col">
                <LightBulbIcon className="w-10 h-10 text-brand-yellow mb-4"/>
                <h3 className="text-xl font-bold text-brand-yellow">PROJETO DE TROCADOR DE CALOR</h3>
                <p className="mt-2 text-brand-light-slate flex-grow">Oferecemos um serviço completo de projeto e consultoria, utilizando softwares como HTRI e PV-Elite para validar cálculos térmicos e mecânicos. Ideal para otimizar equipamentos existentes ou desenvolver soluções novas com conformidade com normas (ASME, NR-13).</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-brand-lightest-slate">Vamos Transformar Seu Projeto em Realidade?</h2>
            <p className="mt-4 text-lg text-brand-light-slate max-w-2xl mx-auto">Nossa equipe de engenheiros está pronta para analisar seu desafio e propor uma solução técnica que irá superar suas expectativas.</p>
            <div className="mt-8">
                <button
                    onClick={() => navigateTo('contact')}
                    className="bg-brand-yellow text-brand-dark-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                    CONSULTAR UM ENGENHEIRO ESPECIALISTA
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Fabricacao;