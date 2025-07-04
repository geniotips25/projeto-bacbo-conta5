// utils/fetchBacboData.ts
import axios from "axios";
import * as cheerio from "cheerio";
import type { BacBoGame } from "@/types";

export async function fetchBacboData(): Promise<BacBoGame[]> {
  try {
    const response = await axios.get("https://www.tipminer.com/br/historico/jonbet/bac-bo", {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const $ = cheerio.load(response.data);
    const games: BacBoGame[] = [];

    $(".history__row").each((_, el) => {
      const playerText = $(el).find(".history__row-player").text().trim();
      const bankerText = $(el).find(".history__row-banker").text().trim();
      const resultText = $(el).find(".history__row-result").text().trim().toLowerCase();
      const dateText = $(el).find(".history__row-date").text().trim();

      if (!playerText || !bankerText) return;

      const player = playerText
        .split("+")
        .map((n) => parseInt(n.trim()))
        .reduce((a, b) => a + b, 0);

      const banker = bankerText
        .split("+")
        .map((n) => parseInt(n.trim()))
        .reduce((a, b) => a + b, 0);

      games.push({
        player,
        banker,
        result: resultText as BacBoGame["result"],
        timestamp: dateText,
      });
    });

    return games;
  } catch (err) {
    console.error("Erro ao buscar dados externos:", err.message);
    return [];
  }
}
