import React, { useEffect, useState } from 'react';
import { buscarJogosAoVivo } from '../../services/apiFootball';

const GraficosAoVivo: React.FC = () => {
  const [jogos, setJogos] = useState<any[]>([]);

  useEffect(() => {
    const carregarJogos = async () => {
      const dados = await buscarJogosAoVivo();
      if (dados && dados.response) {
        setJogos(dados.response.slice(0, 10)); // Mostra os 10 primeiros jogos ao vivo
      }
    };

    carregarJogos();
    const intervalo = setInterval(carregarJogos, 15000); // Atualiza a cada 15 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {jogos.map((jogo, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-bold">
            {jogo.teams.home.name} vs {jogo.teams.away.name}
          </h2>
          <p>Status: {jogo.fixture.status.short}</p>
          <p>Tempo: {jogo.fixture.status.elapsed} min</p>
          <p>Placar: {jogo.goals.home} - {jogo.goals.away}</p>
          {/* Adicionar mais dados como escanteios, chutes etc. se quiser */}
        </div>
      ))}
    </div>
  );
};

export default GraficosAoVivo;
