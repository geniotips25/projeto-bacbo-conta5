const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json()); // ✅ necessário para receber JSON via POST

const PORT = 4000;

// ✅ API-KEY da API-FOOTBALL
const API_KEY = '09fd0ddab95ec7a0cd51baa934e36d60';
const BASE_URL = 'https://v3.football.api-sports.io';

// ✅ Dados do bot do Telegram
const TELEGRAM_BOT_TOKEN = '7442744473:AAFGcySvF6QuViSb0GeORRP-IXxS24sunQ';
const TELEGRAM_CHAT_ID = '-1001867650697';

// 🚨 Função para enviar alerta ao Telegram
const enviarAlertaTelegram = async (mensagem) => {
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: mensagem,
      parse_mode: 'HTML',
    });
    console.log('✅ Alerta enviado com sucesso');
  } catch (error) {
    console.error('❌ Erro ao enviar alerta:', error.message);
  }
};

// ✅ Rota básica
app.get('/', (req, res) => {
  res.send('✅ API Futebol está online');
});

// ✅ Rota GET para buscar jogos e verificar estratégia
app.get('/api/jogos', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/fixtures`, {
      params: { live: 'all' },
      headers: { 'x-apisports-key': API_KEY },
    });

    const data = response.data.response;

    const jogosFiltrados = data.map((jogo) => {
      const tempo = jogo.fixture.status.elapsed || 0;

      // 🔁 Simulando APPM e CG
      const APPM = Math.floor(Math.random() * 4);
      const CG = Math.floor(Math.random() * 10);
      const balanceamentoOdds = Math.floor(Math.random() * 10);
      const jogoImportante = true;
      const timeOfensivo = true;

      const atendeCriterios =
        APPM >= 2 &&
        CG >= 5 &&
        balanceamentoOdds >= 6 &&
        jogoImportante &&
        timeOfensivo &&
        tempo >= 10;

      if (atendeCriterios) {
        const mensagem = `⚽ <b>ALERTA DE ESTRATÉGIA</b>\n\n` +
          `🏆 Liga: ${jogo.league.name}\n` +
          `⏱️ Tempo: ${tempo} minutos\n` +
          `🔴 ${jogo.teams.home.name} vs ${jogo.teams.away.name}\n` +
          `📊 APPM: ${APPM} | CG: ${CG} | Odds: ${balanceamentoOdds}\n` +
          `🔍 <a href="https://www.google.com/search?q=${jogo.teams.home.name}">Buscar Jogo no Google</a>`;

        enviarAlertaTelegram(mensagem);
      }

      return {
        liga: jogo.league.name,
        tempo: `${tempo}'`,
        casa: jogo.teams.home.name,
        fora: jogo.teams.away.name,
        golsCasa: jogo.goals.home,
        golsFora: jogo.goals.away,
        APPM,
        CG,
        estrategias: atendeCriterios ? 1 : 0,
      };
    });

    res.json(jogosFiltrados.slice(0, 20));
  } catch (error) {
    console.error('Erro ao buscar dados da API-FOOTBALL:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar dados da API-FOOTBALL' });
  }
});

// ✅ Rota POST para alertas manuais (frontend)
app.post('/api/enviar-alerta', async (req, res) => {
  const { mensagem } = req.body;

  try {
    await enviarAlertaTelegram(mensagem);
    res.status(200).send({ success: true });
  } catch (error) {
    console.error('❌ Erro ao enviar alerta manual:', error.message);
    res.status(500).send({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});
