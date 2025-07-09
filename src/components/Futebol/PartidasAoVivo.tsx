import React, { useEffect, useState } from 'react';
import { fetchLiveMatches } from '@/services/apiFootball';

interface Match {
  fixture: { id: number; status: { elapsed: number } };
  league: { name: string; country: string; logo: string };
  teams: {
    home: { name: string; logo: string };
    away: { name: string; logo: string };
  };
  goals: { home: number; away: number };
}

const PartidasAoVivo: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetchLiveMatches();
      setMatches(data.slice(0, 20)); // ✅ Exibe até 20 jogos
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <p className="text-center mt-6 text-gray-600">Carregando jogos ao vivo...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
      {matches.map((m) => (
        <div
          key={m.fixture.id}
          className="bg-white rounded-xl shadow hover:shadow-md p-4 border-l-4 border-green-400"
        >
          <div className="text-sm text-gray-600 font-semibold">{m.league.name}</div>
          <div className="text-xs text-gray-500 mb-2">⏱ {m.fixture.status.elapsed}'</div>

          <div className="flex justify-between items-center mt-1">
            <div className="flex items-center gap-2">
              <img src={m.teams.home.logo} className="w-5 h-5" alt={m.teams.home.name} />
              <span>{m.teams.home.name}</span>
            </div>
            <span className="font-bold">{m.goals.home}</span>
          </div>

          <div className="flex justify-between items-center mt-1">
            <div className="flex items-center gap-2">
              <img src={m.teams.away.logo} className="w-5 h-5" alt={m.teams.away.name} />
              <span>{m.teams.away.name}</span>
            </div>
            <span className="font-bold">{m.goals.away}</span>
          </div>

          <button className="mt-3 text-sm text-blue-600 hover:underline">Ver Detalhes</button>
        </div>
      ))}
    </div>
  );
};

export default PartidasAoVivo;
