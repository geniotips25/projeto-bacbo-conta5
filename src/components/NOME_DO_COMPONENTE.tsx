<button
  onClick={() => {
    fetch('http://localhost:4000/send-alert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: '🚨 Alerta Ativado - Estratégia Funil de Escanteios em andamento!',
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert('✅ Alerta enviado ao Telegram com sucesso!');
        } else {
          alert('❌ Erro ao enviar alerta. Verifique o backend.');
        }
      })
      .catch((err) => {
        console.error('Erro ao enviar alerta:', err);
        alert('❌ Erro de rede ao enviar alerta ao Telegram');
      });
  }}
>
  Enviar Alerta Telegram
</button>
