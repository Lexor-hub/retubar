import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import Differentiators from './components/Differentiators';
import Equipment from './components/Equipment';
import Segments from './components/Segments';
import Process from './components/Process';
import Partnership from './components/Partnership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Manutencao from './components/Manutencao';
import Fabricacao from './components/Fabricacao';

const App: React.FC = () => {
  const [page, setPage] = useState('home');

  const navigateTo = (pageName: string) => {
    setPage(pageName);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="bg-brand-dark-blue text-brand-lightest-slate font-sans flex flex-col min-h-screen">
      <Header currentPage={page} navigateTo={navigateTo} />
      <main className="flex-grow flex flex-col">
        {page === 'home' && (
          <>
            <Hero navigateTo={navigateTo} />
            <Results />
            <Differentiators />
            <Equipment />
            <Segments />
            <Process />
            <Partnership />
          </>
        )}
        {page === 'manutencao' && <Manutencao navigateTo={navigateTo} />}
        {page === 'fabricacao' && <Fabricacao navigateTo={navigateTo} />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
