import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Se estiver usando o react-responsive-carousel em outro lugar, mantenha esta linha
import { projects } from "../data";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openProductModal = (productIndex) => {
    setSelectedProduct(projects[productIndex]);
    setPhotoIndex(0); // Inicia sempre com a primeira imagem do produto selecionado
    setIsOpen(true);
  };

  return (
    <section id="products" className="w-full">
      <div className="mx-auto bg-yellow-900 bg-opacity-70 body-font">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-center my-10 bg-yellow-600 text-white">Ambientes Personalizados</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-4/5 sm:mx-auto">
          {projects && projects.map((product, index) => (
            <div key={index} className="p-2">
              <div className="bg-white rounded-lg p-4 hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <figure className="relative cursor-pointer">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-h-48 w-full object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                      onClick={() => openProductModal(index)}
                    />
                  </figure>
                  <div className="text-yellow-500 text-lg mt-4 text-center">
                    <h3 className="text-2xl font-semibold">{product.title}</h3>
                    <p className="text-gray-600 text-base mt-2">{product.subtitle}</p>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && selectedProduct && (
        <Lightbox
          mainSrc={selectedProduct.images[photoIndex]}
          nextSrc={selectedProduct.images[(photoIndex + 1) % selectedProduct.images.length]}
          prevSrc={selectedProduct.images[(photoIndex + selectedProduct.images.length - 1) % selectedProduct.images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + selectedProduct.images.length - 1) % selectedProduct.images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % selectedProduct.images.length)
          }
        />
      )}
    </section>
  );
}
