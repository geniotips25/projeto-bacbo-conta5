import React from 'react';

const GraficosAoVivo: React.FC = () => {
  const jogosAoVivo = [
    { id: 1, timeCasa: 'Brasil', timeFora: 'Argentina', appm: 2.5, cg: 6 },
    { id: 2, timeCasa: 'Real Madrid', timeFora: 'Barcelona', appm: 1.8, cg: 4 },
    { id: 3, timeCasa: 'Palmeiras', timeFora: 'Corinthians', appm: 2.2, cg: 7 },
    // pode adicionar até 10 jogos
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jogosAoVivo.map((jogo) => (
        <div
          key={jogo.id}
          className="bg-white rounded-2xl shadow-md p-4 border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-center mb-2">
            {jogo.timeCasa} ⚽ vs ⚽ {jogo.timeFora}
          </h2>
          <p className="text-sm">📈 APPM: <strong>{jogo.appm}</strong></p>
          <p className="text-sm">🎯 CG Total: <strong>{jogo.cg}</strong></p>

          {jogo.appm >= 2 && jogo.cg >= 5 ? (
            <div className="mt-2 p-2 bg-green-100 border border-green-400 text-gr
