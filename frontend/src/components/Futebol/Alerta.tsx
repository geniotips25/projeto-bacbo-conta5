import React, { useEffect, useState } from "react";
import axios from "axios";

interface AlertaProps {
  estrategia: string;
  jogo: string;
  appm: number;
  cg: number;
  cb: number;
  cf: number;
}

export default function Alerta({
  estrategia,
  jogo,
  appm,
  cg,
  cb,
  cf,
}: AlertaProps) {
  const [enviado, setEnviado] = useState(false);
  const deveExibir = appm >= 2 && cg >= 5;

  useEffect(() => {
    const enviarParaTelegram = async () => {
      try {
        await axios.post("http://localhost:4000/enviar-alerta", {
          estrategia,
          jogo,
          appm,
          cg,
          cb,
          cf,
        });
        console.log("✅ Alerta enviado para o Telegram");
        setEnviado(true);
      } catch (error) {
        console.error("❌ Erro ao enviar alerta:", error);
      }
    };

    if (deveExibir && !enviado) {
      enviarParaTelegram();
    }
  }, [deveExibir, enviado, estrategia, jogo, appm, cg, cb, cf]);

  if (!deveExibir) return null;

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mb-4 shadow-md rounded-lg">
      <p className="font-bold">⚠️ Alerta de Oportunidade Detectado!</p>
      <p className="mt-2">
        <strong>Estratégia:</strong> {estrategia}
      </p>
      <p>
        <strong>Jogo:</strong> {jogo}
      </p>
      <p>
        <strong>APPM:</strong> {appm} | <strong>CG:</strong> {cg} {" "}
        (<strong>CB:</strong> {cb} + <strong>CF:</strong> {cf})
      </p>
    </div>
  );
}
