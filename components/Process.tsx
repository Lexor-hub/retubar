import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-dark-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Do Diagnóstico à Entrega</h2>
          <p className="mt-2 text-brand-light-slate">Processos Claros, Resultados Previsíveis.</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-brand-medium-blue border border-brand-slate/50 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-brand-yellow text-brand-dark-blue font-black text-2xl rounded-full">1</div>
              <h3 className="text-xl font-bold text-brand-lightest-slate">DIAGNÓSTICO</h3>
              <p className="mt-2 text-brand-light-slate">Análise técnica remota com orçamento detalhado.</p>
            </div>
            <div className="text-center p-6 bg-brand-medium-blue border border-brand-slate/50 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-brand-yellow text-brand-dark-blue font-black text-2xl rounded-full">2</div>
              <h3 className="text-xl font-bold text-brand-lightest-slate">EXECUÇÃO</h3>
              <p className="mt-2 text-brand-light-slate">Execução controlada com acompanhamento presencial disponível.</p>
            </div>
            <div className="text-center p-6 bg-brand-medium-blue border border-brand-slate/50 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-brand-yellow text-brand-dark-blue font-black text-2xl rounded-full">3</div>
              <h3 className="text-xl font-bold text-brand-lightest-slate">ENTREGA</h3>
              <p className="mt-2 text-brand-light-slate">Testes aplicados no projeto antes da entrega final.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;