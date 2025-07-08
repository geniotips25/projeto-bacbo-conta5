const express = require("express");
const http = require("http");
const cors = require("cors");
const axios = require("axios");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// ✅ Função para enviar alerta ao Telegram e frontend
const enviarAlerta = async (alerta) => {
  const mensagem = `
🚨 *ALERTA DE ESTRATÉGIA*: ${alerta.estrategia}
🕑 ${alerta.horario}
🏟️ ${alerta.jogo}
📊 APPM: ${alerta.appm}
📈 CG: ${alerta.cg}
🔍 [Pesquisar no Google](${alerta.linkGoogle})
`;

  try {
    // ✅ Envia para o Telegram usando o token do seu bot
    await axios.post(
      `https://api.telegram.org/bot8081957399:AAHrNotDuFgx1M5Zo8mBXKEcjGYzS88_8Pc/sendMessage`,
      {
        chat_id: "-1867650697",     // ID do seu canal/grupo atualizado
        text: mensagem,
        parse_mode: "Markdown",
        disable_web_page_preview: true
      }
    );
    console.log("✅ Alerta enviado para o Telegram");
  } catch (err) {
    console.error("❌ Erro ao enviar para o Telegram:", err.response?.data || err.message);
  }

  // ✅ Envia para o frontend via WebSocket
  io.emit("alerta-estrategia", alerta);
};

// ✅ Endpoint público para envio de alertas
app.post("/enviar-alerta", (req, res) => {
  const alerta = req.body;
  enviarAlerta(alerta);
  res.send({ status: "ok" });
});

// ✅ WebSocket
io.on("connection", (socket) => {
  console.log("✅ Cliente conectado via WebSocket");
});

server.listen(4000, () => {
  console.log("🚀 Backend rodando na porta 4000");
});
