import React, { useState } from "react";
import { services } from "../data";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

export default function Projects() {
  const [selectedService, setSelectedService] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openServiceModal = (serviceIndex) => {
    setSelectedService(services[serviceIndex]);
    setPhotoIndex(0); // Inicia sempre com a primeira imagem do serviço selecionado
    setIsOpen(true);
  };

  return (
    <section id="projects">
      {/* Seção de Título de Serviços com Fundo Amarelo que se estende horizontalmente */}
      <div className="bg-yellow-600">
        <div className="text-center py-3">
          <h2 className="text-6xl font-bold text-white">Serviços</h2>
        </div>
      </div>

      {/* Grade de Serviços com Fundo Cinza Claro */}
      <div className="bg-gray-200 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-4/5 sm:mx-auto">
          {services && services.map((service, index) => (
            <div key={index} className="p-2">
              <div className="bg-white rounded-lg p-4 hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <figure className="relative cursor-pointer">
                    <img
                      src={service.image[0]}
                      alt={service.name}
                      className="max-h-48 w-full object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                      onClick={() => openServiceModal(index)}
                    />
                  </figure>
                  <div className="text-yellow-500 text-lg mt-4 text-center">
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600 text-base mt-2">{service.subtitle}</p>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && selectedService && (
        <Lightbox
          mainSrc={selectedService.image[photoIndex]}
          nextSrc={selectedService.image[(photoIndex + 1) % selectedService.image.length]}
          prevSrc={selectedService.image[(photoIndex + selectedService.image.length - 1) % selectedService.image.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + selectedService.image.length - 1) % selectedService.image.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % selectedService.image.length)
          }
        />
      )}
    </section>
  );
}
