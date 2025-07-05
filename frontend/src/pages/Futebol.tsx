import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function Futebol() {
  const [jogos, setJogos] = useState<any[]>([]);
  const [alertasLigados, setAlertasLigados] = useState(false);
  const [tempoMinimo, setTempoMinimo] = useState(3);
  const ultimaMensagem = useRef<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      buscarJogos();
    }, 10000); // a cada 10 segundos
    return () => clearInterval(interval);
  }, [alertasLigados, tempoMinimo]);

  async function buscarJogos() {
    try {
      const resposta = await axios.get('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', {
        headers: {
          'X-RapidAPI-Key': 'SUA_API_KEY_AQUI',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        },
      });

      const dados = resposta.data.response || [];
      setJogos(dados);

      if (alertasLigados) {
        dados.forEach((jogo: any) => {
          const tempo = parseInt(jogo.fixture.status.elapsed || 0);
          const gols = jogo.goals.home + jogo.goals.away;
          const mensagem = `${jogo.teams.home.name} ${jogo.goals.home} x ${jogo.goals.away} ${jogo.teams.away.name} aos ${tempo} min`;

          if (tempo >= tempoMinimo && mensagem !== ultimaMensagem.current) {
            ultimaMensagem.current = mensagem;

            axios.post('http://localhost:4000/send-telegram', { mensagem })
              .then(() => console.log('✅ Enviado:', mensagem))
              .catch(() => console.error('❌ Erro ao enviar mensagem'));
          }
        });
      }

    } catch (erro) {
      console.error('Erro ao buscar jogos:', erro);
    }
  }

  return (
    <div>
      <h2>Futebol Ao Vivo</h2>
      <label>
        <input
          type="checkbox"
          checked={alertasLigados}
          onChange={() => setAlertasLigados(!alertasLigados)}
        />
        Alertas Ativados
      </label>
      <br />
      <label>
        Tempo mínimo (min):{' '}
        <input
          type="number"
          value={tempoMinimo}
          onChange={(e) => setTempoMinimo(parseInt(e.target.value))}
        />
      </label>
      <ul>
        {jogos.map((jogo, idx) => (
          <li key={idx}>
            {jogo.teams.home.name} {jogo.goals.home} x {jogo.goals.away} {jogo.teams.away.name} ({jogo.fixture.status.elapsed} min)
          </li>
        ))}
      </ul>
    </div>
  );
}
