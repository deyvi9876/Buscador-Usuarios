import { useState } from "react";

export default function Card({ usuario }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className="bg-white shadow-lg rounded-xl p-4 text-center w-64 cursor-pointer 
                   hover:shadow-2xl hover:scale-105 transform transition-all duration-200"
      >
        <img
          className="w-20 h-20 rounded-full mx-auto border-2 border-blue-400"
          src={usuario.foto}
          alt={usuario.nombre}
        />
        <h1 className="text-gray-800 font-bold mt-2">
          {usuario.nombre} {usuario.apellidos}
        </h1>
        <p className="text-gray-600 mt-1 italic">{usuario.perfil}</p>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative">
            {/* Botón cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <div className="text-center">
              <img
                className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow"
                src={usuario.foto}
                alt={usuario.nombre}
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                {usuario.nombre} {usuario.apellidos}
              </h2>
              <p className="text-blue-600 font-medium">{usuario.correo}</p>
              <p className="text-gray-700 mt-3">{usuario.perfil}</p>
              <p className="text-gray-600 mt-2 italic">
                Intereses: {usuario.intereses}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setOpen(false)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
