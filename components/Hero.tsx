import React from 'react';
import { ShieldCheckIcon, GlobeAltIcon, StarIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-brand-dark-blue">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092921440-4c3030ba017a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-brand-dark-blue/80"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-24 pb-40 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
          <span className="text-brand-yellow">RETUBAR</span>
          <br />
          <span className="text-brand-lightest-slate">Seu equipamento operando na melhor performance</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-light-slate">
          Especialistas em manutenção emergencial de trocadores de calor industriais. Quando outros dizem "impossível", nós entregamos.
        </p>
        <div className="mt-10">
          <a
            href="#contato"
            className="bg-brand-yellow text-brand-dark-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            SOLICITE SEU DIAGNÓSTICO TÉCNICO
          </a>
        </div>
      </div>
      
      {/* Overlapping Credibility Section */}
      <div className="relative z-20">
        <div className="container mx-auto px-6 -mt-24">
            <div className="bg-brand-medium-blue/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-brand-slate/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-light-slate">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <StarIcon className="w-8 h-8 text-brand-yellow flex-shrink-0" />
                        <span className="text-center sm:text-left">Parceiros de gigantes da petroquímica e papel & celulose</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <GlobeAltIcon className="w-8 h-8 text-brand-yellow flex-shrink-0" />
                        <span className="text-center sm:text-left">Cobertura nacional</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <ShieldCheckIcon className="w-8 h-8 text-brand-yellow flex-shrink-0" />
                        <span className="text-center sm:text-left">ISO 9001 | 18 meses de garantia</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;