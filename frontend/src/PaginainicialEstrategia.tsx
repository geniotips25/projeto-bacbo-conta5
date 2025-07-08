import React from "react";
import { useNavigate } from "react-router-dom";

const PaginaInicialEstrategia = () => {
  const navigate = useNavigate();

  const estrategias = [
    { nome: "Funil 10min", rota: "/estrategias/funil-10min" },
    { nome: "Cantos no Limite", rota: "/estrategias/cantos-no-limite" },
    { nome: "Ambos Marcam", rota: "/estrategias/ambos-marcam" },
    { nome: "Zoião", rota: "/estrategias/zoiao" },
    { nome: "Over HT", rota: "/estrategias/over-ht" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">📊 Estratégias de Futebol</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {estrategias.map((estrategia) => (
          <button
            key={estrategia.rota}
            onClick={() => navigate(estrategia.rota)}
            className="bg-blue-600 text-white rounded-2xl shadow-md p-6 hover:bg-blue-700 transition duration-300"
          >
            {estrategia.nome}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginaInicialEstrategia;
