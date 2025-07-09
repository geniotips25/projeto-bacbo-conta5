const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Servidor simples funcionando!');
});

app.listen(PORT, () => {
  console.log(`🟢 Servidor simples rodando na porta ${PORT}`);
});
