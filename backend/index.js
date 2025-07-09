const express = require("express");
const http = require("http");
const cors = require("cors");
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

// Estado global de controle dos alertas
let alertasAtivos = false;

// Socket.io conexão
io.on("connection", (socket) => {
  console.log("🟢 Novo cliente conectado:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 Cliente desconectado:", socket.id);
  });
});

// Endpoint de teste
app.get("/api/ping", (req, res) => {
  res.json({ status: "✅ Backend online!" });
});

// Endpoint para ativar ou desativar os alertas
app.post("/toggle-alertas", (req, res) => {
  const { ativo } = req.body;
  alertasAtivos = ativo;
  console.log("🔁 Alertas agora estão:", ativo ? "ATIVOS ✅" : "DESATIVADOS ❌");
  res.json({ sucesso: true });
});

// Função para emitir alerta por socket
function emitirAlertaSocket(jogo, mensagem) {
  if (alertasAtivos) {
    io.emit("alerta", { jogo, mensagem });
    console.log("🚨 Alerta emitido para todos os clientes!");
  } else {
    console.log("🔕 Alertas desativados. Nenhum alerta enviado.");
  }
}

// Exportar funções
module.exports = {
  emitirAlertaSocket,
  getAlertasAtivos: () => alertasAtivos,
};

// Iniciar servidor
server.listen(4000, () => {
  console.log("🚀 Servidor rodando em http://localhost:4000");
});
