import React from 'react';
import Hero from '../components/Hero';
import Results from '../components/Results';
import Differentiators from '../components/Differentiators';
import Equipment from '../components/Equipment';
import Segments from '../components/Segments';
import Process from '../components/Process';
import Partnership from '../components/Partnership';
import Contact from '../components/Contact';
import { PageType } from '../types';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <Results />
      <Differentiators />
      <Equipment />
      <Segments />
      <Process />
      <Partnership />
      <Contact onNavigate={onNavigate} />
    </>
  );
};

export default HomePage;