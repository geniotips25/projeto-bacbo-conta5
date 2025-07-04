// /api/bacbo-resultados.ts
import { fetchTipMinerData } from "@/utils/fetchTipMiner";
import { generateMockData } from "@/utils/mockGenerator";
import type { BacBoGame } from "@/types";

export default async function handler(req, res) {
  try {
    const games: BacBoGame[] = await fetchTipMinerData();

    if (games.length === 0) {
      console.warn("⚠️ Dados reais vazios, usando mock...");
      const mockGames = generateMockData(50);
      return res.status(200).json({ source: "mock", games: mockGames });
    }

    return res.status(200).json({ source: "real", games });
  } catch (error) {
    console.error("❌ Erro na API:", error);
    const fallback = generateMockData(50);
    return res.status(200).json({ source: "mock", games: fallback });
  }
}
