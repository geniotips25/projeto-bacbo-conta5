const axios = require('axios');

async function sendTestMessage() {
  try {
    const res = await axios.post('http://localhost:4000/send-telegram', {
      message: '🚀 Teste de alerta do backend para o Telegram funcionando!'
    });
    console.log('Mensagem enviada:', res.data);
  } catch (error) {
    console.error('❌ Erro ao enviar mensagem:');
    console.error(error.response ? error.response.data : error.message);
  }
}

sendTestMessage();
