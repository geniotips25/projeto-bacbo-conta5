import React from "react";
import axios from "axios";

const BotaoTesteAlerta: React.FC = () => {
  const enviarAlerta = async () => {
    try {
      await axios.post("http://localhost:4000/enviar-alerta", {
        estrategia: "Funil de 10min",
        horario: new Date().toLocaleTimeString(),
        jogo: "Time A x Time B",
        appm: 2.3,
        cg: 6,
        linkGoogle: "https://www.google.com/search?q=Time+A+x+Time+B",
      });

      alert("✅ Alerta enviado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao enviar alerta:", error);
      alert("Erro ao enviar alerta");
    }
  };

  return (
    <button
      onClick={enviarAlerta}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
    >
      Enviar Alerta de Teste
    </button>
  );
};

export default BotaoTesteAlerta;
