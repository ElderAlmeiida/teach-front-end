import React from 'react';
import './index.css';
import Header from './components/Templates/Header';
import Footer from './components/Templates/Footer';
import Section_1 from './components/Sections/Section_1';
import Section_3 from './components/Sections/Section_3';
import Section_5 from './components/Sections/Section_5';
import Section_4 from './components/Sections/Section_4';
import Section_9 from './components/Sections/Section_9';
import Section_8 from './components/Sections/Section_8';
import Section_7 from './components/Sections/Section_7';
import Comments_type1 from './components/Comments/Comments_type1';
import Comments_type2 from './components/Comments/Comments_type2';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen "> {/* Flexbox e altura mínima da tela */}
      <Header />

      <main className="flex-grow"> {/* Flex-grow para preencher o espaço disponível */}
      <Section_1/>
      <Section_3/>
      <Comments_type2/>
      <Section_4/>
      <Section_5/>
       <Comments_type1/>
      <Section_7/>
      <Section_8/>
      </main>
      <Section_9/>

      <Footer /> {/* O Footer sempre fica no final */}
    </div>
  );
};

export default App;


