import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GraficosAoVivo = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const res = await axios.get('http://localhost:4000/futebol/ao-vivo');
        setJogos(res.data.jogos);
      } catch (err) {
        console.error('Erro ao carregar dados ao vivo:', err.message);
      }
    };

    fetchDados();
    const interval = setInterval(fetchDados, 30000); // atualiza a cada 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {jogos.map((jogo, i) => (
        <div key={i} className="bg-gray-800 p-4 rounded-xl shadow-xl">
          <h2 className="text-white font-bold">{jogo.casa} x {jogo.fora}</h2>
          <p className="text-green-400">Tempo: {jogo.tempo}min</p>
          <p className="text-yellow-400">APPM: {jogo.appm?.toFixed(2)}</p>
          <p className="text-blue-400">CG: {jogo.cg}</p>
        </div>
      ))}
    </div>
  );
};

export default GraficosAoVivo;
