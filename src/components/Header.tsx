import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark-blue/80 backdrop-blur-md border-b border-brand-medium-blue/50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} aria-label="Retubar Início">
          <Logo className="h-12 w-auto" />
        </button>
        <div className="flex items-center gap-8">
          <Navigation currentPage={currentPage} onNavigate={onNavigate} />
          <button 
            onClick={() => onNavigate('contato')}
            className="bg-brand-yellow text-brand-dark-blue font-bold py-2 px-6 rounded-md hover:bg-amber-300 transition-colors duration-300 shadow-md"
          >
            Diagnóstico Técnico
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;