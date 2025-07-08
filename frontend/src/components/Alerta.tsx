import React from "react";
import axios from "axios";

interface AlertaProps {
  estrategia: string;
  jogo: string;
  appm: number;
  cg: number;
  cb?: number;
  cf?: number;
}

const Alerta: React.FC<AlertaProps> = ({ estrategia, jogo, appm, cg, cb, cf }) => {
  const horario = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const linkGoogle = `https://www.google.com/search?q=${encodeURIComponent(jogo + " ao vivo")}`;

  const handleAlerta = async () => {
    const alerta = { estrategia, horario, jogo, appm, cg, cb, cf, linkGoogle };

    try {
      await axios.post("http://localhost:4000/enviar-alerta", alerta);
      alert("🚨 Alerta enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar alerta:", error);
      alert("Erro ao enviar alerta");
    }
  };

  return (
    <button
      onClick={handleAlerta}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
    >
      🚨 Enviar Alerta
    </button>
  );
};

export default Alerta;
