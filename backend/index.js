const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 4000;

// ✅ Dados do bot do Telegram
const TELEGRAM_BOT_TOKEN = '7442744473:AAFGcySvF6QuViSb0GeORRP-IXxS24sunQ';
const TELEGRAM_CHAT_ID = '-1001867650697';

app.use(cors());
app.use(bodyParser.json());

// ✅ Endpoint para envio de alerta manual
app.post('/send-alert', async (req, res) => {
  const { message } = req.body;
  try {
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }
    );
    res.status(200).send('✅ Alerta enviado!');
  } catch (error) {
    console.error('❌ Erro ao enviar para o Telegram:', error);
    res.status(500).send('Erro ao enviar alerta');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
