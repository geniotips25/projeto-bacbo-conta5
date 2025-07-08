const axios = require('axios');

// 🔒 Seu bot do Telegram
const TELEGRAM_TOKEN = '8147876704:AAE9WXFiyCTgmGWAfgbASc_dR6Pk7qSOpps';
const TELEGRAM_CHANNEL_ID = '@botgeniobac'; // ou -100XXXXXXXX se for privado

// 🔁 Histórico de últimas 10 cores (mock, substitua por leitura real futuramente)
let historico = ["🔴", "🔴", "⚫", "⚫", "🟠", "⚫", "🔴", "🟠", "🟠", "🟠"];

// 📌 Estratégias simples de exemplo
function detectarPadrao(historico) {
  const ultimos = historico.slice(-3).join('');

  if (ultimos === '🟠🟠🟠') {
    return { padrao: 'Trinca de Empates', cor: '🔴 ou ⚫', proteger: false };
  }

  if (ultimos === '🔴⚫🔴') {
    return { padrao: 'Alternância Clássica', cor: '⚫', proteger: true };
  }

  if (historico.slice(-2).every(c => c === '🔴')) {
    return { padrao: '2 Vermelhas Seguidas', cor: '⚫', proteger: true };
  }

  return null;
}

// 🔔 Envia mensagem para o Telegram
async function enviarAlerta(padrao, cor, protegerEmpate = true) {
  const mensagem = `
💎 RF Dados Premium - BacBo Estratégia Automática 🎲
📈 Padrão detectado: *${padrao}*

💰 Entrar na cor: *${cor}*
${protegerEmpate ? "🔶 Proteger o Empate" : ""}

🎯 Faça até G1 | Jogue com gestão

👉 [Entrar agora na mesa BacBo](https://m.esportesdasorte.bet.br/ptb/games/livecasino/detail/18280/evol_BacBo00000000001_BRL)
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHANNEL_ID,
      text: mensagem,
      parse_mode: "Markdown"
    });
    console.log("✅ Alerta automático enviado para BacBo!");
  } catch (err) {
    console.error("❌ Erro ao enviar alerta:", err.message);
  }
}

// 🔁 Loop a cada 30s (você pode ajustar para leitura real depois)
setInterval(() => {
  const resultado = detectarPadrao(historico);
  if (resultado) {
    enviarAlerta(resultado.padrao, resultado.cor, resultado.proteger);
  } else {
    console.log("🕒 Nenhum padrão detectado.");
  }

  // 🧪 Simula nova jogada (substituir por leitura real futura)
  const cores = ["🔴", "⚫", "🟠"];
  const novaCor = cores[Math.floor(Math.random() * cores.length)];
  historico.push(novaCor);
  if (historico.length > 20) historico.shift();

}, 30000); // ⏱️ a cada 30 segundos
