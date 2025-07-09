import React from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const EstrategiaOverHT = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">Estratégia Over HT</h1>

      <Card className="p-4 bg-gray-800 rounded-xl shadow-lg">
        <div className="flex items-center gap-2 text-yellow-400">
          <AlertTriangle />
          <span>Exemplo de alerta para estratégia Over HT</span>
        </div>
      </Card>
    </div>
  );
};

export default EstrategiaOverHT;
