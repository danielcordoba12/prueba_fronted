import React, { useState } from 'react';
import Swal from 'sweetalert2';  // Asegúrate de tener esta línea

function Contactenos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar el código para enviar la solicitud de contacto
    console.log(formData);
    Swal.fire({
      title: '¡Formulario Enviado!',
      text: 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.',
      icon: 'success',
      confirmButtonText: 'Entendido',
      customClass: {
        confirmButton: 'text-xl',  // Clase de tamaño de fuente para el botón de confirmación
      },
    });
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="h-screen w-screen  flex items-center justify-center  bg-gray-800" >
      <div className="bg-slate-500 p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl text-gray-700 txt-black font-bold mb-4 ">Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="border rounded-lg py-2 px-3 w-full"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="border rounded-lg py-2 px-3 w-full"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2 text-2xl" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="border rounded-lg py-2 px-3 w-full h-32"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full py-2 px-6 font-bold hover:bg-blue-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactenos;
