import React from 'react';
import { ShieldCheckIcon, GlobeAltIcon, StarIcon } from './Icons';
import HeatExchanger3D from './HeatExchanger3D';

type HeroProps = {
  navigateTo: (page: string) => void;
};

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <section className="relative bg-brand-dark-blue overflow-hidden">
      {/* Animated Background */}
      <HeatExchanger3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-blue/80 via-brand-dark-blue/70 to-brand-dark-blue/80"></div>
      
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
          <button
            onClick={() => navigateTo('contact')}
            className="bg-brand-yellow text-brand-dark-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            SOLICITE SEU DIAGNÓSTICO TÉCNICO
          </button>
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