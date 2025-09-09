@@ .. @@
 import React from 'react';
 import { PhoneIcon, DocumentTextIcon } from './Icons';
+import { PageType } from '../types';
 
-const Contact: React.FC = () => {
+interface ContactProps {
+  onNavigate?: (page: PageType) => void;
+}
+
+const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
   return (
     <section id="contato" className="py-20 bg-brand-dark-blue">
@@ .. @@
             <h3 className="text-2xl font-bold text-brand-lightest-slate">Para Parcerias Estratégicas</h3>
             <p className="mt-2 text-brand-light-slate">Solicite uma análise completa para sua planta.</p>
-            <a href="mailto:contato@retubar.com.br" className="mt-6 inline-block bg-brand-yellow text-brand-dark-blue font-bold py-3 px-8 rounded-lg hover:bg-amber-300 transition-colors">
+            <button 
+              onClick={() => onNavigate?.('contato')}
+              className="mt-6 inline-block bg-brand-yellow text-brand-dark-blue font-bold py-3 px-8 rounded-lg hover:bg-amber-300 transition-colors"
+            >
               Diagnóstico Técnico Completo
-            </a>
+            </button>
           </div>
         </div>
       </div>