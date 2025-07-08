import React from "react";
import { Link } from "react-router-dom";

const PaginaInicialEstrategia = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Estratégias de Futebol</h1>
      <ul className="space-y-2">
        <li><Link to="/estrategias/funil-10min" className="text-blue-600 underline">Funil de 10 minutos</Link></li>
        <li><Link to="/estrategias/cantos-no-limite" className="text-blue-600 underline">Cantos no Limite</Link></li>
        <li><Link to="/estrategias/ambos-marcam" className="text-blue-600 underline">Ambos Marcam</Link></li>
        <li><Link to="/estrategias/zoiao" className="text-blue-600 underline">Zoio Estratégico</Link></li>
        <li><Link to="/estrategias/over-ht" className="text-blue-600 underline">Over HT</Link></li>
      </ul>
    </div>
  );
};

export default PaginaInicialEstrategia;
