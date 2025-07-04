const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const TELEGRAM_TOKEN = '8147876704:AAE9WXFiyCTgmGWAfgbASc_dR6Pk7qSOpps';
const CHAT_ID = '1483291576'; // Seu ID do Telegram
const API_KEY_FUTEBOL = '324f494f6a95faa881ce8a18ad292591'; // Chave da API-Football

// 🔁 Verifica jogos ao vivo a cada 1 minuto
setInterval(buscarEventosAoVivo, 60000);

async function buscarEventosAoVivo() {
  try {
    const res = await axios.get('https://v3.football.api-sports.io/fixtures?live=all', {
      headers: { 'x-apisports-key': API_KEY_FUTEBOL },
    });

    const jogos = res.data.response;

    for (let jogo of jogos) {
      const timeCasa = jogo.teams.home.name;
      const timeFora = jogo.teams.away.name;
      const golsCasa = jogo.goals.home;
      const golsFora = jogo.goals.away;
      const tempo = jogo.fixture.status.elapsed;

      const estatisticas = jogo.statistics || [];
      const ataquesPerigosos = estatisticas.find(e => e.type === "Attacks")?.statistics?.[1]?.value || 0;
      const escanteios = jogo.statistics?.[0]?.statistics?.find(e => e.type === "Corner Kicks")?.value || 0;

      const mensagem = `⚽ GOL ou Evento em ${timeCasa} x ${timeFora} (${tempo} min)\nPlacar: ${golsCasa} x ${golsFora}`;
      
      if (tempo <= 15) {
        await enviarTelegram(mensagem);
        console.log('✅ Alerta automático enviado');
      }
    }

  } catch (error) {
    console.error('❌ Erro ao buscar partidas:', error.message);
  }
}

async function enviarTelegram(mensagem) {
  await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    text: mensagem,
  });
}

// Endpoint manual também
app.post('/send-telegram', async (req, res) => {
  const { message } = req.body;
  try {
    await enviarTelegram(message);
    res.json({ status: 'Mensagem enviada com sucesso' });
  } catch (err) {
    res.status(500).json({ status: 'Erro ao enviar mensagem', erro: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend rodando na porta ${PORT}`);
});
