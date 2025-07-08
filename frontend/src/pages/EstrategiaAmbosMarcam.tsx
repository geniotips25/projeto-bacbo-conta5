import React from "react";

const EstrategiaAmbosMarcam = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Estratégia: Ambos Marcam</h1>
      <p className="mb-4">
        Esta estratégia se baseia em identificar jogos com forte tendência para ambas as equipes marcarem gols.
        Usamos dados como:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Estatísticas de finalizações (CG: chutes no alvo, fora e escanteios)</li>
        <li>APPs (ataques perigosos por minuto)</li>
        <li>Motivação do jogo (disputa por título, classificação, etc)</li>
        <li>Estilo ofensivo das equipes</li>
      </ul>
      <p className="mb-4">
        Sinal de entrada ocorre quando:
        APPM ≥ 2 e CG ≥ 5 nos primeiros 15 a 30 minutos.
      </p>

      <div className="bg-yellow-100 p-4 rounded-lg">
        <strong>Alerta ativo:</strong> Quando as condições forem atendidas, o sistema enviará alerta automático.
      </div>
    </div>
  );
};

export default EstrategiaAmbosMarcam;
