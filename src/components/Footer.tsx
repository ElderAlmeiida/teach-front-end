import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-auto p-4 pb-9 px-4 sm:px-20 py-9 flex flex-col lg:flex-row items-center justify-between opacity-100 bg-white">
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto mb-4 lg:mb-0">
        {/* Ajustando a largura e altura da imagem */}
        <img src="/dist/images/Logo.png" alt="Soller Logo" className="w-[127px] h-[33px] mb-4 lg:mb-0" />
        {/* Aplicando corretamente a margem esquerda */}
        <span className="text-dark-blue text-s font-medium lg:ml-6">
          © 2023 Soller, Inc. All rights reserved.
        </span>
      </div>

      {/* Links organizados em grid para responsividade */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
        <div className="text-center">
          <a href="/terms" className="text-dark-blue text-s font-medium">Terms</a>
        </div>
        <div className="text-center">
          <a href="/privacy" className="text-dark-blue text-s font-medium">Privacy</a>
        </div>
        <div className="text-center">
          <a href="/support" className="text-dark-blue text-s font-medium">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





