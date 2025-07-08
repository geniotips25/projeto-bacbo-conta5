import React, { useState } from "react";
import BancaManager from "./Futebol/BancaManager";

function Futebol() {
  const [mostrarBanca, setMostrarBanca] = useState(false);

  return (
    <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">⚽ Layout de Futebol</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setMostrarBanca(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          📊 Gerenciar Banca
        </button>
        <button
          onClick={() => setMostrarBanca(false)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          📈 Analytics
        </button>
      </div>

      {mostrarBanca ? (
        <BancaManager />
      ) : (
        <div className="bg-white p-4 text-black rounded shadow">
          <h2 className="text-lg font-bold mb-2">Gráficos virão aqui!</h2>
          <p>Em breve, gráficos de lucro, performance e estratégias ⚽📊</p>
        </div>
      )}
    </div>
  );
}

export default Futebol;
