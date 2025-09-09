import React from 'react';
import { useNavigation } from './hooks/useNavigation';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ManutencaoPage from './pages/ManutencaoPage';
import FabricacaoPage from './pages/FabricacaoPage';
import ContatoPage from './pages/ContatoPage';

const App: React.FC = () => {
  const { currentPage, navigateTo } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'manutencao':
        return <ManutencaoPage />;
      case 'fabricacao':
        return <FabricacaoPage />;
      case 'contato':
        return <ContatoPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="bg-brand-dark-blue text-brand-lightest-slate font-sans">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;