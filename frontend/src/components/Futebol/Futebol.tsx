import AtivarAlertas from "./AtivarAlertas";
// src/pages/Estrategias/EstrategiaOverHT.tsx
import React from "react";
import Alerta from "../../components/Futebol/Alerta";

export default function EstrategiaOverHT() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Estratégia Over HT (1º Tempo)</h1>

      <Alerta
        estrategia="Over HT"
        jogo="Palmeiras x Santos"
        appm={2.3}
        cg={7}
        cb={4}
        cf={3}
      />

      <p className="mt-4">
        A estratégia Over HT busca identificar jogos com grande pressão ofensiva ainda no primeiro tempo. Indicadores como APPM ≥ 2 e CG ≥ 6 sugerem fortes chances de sair gol ainda no 1º tempo.
      </p>
    </div>
  );
}
