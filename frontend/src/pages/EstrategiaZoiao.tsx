import React from "react";

const EstrategiaZoiao = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Estratégia: Zoiao</h1>
      <p className="mb-4">
        A estratégia "Zoiao" foca em jogos com movimentação de odds suspeita, variações repentinas ou entrada de volume anormal.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Odds que sobem ou descem rapidamente sem motivo aparente</li>
        <li>Volume de apostas incomum em mercados secundários (escanteios, cartões, etc)</li>
        <li>Jogo com pouca relevância, mas com movimentações bruscas</li>
      </ul>
      <p className="mb-4">
        Ideal para traders atentos e que acompanham simultaneamente o mercado ao vivo e alertas da Bet365.
      </p>

      <div className="bg-blue-100 p-4 rounded-lg">
        <strong>Dica:</strong> Use o "Zoiao" quando o gráfico de apostas e as odds estiverem muito voláteis.
      </div>
    </div>
  );
};

export default EstrategiaZoiao;
