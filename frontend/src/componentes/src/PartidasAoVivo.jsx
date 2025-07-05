import React from 'react';

// Mock de partidas ao vivo (substitua pela sua API real depois)
const partidas = [
  {
    id: 1,
    campeonato: 'Premier League',
    timeCasa: { nome: 'Manchester City', logo: 'https://media.api-sports.io/football/teams/50.png' },
    timeFora: { nome: 'Liverpool', logo: 'https://media.api-sports.io/football/teams/40.png' },
    placarCasa: 2,
    placarFora: 1,
    minuto: 67,
  },
  {
    id: 2,
    campeonato: 'La Liga',
    timeCasa: { nome: 'Real Madrid', logo: 'https://media.api-sports.io/football/teams/541.png' },
    timeFora: { nome: 'Barcelona', logo: 'https://media.api-sports.io/football/teams/529.png' },
    placarCasa: 0,
    placarFora: 0,
    minuto: 34,
  },
  {
    id: 3,
    campeonato: 'Serie A',
    timeCasa: { nome: 'Juventus', logo: 'https://media.api-sports.io/football/teams/496.png' },
    timeFora: { nome: 'Inter', logo: 'https://media.api-sports.io/football/teams/505.png' },
    placarCasa: 1,
    placarFora: 1,
    minuto: 58,
  },
];

export default function PartidasAoVivo() {
  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Partidas Ao Vivo</h2>

      {partidas.map((jogo) => (
        <div
          key={jogo.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 15px',
            marginBottom: 12,
            borderRadius: 8,
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
          }}
        >
          <div style={{ fontSize: 12, color: '#777', width: 100 }}>{jogo.campeonato}</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={jogo.timeCasa.logo} alt={jogo.timeCasa.nome} style={{ width: 36, height: 36 }} />
              <div style={{ fontSize: 14, fontWeight: '600', marginTop: 4 }}>{jogo.timeCasa.nome}</div>
            </div>

            <div style={{ fontSize: 18, fontWeight: '700' }}>
              {jogo.placarCasa} - {jogo.placarFora}
            </div>

            <div style={{ textAlign: 'center' }}>
              <img src={jogo.timeFora.logo} alt={jogo.timeFora.nome} style={{ width: 36, height: 36 }} />
              <div style={{ fontSize: 14, fontWeight: '600', marginTop: 4 }}>{jogo.timeFora.nome}</div>
            </div>
          </div>

          <div style={{ textAlign: 'right', width: 70 }}>
            <div
              style={{
                backgroundColor: '#e63946',
                color: '#fff',
                fontWeight: '700',
                borderRadius: 4,
                padding: '2px 6px',
                fontSize: 12,
                marginBottom: 4,
              }}
            >
              AO VIVO
            </div>
            <div style={{ fontSize: 14, fontWeight: '600' }}>{jogo.minuto}'</div>
          </div>
        </div>
      ))}
    </div>
  );
}
