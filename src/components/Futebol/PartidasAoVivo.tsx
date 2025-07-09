import React, { useEffect, useState } from 'react';
import { fetchLiveMatches } from '@/services/apiFootball';

interface Time {
  name: string;
  logo: string;
}

interface Fixture {
  fixture: {
    id: number;
    status: { elapsed: number };
  };
  league: {
    name: string;
  };
  teams: {
    home: Time;
    away: Time;
  };
  goals: {
    home: number;
    away: number;
  };
}

const PartidasAoVivo: React.FC = () => {
  const [jogos, setJogos] = useState<Fixture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarPartidas = async () => {
      try {
        const data = await fetchLiveMatches();
        setJogos(data.slice(0, 10)); // apenas 10 partidas
      } catch (error) {
        console.error('Erro ao carregar partidas:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarPartidas();
  }, []);

  if (loading) return <p>Carregando partidas ao vivo...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {jogos.map((jogo) => (
        <div key={jogo.fixture.id} className="bg-white shadow rounded-xl p-4 border-l-4 border-green-600">
          <h2 className="text-sm font-semibold text-gray-600">{jogo.league.name}</h2>
          <p className="text-xs text-gray-500">⏱ {jogo.fixture.status.elapsed}'</p>

          <div className="flex items-center justify-between mt-2 mb-1">
            <div className="flex items-center gap-2">
              <img src={jogo.teams.home.logo} alt="logo" className="w-5 h-5" />
              <span>{jogo.teams.home.name}</span>
            </div>
            <span className="font-bold text-lg">{jogo.goals.home}</span>
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src={jogo.teams.away.logo} alt="logo" className="w-5 h-5" />
              <span>{jogo.teams.away.name}</span>
            </div>
            <span className="font-bold text-lg">{jogo.goals.away}</span>
          </div>

          <p className="text-green-700 text-sm font-medium mb-1">3 Estratégias Ativas</p>
          <button className="text-sm text-blue-600 hover:underline">Ver Detalhes</button>
        </div>
      ))}
    </div>
  );
};

export default PartidasAoVivo;
