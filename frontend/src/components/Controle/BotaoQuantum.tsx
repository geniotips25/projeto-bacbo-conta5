import React, { useState } from 'react';

const BotaoQuantum: React.FC = () => {
  const [ativo, setAtivo] = useState<boolean>(false);

  const ativar = () => {
    setAtivo(!ativo);
    if (!ativo && typeof window !== 'undefined') {
      const synth = window.speechSynthesis;
      const msg = new SpeechSynthesisUtterance('Computação Quântica Ativada!');
      synth.speak(msg);
    }
  };

  return (
    <button
      onClick={ativar}
      style={{
        background: ativo ? '#6f42c1' : '#202020',
        color: '#fff',
        border: '2px solid #6f42c1',
        padding: '10px 20px',
        borderRadius: '12px',
        fontWeight: 'bold',
        marginBottom: '20px',
        cursor: 'pointer'
      }}
    >
      ⚛️ {ativo ? 'Computação Quântica Ativa' : 'Ativar Computação Quântica'}
    </button>
  );
};

export default BotaoQuantum;
