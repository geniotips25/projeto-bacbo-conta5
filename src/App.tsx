import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import BacBo from './pages/BacBo';
import Resultados from './pages/Resultados';
import Futebol from './pages/Futebol';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bacbo" element={<BacBo />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/futebol" element={<Futebol />} /> {/* ✅ Rota funcional */}
      </Routes>
    </Router>
  );
}

export default App;
