import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark-blue text-brand-lightest-slate font-sans">
      <Header />
      <main>
        <Hero />
        <Results />
        <Differentiators />
        <Equipment />
        <Segments />
        <Process />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;