import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section_1 from './components/Sections/Section_1';
import Section_2 from './components/Sections/Section_2';
import Section_3 from './components/Sections/Section_3';
import Section_4 from './components/Sections/Section_4';
import Section_5 from './components/Sections/Section_5';
import Section_6 from './components/Sections/Section_6';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen "> {/* Flexbox e altura mínima da tela */}
      <Header />

      <main className="flex-grow"> {/* Flex-grow para preencher o espaço disponível */}
        <Section_1/>
        <Section_2/>
        <Section_3/>
        <Section_4/>
        <Section_5/>
        <Section_6/>

      </main>
        

      <Footer /> {/* O Footer sempre fica no final */}
    </div>
  );
};

export default App;


