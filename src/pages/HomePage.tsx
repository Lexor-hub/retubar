import React from 'react';
import Hero from '../components/Hero';
import Results from '../components/Results';
import Differentiators from '../components/Differentiators';
import Equipment from '../components/Equipment';
import Segments from '../components/Segments';
import Process from '../components/Process';
import Partnership from '../components/Partnership';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Results />
      <Differentiators />
      <Equipment />
      <Segments />
      <Process />
      <Partnership />
    </>
  );
};

export default HomePage;