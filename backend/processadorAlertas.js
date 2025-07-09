const { emitirAlertaSocket, getAlertasAtivos } = require("./index");
const axios = require("axios");

// ⚙️ Função para processar dados de jogos e disparar alertas
function processarJogo(jogo) {
  if (!getAlertasAtivos()) return;

  const { timeA, timeB, appm, cg } = jogo;

  if (appm >= 2 && cg >= 5) {
    const mensagem = `⚠️ Estratégia Over HT ativada!\n📊 APPM: ${appm} | CG: ${cg}`;
    const nomeJogo = `${timeA} vs ${timeB}`;

    // Envia para frontend via socket
    emitirAlertaSocket(nomeJogo, mensagem);

    // Envia para Telegram
    enviarParaTelegram(`${mensagem}\n🔍 ${nomeJogo}\n📎 https://www.google.com/search?q=${encodeURIComponent(nomeJogo)}`);
  }
}

// 🔗 Função para enviar mensagem ao Telegram
function enviarParaTelegram(mensagem) {
  const token = "SEU_TOKEN_DO_BOT";
  const chatId = "SEU_CHAT_ID";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  axios.post(url, {
    chat_id: chatId,
    text: mensagem,
  })
  .then(() => console.log("📩 Alerta enviado ao Telegram!"))
  .catch((err) => console.error("❌ Erro ao enviar Telegram:", err.message));
}

module.exports = { processarJogo };
