import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type Jogo = {
  liga: string;
  tempo: string;
  casa: string;
  fora: string;
  golsCasa: number;
  golsFora: number;
  estrategias: number;
};

export default function Futebol() {
  const navigate = useNavigate();
  const [jogos, setJogos] = useState<Jogo[]>([]);
  const [carregando, setCarregando] = useState(true);

  const carregarJogos = async () => {
    setCarregando(true);
    try {
      const response = await axios.get('http://localhost:4000/api/jogos');
      setJogos(response.data);
    } catch (error) {
      console.error('Erro ao carregar jogos:', error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarJogos();
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold flex gap-2 items-center">
          ⚽ Futebol{' '}
          <span className="text-base text-muted-foreground">
            Análise de jogos ao vivo com API-FOOTBALL
          </span>
        </h1>
        <Button onClick={carregarJogos}>Atualizar</Button>
      </div>

      {carregando ? (
        <div className="text-center py-10">⏳ Carregando jogos ao vivo...</div>
      ) : jogos.length === 0 ? (
        <div className="text-center py-10">😢 Nenhum jogo ao vivo encontrado.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jogos.map((jogo, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <CardContent className="p-4 space-y-2">
                <div className="text-sm text-muted-foreground">
                  {jogo.liga} · {jogo.tempo}
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span>{jogo.casa}</span>
                  <span>
                    {jogo.golsCasa} x {jogo.golsFora}
                  </span>
                  <span>{jogo.fora}</span>
                </div>
                <div className="text-green-600 text-sm">
                  {jogo.estrategias} Estratégias Ativas
                </div>
                <Button
                  variant="outline"
                  onClick={() => navigate(`/detalhes/${index}`)}
                >
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
