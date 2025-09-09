import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-blue border-t border-brand-medium-blue">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center text-brand-light-slate">
          <Logo className="h-16 w-auto mb-4" />
          <p className="max-w-md">
            Quando a parada não é opção, a Retubar é a resposta.
          </p>
          <div className="mt-6 text-sm">
            &copy; {new Date().getFullYear()} Retubar Engenharia. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
