import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const OverHT = () => {
  const [alerta, setAlerta] = useState("");

  useEffect(() => {
    socket.on("alerta", (data) => {
      setAlerta(data.mensagem + " ⚽ " + data.jogo);
    });

    return () => {
      socket.off("alerta");
    };
  }, []);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Estratégia: Over HT</h2>
      <p className="text-gray-600">⚽ Esperando alertas de oportunidade no 1º tempo...</p>
      {alerta && (
        <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 font-semibold rounded">
          {alerta}
        </div>
      )}
    </div>
  );
};

export default OverHT;
