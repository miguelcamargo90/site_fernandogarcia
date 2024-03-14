import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-96 lg:w-[500px] h-auto" />
            </Link>
          </div>

          {/* Botão do Menu (Hamburger) */}
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden">
            <span className="bg-gray-900 w-6 h-1 block mb-1"></span>
            <span className="bg-gray-900 w-6 h-1 block mb-1"></span>
            <span className="bg-gray-900 w-6 h-1 block"></span>
          </button>

          {/* Links de Navegação Centralizados */}
          <nav className={`w-full md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row justify-center items-center text-lg`}>
            <a href="#inicio" className="mx-5 px-4 py-2 text-gray-900 hover:bg-gray-200">Início</a>
            <a href="#about" className="mx-5 px-4 py-2 text-gray-900 hover:bg-gray-200">Sobre</a>
            <a href="#projects" className="mx-5 px-4 py-2 text-gray-900 hover:bg-gray-200">Serviços Prestados</a>
            <a href="#products" className="mx-5 px-4 py-2 text-gray-900 hover:bg-gray-200">Ambientes</a>
            <a href="#contact" className="mx-5 px-4 py-2 text-gray-900 hover:bg-gray-200">Contato</a>
          </nav>

        </div>
      </div>
    </header>
  );
};
