@@ .. @@
 import React from 'react';
-import Header from './components/Header';
-import Hero from './components/Hero';
-import Results from './components/Results';
-import Differentiators from './components/Differentiators';
-import Equipment from './components/Equipment';
-import Segments from './components/Segments';
-import Process from './components/Process';
-import Partnership from './components/Partnership';
-import Contact from './components/Contact';
+import { useNavigation } from './hooks/useNavigation';
+import Header from './components/Header';
 import Footer from './components/Footer';
+import HomePage from './pages/HomePage';
+import ManutencaoPage from './pages/ManutencaoPage';
+import FabricacaoPage from './pages/FabricacaoPage';
+import ContatoPage from './pages/ContatoPage';
 
 const App: React.FC = () => {
+  const { currentPage, navigateTo } = useNavigation();
+
+  const renderPage = () => {
+    switch (currentPage) {
+      case 'home':
+        return <HomePage onNavigate={navigateTo} />;
+      case 'manutencao':
+        return <ManutencaoPage />;
+      case 'fabricacao':
+        return <FabricacaoPage />;
+      case 'contato':
+        return <ContatoPage />;
+      default:
+        return <HomePage onNavigate={navigateTo} />;
+    }
+  };
+
   return (
     <div className="bg-brand-dark-blue text-brand-lightest-slate font-sans">
-      <Header />
+      <Header currentPage={currentPage} onNavigate={navigateTo} />
       <main>
-        <Hero />
-        <Results />
-        <Differentiators />
-        <Equipment />
-        <Segments />
-        <Process />
-        <Partnership />
-        <Contact />
+        {renderPage()}
       </main>
       <Footer />
     </div>