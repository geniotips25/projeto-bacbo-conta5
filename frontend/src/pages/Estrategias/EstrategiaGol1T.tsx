import React from "react";
import Alerta from "../../components/Futebol/Alerta";

export default function EstrategiaGol1T() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Estratégia Gol no 1º Tempo</h1>
      <Alerta estrategia="Gol 1T" jogo="Real Madrid x Barcelona" appm={2.5} cg={8} cb={5} cf={3} />
      <p className="mt-4">
        Essa estratégia foca em jogos com CG ≥ 7 e APPM ≥ 2.5 nos primeiros 30 minutos, indicando forte chance de gol antes do intervalo.
      </p>
    </div>
  );
}
