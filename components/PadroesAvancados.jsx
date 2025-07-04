import React from 'react';

const padroes = [
  { id: 1, tipo: "Player vence 3x seguidas", chance: "78%", nivel: "Avançado" },
  { id: 2, tipo: "Soma 9 repetida", chance: "74%", nivel: "Avançado" },
  { id: 3, tipo: "Empate após 2 Player", chance: "72%", nivel: "Avançado" },
  { id: 4, tipo: "Banker ganha com soma 11", chance: "70%", nivel: "Avançado" },
  { id: 5, tipo: "Alternância Banker/Player", chance: "69%", nivel: "Avançado" },
  { id: 6, tipo: "Soma baixa (3~6) 2x seguidas", chance: "68%", nivel: "Avançado" },
  { id: 7, tipo: "Soma 7 no empate", chance: "67%", nivel: "Avançado" },
  { id: 8, tipo: "Player seguido de Banker 3x", chance: "65%", nivel: "Avançado" },
  { id: 9, tipo: "Banker repete após empate", chance: "64%", nivel: "Avançado" },
  { id: 10, tipo: "2 empates em 5 rodadas", chance: "62%", nivel: "Avançado" },
  { id: 11, tipo: "Empate seguido de Player", chance: "61%", nivel: "Avançado" },
  { id: 12, tipo: "Banker soma 10 depois de 6", chance: "60%", nivel: "Avançado" },
  { id: 13, tipo: "Player + Player + Empate", chance: "59%", nivel: "Avançado" },
  { id: 14, tipo: "Banker após 3 Players", chance: "58%", nivel: "Avançado" },
  { id: 15, tipo: "Sequência 5x alternado", chance: "57%", nivel: "Avançado" },
  { id: 16, tipo: "Soma alta (10~12) após baixa", chance: "56%", nivel: "Avançado" },
  { id: 17, tipo: "3x Empate nas últimas 10", chance: "55%", nivel: "Avançado" },
  { id: 18, tipo: "Empate + Player + Banker", chance: "54%", nivel: "Avançado" },
  { id: 19, tipo: "Soma 8 ou 9 após empate", chance: "53%", nivel: "Avançado" },
  { id: 20, tipo: "Rodada com diferença mínima (1 ponto)", chance: "52%", nivel: "Avançado" },
];

const PadroesAvancados = () => {
  return (
    <div style={{ background: '#101010', color: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>🔥 20 Melhores Padrões Avançados do Bac Bo</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {padroes.map((p) => (
          <li key={p.id} style={{
            background: '#1a1a1a',
            margin: '8px 0',
            padding: '12px',
            borderLeft: '5px solid #00ffaa',
            borderRadius: '8px'
          }}>
            <strong>#{p.id}</strong> – {p.tipo} <br />
            <span style={{ color: '#0f0' }}>Chance: {p.chance}</span> · <span style={{ color: '#f0f' }}>Nível: {p.nivel}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PadroesAvancados;
