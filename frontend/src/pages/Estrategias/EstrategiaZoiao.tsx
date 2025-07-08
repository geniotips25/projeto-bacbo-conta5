import React from "react";
import Alerta from "../../components/Futebol/Alerta";

export default function EstrategiaZoiao() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Estratégia Zoião</h1>
      <Alerta estrategia="Zoião" jogo="Inter x Milan" appm={2.0} cg={6} cb={3} cf={3} />
      <p className="mt-4">
        A famosa “Zoião” é baseada na leitura ao vivo: times que dominam territorialmente, estatísticas equilibradas e odds valorizadas. Ideal para apostas combinadas.
      </p>
    </div>
  );
}
