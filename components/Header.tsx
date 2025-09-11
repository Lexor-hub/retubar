import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import { WrenchScrewdriverIcon, BuildingOffice2Icon } from './Icons';

type HeaderProps = {
  currentPage: string;
  navigateTo: (page: string) => void;
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesMenuRef]);

  const handleNavClick = (page: string) => {
    navigateTo(page);
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
  };

  const isServicesPage = currentPage === 'manutencao' || currentPage === 'fabricacao';

  const navLinkClasses = (page: string) =>
    `px-4 py-2 rounded-md text-base font-semibold transition-colors duration-300 ${
      currentPage === page
        ? 'text-brand-yellow'
        : 'text-brand-lightest-slate hover:text-brand-yellow'
    }`;
  
  const servicesNavLinkClasses = () =>
    `flex items-center gap-1 px-4 py-2 rounded-md text-base font-semibold transition-colors duration-300 ${
      isServicesPage
        ? 'text-brand-yellow'
        : 'text-brand-lightest-slate hover:text-brand-yellow'
    }`;
  
  const mobileNavLinkClasses = (page: string) => 
    `block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
      currentPage === page 
      ? 'bg-brand-medium-blue text-brand-yellow' 
      : 'text-brand-light-slate hover:bg-brand-slate hover:text-white'
    }`;


  return (
    <header className="sticky top-0 z-50 bg-brand-dark-blue/80 backdrop-blur-md border-b border-brand-medium-blue/50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} aria-label="Retubar Início">
          <Logo className="h-12 w-auto" />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-2">
          <button onClick={() => handleNavClick('home')} className={navLinkClasses('home')}>
            Início
          </button>
          
          <div className="relative" ref={servicesMenuRef}>
            <button 
              onClick={() => setServicesMenuOpen(!isServicesMenuOpen)}
              className={servicesNavLinkClasses()}
              aria-haspopup="true"
              aria-expanded={isServicesMenuOpen}
            >
              Serviços
              <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isServicesMenuOpen && (
              <div className="absolute top-full mt-2 w-64 bg-brand-medium-blue rounded-md shadow-lg border border-brand-slate/50 py-2 z-50">
                <button onClick={() => handleNavClick('manutencao')} className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-brand-light-slate hover:bg-brand-slate hover:text-white transition-colors duration-200">
                  <WrenchScrewdriverIcon className="w-5 h-5 text-brand-yellow" />
                  <span>Manutenção e Retubagem</span>
                </button>
                <button onClick={() => handleNavClick('fabricacao')} className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-brand-light-slate hover:bg-brand-slate hover:text-white transition-colors duration-200">
                  <BuildingOffice2Icon className="w-5 h-5 text-brand-yellow" />
                  <span>Fabricação Sob Medida</span>
                </button>
              </div>
            )}
          </div>

          <button onClick={() => handleNavClick('contact')} className={navLinkClasses('contact')}>
            Contato
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="ml-4 bg-brand-yellow text-brand-dark-blue font-bold py-2 px-6 rounded-md hover:bg-amber-300 transition-colors duration-300 shadow-md"
          >
            Diagnóstico Técnico
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-brand-light-slate hover:text-white hover:bg-brand-medium-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Abrir menu principal</span>
            {isMobileMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
             <button onClick={() => handleNavClick('home')} className={mobileNavLinkClasses('home')}>
              Início
            </button>
            
            <div className="border-t border-brand-slate/50 my-2"></div>
            <span className="px-3 py-2 text-xs font-bold text-brand-slate uppercase">Serviços</span>
            <button onClick={() => handleNavClick('manutencao')} className={mobileNavLinkClasses('manutencao')}>Manutenção e Retubagem</button>
            <button onClick={() => handleNavClick('fabricacao')} className={mobileNavLinkClasses('fabricacao')}>Fabricação Sob Medida</button>
            <div className="border-t border-brand-slate/50 my-2"></div>

            <button onClick={() => handleNavClick('contact')} className={mobileNavLinkClasses('contact')}>
              Contato
            </button>
            <button
                onClick={() => handleNavClick('contact')}
                className="mt-4 w-full text-center bg-brand-yellow text-brand-dark-blue font-bold py-3 px-4 rounded-lg hover:bg-amber-300 transition-colors duration-300 shadow-lg"
            >
                Diagnóstico Técnico
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
