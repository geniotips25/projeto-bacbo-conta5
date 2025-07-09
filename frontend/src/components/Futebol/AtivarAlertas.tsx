import React, { useState } from "react";

const AtivarAlertas: React.FC = () => {
  const [ativo, setAtivo] = useState(false);

  const toggleAlertas = async () => {
    setAtivo(!ativo);

    try {
      await fetch("http://localhost:4000/toggle-alertas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ativo: !ativo }),
      });
    } catch (error) {
      console.error("Erro ao ativar alertas:", error);
    }
  };

  return (
    <div className="p-4 text-center">
      <button
        onClick={toggleAlertas}
        className={`px-6 py-2 rounded-xl text-white shadow-md ${
          ativo ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {ativo ? "✅ Alertas Ativados" : "❌ Alertas Desativados"}
      </button>
    </div>
  );
};

export default AtivarAlertas;
