import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Definição do tipo de jogo esperado pela API
interface Jogo {
  liga: string;
  tempo: string;
  casa: string;
  fora: string;
  golsCasa: number;
  golsFora: number;
  APPM: number;
  CG: number;
  estrategias: number; // 1 = critérios atendidos
}

const Funil10min: React.FC = () => {
  const [jogos, setJogos] = useState<Jogo[]>([]);

  const buscarJogos = async () => {
    try {
      const res = await axios.get<Jogo[]>('http://localhost:4000/api/jogos');
      setJogos(res.data);
    } catch (error) {
      console.error('❌ Erro ao buscar jogos:', error);
    }
  };

  useEffect(() => {
    buscarJogos();
    const intervalo = setInterval(buscarJogos, 30000); // Atualiza a cada 30s
    return () => clearInterval(intervalo);
  }, []);

  const enviarAlerta = async (mensagem: string) => {
    try {
      await axios.post('http://localhost:4000/api/enviar-alerta', { mensagem });
      alert('✅ Alerta enviado!');
    } catch (err) {
      console.error('❌ Erro ao enviar alerta:', err);
      alert('❌ Erro ao enviar alerta!');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🎯 Funil de Escanteios (10 minutos)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jogos.length === 0 && (
          <p className="text-gray-500">⏳ Aguardando dados ao vivo...</p>
        )}

        {jogos.map((jogo, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow-md border border-gray-200">
            <p className="text-sm text-gray-600">🏆 {jogo.liga}</p>
            <p className="font-semibold">⏱ {jogo.tempo} - {jogo.casa} vs {jogo.fora}</p>
            <p className=
