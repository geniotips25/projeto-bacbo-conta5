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
    origin: "*", // Permite acesso do frontend
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Novo cliente conectado:", socket.id);

  // Enviar alerta ao cliente
  socket.emit("alerta", {
    mensagem: "⚠️ Estratégia Over HT detectada! APPM ≥ 2 e CG ≥ 5.",
    jogo: "Time A vs Time B",
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

app.get("/api/ping", (req, res) => {
  res.json({ status: "Backend online!" });
});

server.listen(4000, () => {
  console.log("🚀 Servidor rodando em http://localhost:4000");
});
