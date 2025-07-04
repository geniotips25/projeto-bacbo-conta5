import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const API_KEY = '324f494f6a95faa881ce8a18ad292591';
const headers = { 'x-apisports-key': API_KEY };

export default function Futebol() {
  const [partidas, setPartidas] = useState([]);
  const [alertaAtivo, setAlertaAtivo] = useState(false);
  const [tempoMin, setTempoMin] = useState(90);
  const alertSentRef = useRef(new Set());

  async function fetchPartidas() {
    try {
      const res = await axios.get('https://v3.football.api-sports.io/fixtures?live=all', { headers });
      setPartidas(res.data.response || []);
    } catch (err) {
      console.error('❌ Erro ao buscar partidas:', err.message);
    }
  }

  useEffect(() => {
    fetchPartidas();
    const interval = setInterval(fetchPartidas, 60000);
    return () => clearInterval(interval);
  }, []);

  async function enviarAlertaTelegram(msg) {
    try {
      await axios.post('http://localhost:4000/send-telegram', { message: msg });
      console.log('🚀 Alerta enviado:', msg);
    } catch (err) {
      console.error('❌ Erro ao enviar alerta:', err.message);
    }
  }

  useEffect(() => {
    if (!alertaAtivo) return;

    partidas.forEach(({ fixture, teams, goals }) => {
      const tempoAtual = fixture.status.elapsed;
      const partidaId = fixture.id;

      if (tempoAtual > tempoMin) return;

      if (goals.home > 0 || goals.away > 0) {
        const chave = `gol-${partidaId}-${goals.home}-${goals.away}`;
        if (!alertSentRef.current.has(chave)) {
          alertSentRef.current.add(chave);
          const msg = `⚽ *GOL AO VIVO*\n${teams.home.name} ${goals.home} x ${goals.away} ${teams.away.name}\n⏱ ${tempoAtual} minutos`;
          enviarAlertaTelegram(msg);
        }
      }
    });
  }, [partidas, alertaAtivo, tempoMin]);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h2>📢 Futebol ao Vivo com Alertas</h2>

      <div style={{ marginBottom: 15 }}>
        <label>
          ⏱ Tempo máximo para alertas (min):&nbsp;
          <input
            type="number"
            min="1"
            max="90"
            value={tempoMin}
            onChange={(e) => setTempoMin(Number(e.target.value))}
            disabled={alertaAtivo}
            style={{ width: 60 }}
          />
        </label>
      </div>

      <button
        onClick={() => setAlertaAtivo(!alertaAtivo)}
        style={{
          backgroundColor: alertaAtivo ? '#ff4d4d' : '#4caf50',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: 5
        }}
      >
        {alertaAtivo ? '🔕 Desligar Alertas' : '🔔 Ligar Alertas'}
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: 30 }}>
        {partidas.map(({ fixture, teams, goals }) => (
          <li key={fixture.id} style={{ marginBottom: 15, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
            <strong>{teams.home.name}</strong> {goals.home} x {goals.away} <strong>{teams.away.name}</strong><br />
            <small>Tempo: {fixture.status.elapsed}'</small><br />
            <small>Estádio: {fixture.venue.name || 'Desconhecido'}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}