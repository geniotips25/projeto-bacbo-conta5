import React, { useEffect, useState } from 'react';
import './PartidasAoVivo.css';

const PartidasAoVivo = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch('/api/jogos-ao-vivo');
        const data = await response.json();
        setJogos(data);
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      }
    };

    fetchDados();
    const interval = setInterval(fetchDados, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="painel-ao-vivo">
      <h2>⚽ Partidas ao Vivo</h2>
      <div className="lista-jogos">
        {jogos.map((jogo, index) => (
          <div key={index} className="jogo-card">
            <div className="jogo-nomes">{jogo.time1} x {jogo.time2}</div>
            <div className="barra-pressao">
              <div className="barra1" style={{ width: `${jogo.pressao1}%` }}></div>
              <div className="barra2" style={{ width: `${jogo.pressao2}%` }}></div>
            </div>
            <div className="tempo">⏱️ {jogo.tempo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartidasAoVivo;
