import axios from 'axios';

const API_KEY = '01691f3f2ed8846ce628bcf46204a6b2';

const apiFootball = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-apisports-key': API_KEY,
  },
});

export const buscarJogosAoVivo = async () => {
  try {
    const response = await apiFootball.get('/fixtures?live=all');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar jogos ao vivo:', error);
    return null;
  }
};
