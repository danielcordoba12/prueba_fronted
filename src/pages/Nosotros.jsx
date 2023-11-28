import React from "react";
import img from '../assets/OIG.jpg';

const Header = () => (
  <h1 className="text-4xl font-bold mb-6">Bienvenido a Nuestro Mundo del Café</h1>
);

const Paragraph = ({ text }) => (
  <p className="text-lg mb-8">{text}</p>
);

const Image = () => (
  <img src={img} alt="" className="w-48 h-48 mx-auto mb-8" />
);

const Nosotros = () => {
  return (
    <div className="flex items-center justify-center w-full bg-gray-800 text-white p-10">
      <div className="max-w-3xl mx-auto text-center">
        <Header />
        <Paragraph text="En el mundo de la producción de café, la precisión y la consistencia en los análisis son fundamentales. Hasta hace poco, la información crucial sobre el café, como el contenido de humedad, el perfil de sabor y otros parámetros, se registraba en papel y hojas sueltas, lo que a menudo resultaba en la pérdida de datos críticos." />
        <Paragraph text="Sin embargo, todo esto ha cambiado gracias a nuestro revolucionario software de gestión de análisis de café. Este software, diseñado específicamente para la industria cafetera, permite a los productores, tostadores y catadores de café registrar y rastrear cada detalle de sus análisis de manera electrónica, eliminando la posibilidad de perder datos importantes." />
        <Paragraph text="Ahora, con un sistema digital integral, los profesionales del café pueden acceder de manera eficiente a un historial completo de análisis, realizar comparaciones precisas y tomar decisiones informadas para mejorar la calidad y la consistencia de su café, llevando a la industria a un nivel completamente nuevo de excelencia." />
        <Image />
      </div>
    </div>
  );
};

export default Nosotros;

