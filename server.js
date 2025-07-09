const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = 4000;
const API_KEY = 'SUA_API_KEY_DA_API_FOOTBALL';
const BOT_TOKEN = 'SEU_TOKEN_TELEGRAM';
const CHAT_ID = 'SEU_CHAT_ID';

let jogosEnviados = new Set();

app.get('/api/futebol', async (req, res) => {
  try {
    const response = await axios.get('https://v3.football.api-sports.io/fixtures?live=all', {
      headers: {
        'x-apisports-key': API_KEY
      }
    });

    const partidas = response.data.response.slice(0, 20).map((item) => {
      const estatisticas = item.statistics || [];
      const cg = (
        (estatisticas[0]?.statistics?.find(e => e.type === 'Shots on Goal')?.value || 0) +
        (estatisticas[0]?.statistics?.find(e => e.type === 'Shots off Goal')?.value || 0) +
        (estatisticas[0]?.statistics?.find(e => e.type === 'Corner Kicks')?.value || 0)
      );

      const appm = (
        (estatisticas[0]?.statistics?.find(e => e.type === 'Dangerous Attacks')?.value || 0) /
        (item.fixture.status.elapsed || 1)
      ).toFixed(2);

      const estrategias = (cg >= 5 ? 1 : 0) + (appm >= 2 ? 1 : 0);

      // Enviar alerta
      const chave = `${item.teams.home.name}-${item.teams.away.name}`;
      if (estrategias >= 2 && !jogosEnviados.has(chave)) {
        jogosEnviados.add(chave);

        axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: CHAT_ID,
          text: `⚽ Estratégia Ativa!\n${item.teams.home.name} x ${item.teams.away.name}\nCG: ${cg} | APPM: ${appm}`,
        });
      }

      return {
        liga: item.league.name,
        tempo: `${item.fixture.status.elapsed}'`,
        casa: item.teams.home.name,
        fora: item.teams.away.name,
        golsCasa: item.goals.home,
        golsFora: item.goals.away,
        appm: parseFloat(appm),
        cg,
        estrategias,
      };
    });

    res.json(partidas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar jogos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

