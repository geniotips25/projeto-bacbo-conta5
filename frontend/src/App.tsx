import { Routes, Route, Link } from 'react-router-dom';
import Resultados from './pages/Resultados';

function App() {
  return (
    <div className="p-4">
      <nav className="mb-4 space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/resultados" className="text-blue-500">Resultados</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1 className="text-xl">Página Inicial</h1>} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
    </div>
  );
}

export default App;
