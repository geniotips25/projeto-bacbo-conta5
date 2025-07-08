// src/components/AlertaAoVivo.tsx
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4001");

interface Alerta {
  estrategia: string;
  horario: string;
  jogo: string;
  appm: number;
  cg: number;
  linkGoogle: string;
}

const AlertaAoVivo: React.FC = () => {
  const [alertas, setAlertas] = useState<Alerta[]>([]);

  useEffect(() => {
    socket.on("alerta-estrategia", (novoAlerta: Alerta) => {
      setAlertas((prev) => [novoAlerta, ...prev.slice(0, 4)]); // mostra os 5 últimos
    });

    return () => {
      socket.off("alerta-estrategia");
    };
  }, []);

  if (alertas.length === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-300 text-black p-2 z-50 shadow-lg">
      {alertas.map((alerta, index) => (
        <div key={index} className="mb-1">
          <strong>🚨 {alerta.estrategia}</strong> | 🕒 {alerta.horario} | {alerta.jogo} | CG: {alerta.cg} | APPM: {alerta.appm} | <a href={alerta.linkGoogle} target="_blank" rel="noopener noreferrer" className="underline">🔍</a>
        </div>
      ))}
    </div>
  );
};

export default AlertaAoVivo;
