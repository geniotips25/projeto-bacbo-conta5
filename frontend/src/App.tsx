import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resultados from "./pages/Resultados";
import Futebol from "./futebol/Futebol"; // ajuste se o nome do componente principal for diferente

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", display: "flex", gap: "10px" }}>
        <Link to="/">Resultados</Link>
        <Link to="/futebol">Futebol</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Resultados />} />
        <Route path="/futebol" element={<Futebol />} />
      </Routes>
    </Router>
  );
}

export default App;
