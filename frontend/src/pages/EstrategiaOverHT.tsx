import React from "react";

const EstrategiaOverHT = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Estratégia: Over HT (1º Tempo)</h1>
      <p className="mb-4">
        Essa estratégia busca entradas em over 0.5 HT (pelo menos 1 gol no primeiro tempo).
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>APPs elevados (≥ 2)</li>
        <li>CG ≥ 6 antes dos 25 minutos</li>
        <li>Chances claras desperdiçadas</li>
        <li>Pressão alta do time mandante</li>
        <li>Odds acima de 1.70 para o over 0.5 HT</li>
      </ul>
      <p className="mb-4">
        Ideal para jogos movimentados, com foco ofensivo desde o início.
      </p>

      <div className="bg-green-100 p-4 rounded-lg">
        <strong>Alerta ativo:</strong> O sistema detecta e avisa quando APPM ≥ 2 e CG ≥ 6 nos primeiros 25 minutos.
      </div>
    </div>
  );
};

export default EstrategiaOverHT;
