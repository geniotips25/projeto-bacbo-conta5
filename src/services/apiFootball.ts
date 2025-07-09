const API_KEY = '01691f3f2ed8846ce628bcf46204a6b2';
const BASE = 'https://v3.football.api-sports.io';

export async function fetchLiveMatches() {
  const res = await fetch(`${BASE}/fixtures?live=all&timezone=America/Sao_Paulo`, {
    headers: { 'x-apisports-key': API_KEY }
  });
  const json = await res.json();
  return json.response;
}
