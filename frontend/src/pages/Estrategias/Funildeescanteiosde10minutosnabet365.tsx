import React from "react";
import Alerta from "../../components/Futebol/Alerta";
import BotaoTesteAlerta from "../../components/BotaoTesteAlerta";

export default function Funildeescanteiosde10minutosnabet365() {
  return (
    <div className="p-6 bg-white rounded shadow-lg max-w-3xl mx-auto mt-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        🎯 Funil de escanteios de 10 minutos na Bet365
      </h1>

      {/* Alerta automático exibido se condições forem atendidas */}
      <Alerta
        estrategia="Funil 10min"
        jogo="Flamengo x Vasco"
        appm={2.1}
        cg={6}
        cb={3}
        cf={3}
      />

      <p className="mt-6 text-gray-800 leading-relaxed">
        Essa estratégia é baseada em momentos de pressão no início do jogo.
        Quando há um <strong>APPM elevado (acima de 2)</strong> e uma
        <strong> soma de chutes no alvo, fora e escanteios (CG) superior a 5</strong>,
        especialmente em jogos importantes, a chance de sair escanteio nos 10 primeiros minutos é alta.
      </p>

      <p className="mt-4 text-gray-700">
        Observamos jogos com perfil ofensivo, equipes que atacam pelas laterais e jogos decisivos
        (título, rebaixamento, eliminatórias).
      </p>

      {/* Botão de teste manual de alerta */}
      <BotaoTesteAlerta />
    </div>
  );
}
