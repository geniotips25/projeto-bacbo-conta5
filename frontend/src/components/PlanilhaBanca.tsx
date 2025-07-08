function PlanilhaBanca() {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">📊 Planilha de Gerenciamento de Banca</h2>
      <p>Em breve: conexão com Excel ou Google Sheets em tempo real.</p>

      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Data</th>
            <th className="border px-2 py-1">Aposta</th>
            <th className="border px-2 py-1">Retorno</th>
            <th className="border px-2 py-1">Saldo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">05/07</td>
            <td className="border px-2 py-1">+R$100</td>
            <td className="border px-2 py-1">R$150</td>
            <td className="border px-2 py-1">R$50</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">06/07</td>
            <td className="border px-2 py-1">-R$50</td>
            <td className="border px-2 py-1">R$0</td>
            <td className="border px-2 py-1">-R$50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PlanilhaBanca;
