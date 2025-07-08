import React, { useEffect, useState } from "react";
import axios from "axios";

interface Jogo {
  id: string;
  timeCasa: string;
  timeFora: string;
  appm: number;
  cg: number;
}

const EstrategiaOverHT: React.FC = () => {
  const [jogos, setJogos] = useState<Jogo[]>([]);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/jogos");
        const dados = res.data;

        const jogosComAlerta = dados.filter((jogo: Jogo) => {
          return jogo.appm >= 2 && jogo.cg >= 5;
        });

        setJogos(jogosComAlerta);

        jogosComAlerta.forEach(async (jogo) => {
          await axios.post("http://localhost:4000/api/alerta", {
            mensagem: `🔥 OVER HT ATIVO: ${jogo.timeCasa} x ${jogo.timeFora}\nAPPM: ${jogo.appm} | CG: ${jogo.cg}\n🔎 https://www.google.com/search?q=${encodeURIComponent(jogo.timeCasa + " x " + jogo.timeFora)}`
          });
        });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    const intervalo = setInterval(buscarDados, 60000); // a cada 60s
    buscarDados();

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="p-4">
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4 hover:bg-green-700"
        onClick={async () => {
          await axios.post("http://localhost:4000/api/alerta", {
            mensagem: "🔔 Teste de alerta manual para OVER HT"
          });
          alert("Alerta manual enviado para o Telegram!");
        }}
      >
        🔔 Testar alerta manual
      </button>

      <h1 className="text-xl font-bold mb-4">📊 Estratégia Over HT</h1>

      {jogos.length === 0 ? (
        <p>Nenhum jogo atendendo aos critérios no momento.</p>
      ) : (
        <ul className="space-y-2">
          {jogos.map((jogo) => (
            <li
              key={jogo.id}
              className="bg-yellow-100 p-3 rounded-lg shadow border-l-4 border-yellow-500"
            >
              <strong>{jogo.timeCasa} x {jogo.timeFora}</strong><br />
              APPM: {jogo.appm} | CG: {jogo.cg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EstrategiaOverHT;
