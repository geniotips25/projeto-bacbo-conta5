const API_KEY = '01691f3f2ed8846ce628bcf46204a6b2';

const BASE_URL = 'https://v3.football.api-sports.io';

export async function fetchLiveMatches() {
  const response = await fetch(`${BASE_URL}/fixtures?live=all`, {
    headers: {
      'x-apisports-key': API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar partidas ao vivo');
  }

  const data = await response.json();
  return data.response;
}
