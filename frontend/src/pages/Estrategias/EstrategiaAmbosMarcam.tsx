import React from "react";
import Alerta from "../../components/Futebol/Alerta";

export default function EstrategiaAmbosMarcam() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Estratégia Ambos Marcam</h1>
      <Alerta estrategia="Ambos Marcam" jogo="Bayern x Dortmund" appm={2.4} cg={7} cb={3} cf={4} />
      <p className="mt-4">
        Estratégia baseada em jogos com forte ataque dos dois lados, APPM alto e estatísticas equilibradas. Ideal para mercados de “Ambos Marcam - Sim”.
      </p>
    </div>
  );
}
