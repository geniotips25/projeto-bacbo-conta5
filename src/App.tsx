import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import BacBo from './pages/BacBo';
import Resultados from './pages/Resultados';
import Futebol from './pages/Futebol';
import Funildeescanteiosde10minutosnabet365 from './components/Futebol/Funildeescanteiosde10minutosnabet365'; // ✅ Nova importação

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bacbo" element={<BacBo />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/futebol" element={<Futebol />} />

        {/* ✅ Nova rota para a estratégia do funil */}
        <Route path="/estrategias/funil-10min" element={<Funildeescanteiosde10minutosnabet365 />} />
      </Routes>
    </Router>
  );
}

export default App;
