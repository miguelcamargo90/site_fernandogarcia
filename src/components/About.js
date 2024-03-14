import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { OfficeBuildingIcon, ViewListIcon } from '@heroicons/react/solid';

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '' || hash === '#') return;
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <section id="about" className="bg-gray-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    A Arte do Design em Móveis Planejados
                </h1>
                <p className="mb-8 leading-relaxed text-lg text-gray-700">
                    Com um amor profundamente enraizado pelo design e criação de móveis planejados, nossa jornada começou há 7 anos. Cada peça que sai da nossa oficina é mais do que um objeto; é a materialização de uma paixão, uma história, um sonho. Aqui, a arte de transformar espaços com soluções personalizadas e detalhes únicos é a essência do nosso dia a dia. Bem-vindo ao mundo onde cada móvel conta uma história e cada projeto reflete a alma do lar.
                </p>
                <div className="flex justify-center">
                    <Link to="/#projects" className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                        <OfficeBuildingIcon className="w-6 h-6 mr-2" />
                        Serviços Prestados
                    </Link>
                    <Link to="/#products" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        <ViewListIcon className="w-6 h-6 mr-2" />
                        Ambientes
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
