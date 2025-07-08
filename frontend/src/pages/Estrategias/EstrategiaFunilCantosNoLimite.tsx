import React from "react";
import Alerta from "../../components/Futebol/Alerta";

export default function EstrategiaFunilCantosNoLimite() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Estratégia Funil Cantos no Limite</h1>

      <Alerta
        estrategia="Cantos no Limite"
        jogo="Internacional x Grêmio"
        appm={2.0}
        cg={8}
        cb={5}
        cf={3}
      />

      <p className="mt-4">
        Ideal para os minutos finais do jogo (acima dos 85 minutos) quando a pressão pelo escanteio aumenta. O foco está nos dados estatísticos que apontam pressão extrema (CG ≥ 7) e APPM elevado, o que indica probabilidade de escanteio final.
      </p>
    </div>
  );
}
