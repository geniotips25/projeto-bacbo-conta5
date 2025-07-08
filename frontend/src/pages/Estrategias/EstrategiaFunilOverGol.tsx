import React from "react";
import Alerta from "../../components/Futebol/Alerta";

export default function EstrategiaFunilOverGol() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Funil para Over Gols</h1>
      <Alerta estrategia="Funil Over Gol" jogo="Liverpool x Chelsea" appm={2.6} cg={9} cb={6} cf={3} />
      <p className="mt-4">
        Essa estratégia busca jogos com pressão constante e finalizações frequentes, com CG acima de 8 e APPM acima de 2.5. Ideal para entrar em over 1.5 ou 2.5.
      </p>
    </div>
  );
}
