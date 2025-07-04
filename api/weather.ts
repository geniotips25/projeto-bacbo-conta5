import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const city = req.query.city || 'Rio de Janeiro';
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  try {
    const { data } = await axios.get(
      \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric&lang=pt_br\`
    );

    res.status(200).json({
      cidade: data.name,
      clima: data.weather[0].description,
      temperatura: data.main.temp,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clima' });
  }
}
