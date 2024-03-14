import React from "react";
import whatsappIcon from "../assets/images/whats.png";
import emailIcon from "../assets/images/email.png";
import instagramIcon from "../assets/images/instagram.png"; // Certifique-se de ter a imagem no caminho correto


export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-yellow-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.476570230694!2d-46.58107772454408!3d-23.623098063863413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c95e6b8a6a9%3A0x59316a1c42718d1d!2sR.%20Mato%20Grosso%2C%2075%20-%20Santo%20Ant%C3%B4nio%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009530-330%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1710006387147!5m2!1spt-BR!2sus"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ENDEREÇO
              </h2>
              <p className="mt-1">
                Rua Mato Grosso, 75  <br />
                Bairro Cerâmica - São Caetano do Sul <br /> 
                CEP 12345-678
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:fegarciaplanejados@gmail.com" className="text-indigo-400 leading-relaxed">
                fegarciaplanejados@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                TELEFONE
              </h2>
              <p className="leading-relaxed">11-999318663</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-6 mt-8 lg:mt-0">
          <div className="bg-yellow-800 rounded flex p-4 h-full flex-col items-center">
            <h1 className="title-font font-medium text-white text-center text-lg mb-4">
              Nossos Contatos:
            </h1>
            <div className="flex justify-start mb-5">
              <a
                href="https://wa.me/5511999318663"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center leading-center"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-10 h-10 mr-3"
                />
                <p className="text-white text-lg">Faça seu Orçamento!</p>
              </a>
            </div>
            <div className="flex justify-start mb-5">
              <a
                href="https://instagram.com/fg_moveisplanejados_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center leading-center"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-10 h-10 mr-3"
                />
                <p className="text-white text-lg">Rede Social</p>
              </a>
            </div>
            <div className="flex justify-start mb-5">
              <a
                href="mailto:fegarciaplanejados@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center leading-center"
              >
                <img
                  src={emailIcon}
                  alt="email"
                  className="w-10 h-10 mr-3"
                />
                <p className="text-white text-lg">E-Mail</p>
              </a>
            </div>
            <p className="text-white text-sm mt-4">
              Desenvolvido por Miguel Camargo - Desenvolvedor Web e Sistemas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
