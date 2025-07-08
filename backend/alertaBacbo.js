const axios = require('axios');

// ⚙️ Substitua por seu token e ID do canal/grupo
const TELEGRAM_TOKEN = 'SEU_TOKEN_AQUI'; // Ex: 123456:ABC...
const TELEGRAM_CHANNEL_ID = '@nomeDoCanalOuGrupo'; // Ex: @rfvipbacbo

async function enviarAlertaBacbo(padrao, corRecomendada, protegerEmpate = true) {
  const mensagem = `
💎 [VIP] RF DADOS PREMIUM - BAC BO 🎲
💰 ENTRADA CONFIRMADA 💰
🎲 Padrão: ${padrao}

💰 Entre na cor ${corRecomendada}

${protegerEmpate ? "👉 Proteger o empate🟠" : ""}
💬 Recomendo fazer até G1

Jogue com responsabilidade, aposta não é investimento!

👉 [Melhor Plataforma - Aposte aqui ✅](https://m.esportesdasorte.bet.br/ptb/games/livecasino/detail/18280/evol_BacBo00000000001_BRL)
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHANNEL_ID,
      text: mensagem,
      parse_mode: "Markdown"
    });
    console.log("✅ Alerta BacBo enviado para o canal/grupo!");
  } catch (error) {
    console.error("❌ Erro ao enviar alerta BacBo:", error.message);
  }
}

// Teste de envio
enviarAlertaBacbo("Quebra xadrez", "🔴");
