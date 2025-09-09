import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark-blue/80 backdrop-blur-md border-b border-brand-medium-blue/50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#inicio" aria-label="Retubar Início">
          <Logo className="h-12 w-auto" />
        </a>
        <a 
          href="#contato"
          className="hidden md:inline-block bg-brand-yellow text-brand-dark-blue font-bold py-2 px-6 rounded-md hover:bg-amber-300 transition-colors duration-300 shadow-md"
        >
          Diagnóstico Técnico
        </a>
      </div>
    </header>
  );
};

export default Header;
