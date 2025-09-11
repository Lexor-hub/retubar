import React from 'react';
// FIX: Imported SparklesIcon to resolve `Cannot find name 'SparklesIcon'` error on line 175.
import { WrenchScrewdriverIcon, BoltIcon, ShieldCheckIcon, RocketLaunchIcon, GlobeAltIcon, CheckBadgeIcon, TruckIcon, PlusCircleIcon, CpuChipIcon, Cog8ToothIcon, PhoneIcon, DocumentTextIcon, BuildingOffice2Icon, SparklesIcon } from './Icons';

type PageProps = {
  navigateTo: (page: string) => void;
};

const CredibilityStat: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
    <div className="flex items-center gap-3 text-sm text-brand-lightest-slate">
        <div className="text-brand-yellow flex-shrink-0">{icon}</div>
        <span>{text}</span>
    </div>
);

const ServiceCard: React.FC<{
    imgSrc: string,
    title: string,
    description: string,
    points: string[],
    ctaText: string,
    icon: React.ReactNode,
    ctaAction: () => void,
    applications?: string
}> = ({ imgSrc, title, description, points, ctaText, icon, ctaAction, applications }) => (
    <div className="bg-brand-medium-blue rounded-lg overflow-hidden border border-brand-slate/50 shadow-2xl flex flex-col md:flex-row gap-8 p-6 md:p-8">
        <div className="md:w-1/3 flex-shrink-0">
            <img src={imgSrc} alt={title} className="w-full h-48 md:h-full object-cover rounded-md" />
        </div>
        <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-3">
                {icon}
                <h3 className="text-2xl font-bold text-brand-yellow">{title}</h3>
            </div>
            <p className="text-brand-light-slate mb-4">{description}</p>
            {applications && <p className="text-sm text-brand-light-slate mb-4"><b>Aplicações principais:</b> {applications}</p>}
            <ul className="space-y-2 mb-6">
                {points.map((point, i) => (
                    <li key={i} className="flex items-start text-brand-lightest-slate">
                        <CheckBadgeIcon className="w-5 h-5 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
            <button onClick={ctaAction} className="bg-brand-yellow text-brand-dark-blue font-bold py-3 px-6 rounded-lg hover:bg-amber-300 transition-colors duration-300 shadow-md">
                {ctaText}
            </button>
        </div>
    </div>
);


const Manutencao: React.FC<PageProps> = ({ navigateTo }) => {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-brand-medium-blue py-20 md:py-28">
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
            <span className="text-brand-lightest-slate">EMERGÊNCIA INDUSTRIAL? MANUTENÇÃO PROGRAMADA?</span>
            <br />
            <span className="text-brand-yellow">SEU EQUIPAMENTO OPERANDO NA MELHOR PERFORMANCE</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-light-slate">
            Resolvemos na sua fábrica ou no seu campo. Especialistas em emergências que outros não conseguem resolver. Quase duas décadas transformando equipamentos parados em operações eficientes.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4 max-w-5xl mx-auto">
              <CredibilityStat icon={<BoltIcon className="w-5 h-5"/>} text="PARADO 70 DIAS → ENTREGUE EM 25 DIAS" />
              <CredibilityStat icon={<RocketLaunchIcon className="w-5 h-5"/>} text="12.000 TUBOS EM 17 DIAS" />
              <CredibilityStat icon={<Cog8ToothIcon className="w-5 h-5"/>} text="20.000 TUBOS/MÊS DE CAPACIDADE" />
              <CredibilityStat icon={<CheckBadgeIcon className="w-5 h-5"/>} text="100% MAIOR EFICIÊNCIA" />
              <CredibilityStat icon={<ShieldCheckIcon className="w-5 h-5"/>} text="18 MESES DE GARANTIA" />
              <CredibilityStat icon={<GlobeAltIcon className="w-5 h-5"/>} text="COBERTURA NACIONAL | ISO 9001" />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:1130909775" className="w-full sm:w-auto bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
              <PhoneIcon className="w-6 h-6"/> EMERGÊNCIA 24H
            </a>
            <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto bg-brand-yellow text-brand-dark-blue font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-300 transition-colors duration-300 shadow-md">
              ORÇAMENTO TÉCNICO EM 24H
            </button>
          </div>
        </div>
      </section>

      {/* Smart Navigation */}
      <section className="py-16 bg-brand-dark-blue">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-brand-lightest-slate">QUAL SUA SITUAÇÃO HOJE?</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <button onClick={() => handleScrollTo('emergencia')} className="bg-brand-medium-blue p-6 rounded-lg border-2 border-red-500 text-center shadow-lg hover:bg-brand-slate transition-colors duration-300">
                      <h3 className="text-xl font-bold text-red-400">🚨 EMERGÊNCIA CRÍTICA</h3>
                      <p className="mt-2 text-brand-light-slate">Parada não programada - Precisa resolver AGORA</p>
                  </button>
                  <button onClick={() => handleScrollTo('retubagem')} className="bg-brand-medium-blue p-6 rounded-lg border border-brand-slate/50 text-center shadow-lg hover:bg-brand-slate transition-colors duration-300">
                      <h3 className="text-xl font-bold text-brand-yellow">🔧 MANUTENÇÃO PROGRAMADA</h3>
                      <p className="mt-2 text-brand-light-slate">Otimização planejada - Pode aguardar cronograma</p>
                  </button>
                  <button onClick={() => navigateTo('fabricacao')} className="bg-brand-medium-blue p-6 rounded-lg border border-brand-slate/50 text-center shadow-lg hover:bg-brand-slate transition-colors duration-300">
                      <h3 className="text-xl font-bold text-brand-lightest-slate">🏗️ PROJETO NOVO</h3>
                      <p className="mt-2 text-brand-light-slate">Equipamento customizado - Engenharia do zero</p>
                  </button>
              </div>
          </div>
      </section>

      {/* Emergency Services */}
      <section id="emergencia" className="py-20 bg-brand-medium-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-lightest-slate">🚨 QUANDO OUTROS DIZEM "IMPOSSÍVEL", NÓS ENTREGAMOS</h2>
            <p className="mt-3 text-lg text-brand-light-slate max-w-3xl mx-auto">Emergências industriais exigem expertise, velocidade e flexibilidade. Temos os três.</p>
          </div>
          <div className="space-y-12">
            <ServiceCard 
              icon={<TruckIcon className="w-8 h-8 text-brand-yellow"/>}
              imgSrc="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
              title="MANUTENÇÃO NO CAMPO - MOBILIZAÇÃO NACIONAL"
              description="Sua linha parou? Levamos a solução até você. Quando a parada não é opção, mobilizamos equipes especializadas para qualquer região do Brasil. Eliminamos o transporte de equipamentos pesados, reduzimos drasticamente o tempo de parada e mantemos sua produção funcionando."
              points={[
                "Redução de 60-80% no tempo de parada vs transporte",
                "Equipes certificadas disponíveis em todo território nacional",
                "Equipamentos portáteis para qualquer complexidade",
                "Acompanhamento 24h durante toda a operação"
              ]}
              applications="Trocadores de grande porte, emergências offshore, paradas críticas em refinarias e petroquímicas, manutenções em locais remotos."
              ctaText="PRECISO DE EMERGÊNCIA NO CAMPO"
              ctaAction={() => navigateTo('contact')}
            />
            <ServiceCard 
              icon={<PlusCircleIcon className="w-8 h-8 text-brand-yellow"/>}
              imgSrc="https://images.unsplash.com/photo-1617802133204-517718b888cb?q=80&w=800&auto=format&fit=crop"
              title="INSTALAÇÃO DE INSERTS - SOLUÇÃO TÉCNICA ESPECIALIZADA"
              description="Vazamentos por erosão ou corrosão localizada? Nossa técnica de instalação de inserts prolonga a vida útil do equipamento evitando custos de retubagem completa. Solução aplicada no local com mínima interferência na operação."
              points={[
                "Aplicação no local - sem remoção do equipamento",
                "Vida útil prolongada em até 5-8 anos adicionais",
                "Custo 70% menor que retubagem completa",
                "Tempo de execução reduzido para volta rápida à operação"
              ]}
              applications="Vazamentos localizados nas extremidades dos tubos, corrosão pontual, emergências onde tempo é crítico."
              ctaText="AVALIAR VIABILIDADE DE INSERTS"
              ctaAction={() => navigateTo('contact')}
            />
            <ServiceCard 
              icon={<CpuChipIcon className="w-8 h-8 text-brand-yellow"/>}
              imgSrc="https://images.unsplash.com/photo-1581092446347-a84a7e40d6c7?q=80&w=800&auto=format&fit=crop"
              title="TESTE COM GÁS HÉLIO - DIAGNÓSTICO PRECISO"
              description="Antes de decidir por manutenções caras, tenha certeza do diagnóstico. Nosso teste com gás hélio detecta micro vazamentos imperceptíveis a outros métodos, fornecendo laudo técnico preciso para sua tomada de decisão."
              points={[
                "Detecção de micro vazamentos invisíveis a olho nu",
                "Localização exata do problema sem desmontagem",
                "Laudo técnico detalhado para justificar investimentos",
                "Evita manutenções desnecessárias e custos excessivos"
              ]}
              applications="Avaliação pré-manutenção, diagnóstico de vazamentos de alta pressão, certificação de integridade pós-reparo, auditorias técnicas."
              ctaText="SOLICITAR TESTE DIAGNÓSTICO"
              ctaAction={() => navigateTo('contact')}
            />
          </div>
        </div>
      </section>

      {/* Specialized Retubing */}
      <section id="retubagem" className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-lightest-slate">🔧 RECUPERAÇÃO TOTAL DA EFICIÊNCIA TÉRMICA</h2>
            <p className="mt-3 text-lg text-brand-light-slate max-w-3xl mx-auto">Quando a retubagem é inevitável, fazemos com excelência técnica.</p>
          </div>
          <div className="space-y-12">
            <ServiceCard
              icon={<SparklesIcon className="w-8 h-8 text-brand-yellow"/>}
              imgSrc="https://images.unsplash.com/photo-1505798577917-a69d7023c7b7?q=80&w=800&auto=format&fit=crop"
              title="RETUBAGEM DE AIR COOLER - EFICIÊNCIA RENOVADA"
              description="Transformamos air coolers com vazamentos extremos e deformações em equipamentos de alta performance. Não apenas substituímos - analisamos e corrigimos falhas de projeto original para evitar problemas recorrentes."
              points={[
                  "Estudo técnico para identificar causa raiz do problema",
                  "Correção de falhas construtivas (taxa de expansão, materiais)",
                  "Feixe tubular novo especificado para sua aplicação",
                  "Testes rigorosos antes da entrega final e 18 meses de garantia"
              ]}
              ctaText="RENOVAR MEU AIR COOLER"
              ctaAction={() => navigateTo('contact')}
            />
            <ServiceCard
              icon={<Cog8ToothIcon className="w-8 h-8 text-brand-yellow"/>}
              imgSrc="https://images.unsplash.com/photo-1554768828-0138c73d1b91?q=80&w=800&auto=format&fit=crop"
              title="RETUBAGEM DE FEIXE TUBULAR - PERFORMANCE MÁXIMA"
              description="Feixes tubulares desgastados comprometem toda a eficiência do processo. Nossa retubagem vai além da substituição - otimizamos o projeto para máxima transferência térmica e vida útil estendida."
              points={[
                  "Projeto customizado por engenheiros especializados",
                  "Materiais especificados conforme aplicação e fluidos",
                  "Otimização termohidráulica para máxima eficiência",
                  "Fabricação com tolerâncias precisas (realizada em fábrica ou campo)"
              ]}
              ctaText="RENOVAR FEIXE TUBULAR"
              ctaAction={() => navigateTo('contact')}
            />
          </div>
        </section>

      {/* Controlled Maintenance */}
       <section className="py-20 bg-brand-medium-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-lightest-slate">🏭 QUALIDADE MÁXIMA EM AMBIENTE PRÓPRIO</h2>
          </div>
          <ServiceCard
            icon={<BuildingOffice2Icon className="w-8 h-8 text-brand-yellow"/>}
            imgSrc="https://images.unsplash.com/photo-1560089195-64495c0734a4?q=80&w=800&auto=format&fit=crop"
            title="MANUTENÇÃO CONTROLADA - AMBIENTE INDUSTRIAL"
            description="Para manutenções complexas que exigem precisão máxima, recebemos seus equipamentos em nossa fábrica. Ambiente controlado, equipamentos de alta precisão e processos certificados ISO 9001 garantem resultado superior."
            points={[
                "Equipamentos de precisão não disponíveis em campo",
                "Controle ambiental (temperatura, umidade, contaminação)",
                "Acompanhamento presencial liberado na fábrica",
                "Logística integrada com transporte e seguro total"
            ]}
            ctaText="ENVIAR PARA FÁBRICA"
            ctaAction={() => navigateTo('contact')}
          />
        </div>
      </section>

      {/* Final Differentiators & CTA */}
      <section className="py-20 bg-brand-dark-blue">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">POR QUE LÍDERES INDUSTRIAIS NOS ESCOLHEM?</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                  <div className="bg-brand-medium-blue p-6 rounded-lg border border-brand-slate/50">
                      <h3 className="text-xl font-bold text-brand-yellow">🎯 FLEXIBILIDADE TOTAL</h3>
                      <p className="mt-2 text-brand-light-slate">Oferecemos manutenção no campo, na fábrica e teste com gás hélio. Essa versatilidade única permite escolher a melhor solução técnica e comercial para cada situação.</p>
                  </div>
                  <div className="bg-brand-medium-blue p-6 rounded-lg border border-brand-slate/50">
                      <h3 className="text-xl font-bold text-brand-yellow">⚡ VELOCIDADE RECORD</h3>
                      <p className="mt-2 text-brand-light-slate">Nossa capacidade de 20.000 tubos/mês resolve emergências que outros levam meses. Provamos que velocidade e qualidade técnica andam juntas.</p>
                  </div>
                  <div className="bg-brand-medium-blue p-6 rounded-lg border border-brand-slate/50">
                      <h3 className="text-xl font-bold text-brand-yellow">🛡️ SEGURANÇA GARANTIDA</h3>
                      <p className="mt-2 text-brand-light-slate">Processos ISO 9001, conformidade com normas regulamentadoras, e 18 meses de garantia protegem seus investimentos e garantem a tranquilidade.</p>
                  </div>
              </div>
              <div className="mt-16 max-w-4xl mx-auto bg-brand-medium-blue p-8 rounded-lg border border-brand-slate/50">
                <h3 className="text-3xl font-bold text-brand-lightest-slate">QUAL SUA PRIORIDADE HOJE?</h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                        <h4 className="text-xl font-semibold text-red-400">🚨 EMERGÊNCIA CRÍTICA</h4>
                        <p className="text-brand-light-slate mt-1">Precisamos resolver AGORA</p>
                        <a href="tel:1130909775" className="mt-4 inline-block w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-500 transition-colors duration-300">
                            LIGAR: (11) 3090-9775
                        </a>
                        <p className="text-xs text-brand-slate mt-2">Atendimento 24h para urgências</p>
                    </div>
                     <div className="text-center">
                        <h4 className="text-xl font-semibold text-brand-yellow">📋 MANUTENÇÃO PROGRAMADA</h4>
                        <p className="text-brand-light-slate mt-1">Podemos planejar o cronograma</p>
                        <a href="mailto:vendas@retubarengenharia.com.br" className="mt-4 inline-block w-full bg-brand-yellow text-brand-dark-blue font-bold py-3 px-6 rounded-lg hover:bg-amber-300 transition-colors duration-300">
                            ORÇAMENTO TÉCNICO DETALHADO
                        </a>
                        <p className="text-xs text-brand-slate mt-2">Diagnóstico + proposta em 24h</p>
                    </div>
                </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Manutencao;