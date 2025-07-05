import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Resultados from './pages/Resultados';
import Futebol from './components/Futebol';
import LayoutBacbo from './components/LayoutBacbo'; // Adicione isso

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 space-x-4">
          <Link to="/" className="text-blue-500">Home</Link>
          <Link to="/resultados" className="text-blue-500">Resultados</Link>
          <Link to="/futebol" className="text-blue-500">Futebol</Link>
          <Link to="/bacbo" className="text-blue-500">BacBo</Link> {/* Botão novo */}
        </nav>

        <Routes>
          <Route path="/" element={<h1 className="text-xl">Página Inicial</h1>} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/futebol" element={<Futebol />} />
          <Route path="/bacbo" element={<LayoutBacbo />} /> {/* Rota nova */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

