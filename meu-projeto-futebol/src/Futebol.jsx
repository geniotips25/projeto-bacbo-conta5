import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Futebol() {
  const [alertaAtivo, setAlertaAtivo] = useState(false);
  const [mensagens, setMensagens] = useState([]);

  // Função para ligar/desligar alerta no backend
  const toggleAlerta = async () => {
    try {
      await axios.post('http://localhost:4000/toggle-alerta', { ativo: novoEstado });
      setAlertaAtivo(novoEstado);
    } catch (err) {
      alert('Erro ao alterar o estado do alerta');
      console.error(err);
    }
  };

  // Exemplo: puxar mensagens (você pode adaptar)
  useEffect(() => {
    // Pode implementar pegar mensagens reais do backend
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h2>⚽ Painel Futebol - Alertas Automáticos</h2>

      <button
        onClick={toggleAlerta}
        style={{
          backgroundColor: alertaAtivo ? 'green' : 'gray',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          marginBottom: 20,
        }}
      >
        {alertaAtivo ? '🔔 Alertas ATIVADOS' : '🔕 Alertas DESATIVADOS'}
      </button>

      <h3>Mensagens enviadas</h3>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: 6,
          height: 200,
          overflowY: 'auto',
          padding: 10,
          backgroundColor: '#f9f9f9',
        }}
      >
        {mensagens.length === 0 && <p>Nenhuma mensagem ainda.</p>}
        {mensagens.map((msg, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}

