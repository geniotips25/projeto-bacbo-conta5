import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const partidasExemplo = [
  {
    liga: 'La Liga',
    tempo: "67'",
    casa: 'Barcelona',
    fora: 'Real Madrid',
    golsCasa: 2,
    golsFora: 1,
    estrategias: 3,
  },
  {
    liga: 'Premier League',
    tempo: "45'",
    casa: 'Liverpool',
    fora: 'Manchester City',
    golsCasa: 1,
    golsFora: 1,
    estrategias: 3,
  },
  {
    liga: 'Bundesliga',
    tempo: "23'",
    casa: 'Bayern München',
    fora: 'Borussia Dortmund',
    golsCasa: 0,
    golsFora: 0,
    estrategias: 3,
  },
  // ...adicione mais partidas se quiser
];

export default function Futebol() {
  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold flex gap-2 items-center">⚽ Futebol <span className="text-base text-muted-foreground">Análise de jogos ao vivo com API-FOOTBALL</span></h1>
        <Button onClick={() => window.location.reload()}>Atualizar</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partidasExemplo.map((jogo, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <CardContent className="p-4 space-y-2">
              <div className="text-sm text-muted-foreground">{jogo.liga} · {jogo.tempo}</div>
              <div className="flex justify-between items-center font-semibold">
                <span>{jogo.casa}</span>
                <span>{jogo.golsCasa} x {jogo.golsFora}</span>
                <span>{jogo.fora}</span>
              </div>
              <div className="text-green-600 text-sm">
                {jogo.estrategias} Estratégias Ativas
              </div>
              <Button variant="outline" onClick={() => navigate(`/detalhes/${index}`)}>Ver Detalhes</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
