import React from 'react';
import { PageType } from '../types';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'home' as PageType, label: 'Início' },
    { id: 'manutencao' as PageType, label: 'Manutenção' },
    { id: 'fabricacao' as PageType, label: 'Fabricação' },
    { id: 'contato' as PageType, label: 'Contato' },
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`font-semibold transition-colors duration-300 ${
            currentPage === item.id
              ? 'text-brand-yellow border-b-2 border-brand-yellow pb-1'
              : 'text-brand-light-slate hover:text-brand-yellow'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;