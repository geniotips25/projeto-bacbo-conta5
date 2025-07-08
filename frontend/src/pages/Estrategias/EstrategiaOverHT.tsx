import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface Jogo {
  id: number;
  timeCasa: string;
  timeFora: string;
  appm: number;
  cg: number;
  campeonato: string;
  status: string;
}

const EstrategiaOverHT = () => {
  const [jogos, setJogos] = useState<Jogo[]>([]);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/jogos");
        setJogos(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    };

    const interval = setInterval(fetchJogos, 5000);
    return () => clearInterval(interval);
  }, []);

  const jogosComAlerta = jogos.filter((jogo) => jogo.appm >= 2 && jogo.cg >= 5);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📈 Estratégia Over HT</h1>

      {jogosComAlerta.length > 0 ? (
        jogosComAlerta.map((jogo) => (
          <Card
            key={jogo.id}
            className="p-4 mb-4 bg-yellow-100 border-l-4 border-yellow-600 shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">
                  ⚽ {jogo.timeCasa} x {jogo.timeFora}
                </p>
                <p className="text-sm text-gray-700">
                  APPM: {jogo.appm} | CG: {jogo.cg}
                </p>
                <p className="text-sm text-gray-600">{jogo.campeonato}</p>
              </div>
              <AlertTriangle className="text-yellow-600 w-6 h-6" />
            </div>
          </Card>
        ))
      ) : (
        <p className="text-gray-600">Nenhum jogo com sinal de Over HT no momento.</p>
      )}
    </div>
  );
};

export default EstrategiaOverHT;
