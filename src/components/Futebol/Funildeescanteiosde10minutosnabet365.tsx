import { useState } from 'react';

export default function Funildeescanteiosde10minutosnabet365() {
  const [appm, setAppm] = useState(0);
  const [cg, setCg] = useState(0);
  const [timeCasa, setTimeCasa] = useState('');
  const [timeFora, setTimeFora] = useState('');

  const enviarAlerta = () => {
    if (appm >= 2 && cg >= 5) {
      const linkGoogle = `https://www.google.com/search?q=${encodeURIComponent(`${timeCasa} vs ${timeFora} ao vivo`)}`;

      const mensagem = `🚨 Estratégia Funil Ativada!\n${timeCasa} vs ${timeFora}\nAPPM: ${appm} | CG: ${cg}\n\n🔗 Acesso rápido:\n📱 Esportes da Sorte: https://go.aff.esportesdasorte.com/8fg8vj6l\n🎯 Bet365: https://www.bet365.bet.br/hub/pt-br/sports-betting-br?affiliate=365_03740563\n\n🔍 Ver ao vivo:\n${linkGoogle}`;

      fetch('http://localhost:4000/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: mensagem }),
      })
        .then((res) => {
          if (res.ok) {
            alert('✅ Alerta enviado ao Telegram com sucesso!');
          } else {
            alert('❌ Erro ao enviar alerta.');
          }
        })
        .catch((err) => {
          console.error('Erro ao enviar alerta:', err);
          alert('❌ Erro de rede ao enviar alerta');
        });
    } else {
      alert('⚠️ Critérios não atendidos: APPM ≥ 2 e CG ≥ 5');
    }
  };

  return (
    <div style={{
      backgroundColor: '#111',
      color: '#eee',
      padding: '24px',
      borderRadius: '12px',
      maxWidth: '600px',
      margin: '40px auto',
      boxShadow: '0 0 20px rgba(0, 255, 128, 0.15)'
    }}>
      <h2 style={{
        color: '#00ff80',
        textAlign: 'center',
        marginBottom: '24px',
        fontSize: '1.6rem'
      }}>
        🎯 Funil de Escanteios - 10 Min
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <input
          type="text"
          placeholder="Time Casa"
          value={timeCasa}
          onChange={(e) => setTimeCasa(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Time Fora"
          value={timeFora}
          onChange={(e) => setTimeFora(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="APPM"
          value={appm}
          onChange={(e) => setAppm(Number(e.target.value))}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="CG"
          value={cg}
          onChange={(e) => setCg(Number(e.target.value))}
          style={inputStyle}
        />
        <button
          onClick={enviarAlerta}
          style={{
            backgroundColor: '#00b36b',
            color: '#fff',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background 0.3s',
          }}
        >
          🚨 Enviar Alerta Telegram
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #444',
  backgroundColor: '#1a1a1a',
  color: '#eee',
  fontSize: '15px',
};
