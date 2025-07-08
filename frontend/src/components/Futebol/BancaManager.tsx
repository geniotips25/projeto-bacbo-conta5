import React, { useState } from "react";
import * as XLSX from "xlsx";

function BancaManager() {
  const [dados, setDados] = useState<any[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = evt.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setDados(parsedData);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">📊 Gerenciar Banca (Planilha)</h2>

      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="mb-4"
      />

      {dados.length > 0 && (
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-200">
            <tr>
              {Object.keys(dados[0]).map((coluna, idx) => (
                <th key={idx} className="px-2 py-1 border">
                  {coluna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((linha, idx) => (
              <tr key={idx} className="even:bg-gray-50">
                {Object.values(linha).map((valor, colIdx) => (
                  <td key={colIdx} className="px-2 py-1 border">
                    {valor}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BancaManager;
