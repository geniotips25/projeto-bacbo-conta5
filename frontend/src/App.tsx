import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AlertaAoVivo from "./components/AlertaAoVivo";
import Login from "./Login";
import LayoutBacbo from "./components/LayoutBacbo";

import Funildeescanteiosde10minutosnabet365 from "./pages/Estrategias/Funildeescanteiosde10minutosnabet365";
import EstrategiaFunilCantosNoLimite from "./pages/Estrategias/EstrategiaFunilCantosNoLimite";
import EstrategiaAmbosMarcam from "./pages/Estrategias/EstrategiaAmbosMarcam";
import EstrategiaZoiao from "./pages/Estrategias/EstrategiaZoiao";
import EstrategiaOverHT from "./pages/Estrategias/EstrategiaOverHT";
import EstrategiaGol1T from "./pages/Estrategias/EstrategiaGol1T";
import EstrategiaFunilOverGol from "./pages/Estrategias/EstrategiaFunilOverGol";

const App: React.FC = () => {
  return (
    <Router>
      {/* Alerta global no topo */}
      <AlertaAoVivo />

      <Routes>
        {/* Rota pública */}
        <Route path="/" element={<Login />} />

        {/* Rota protegida com layout de estratégias */}
        <Route path="/bacbo" element={<LayoutBacbo />}>
          <Route path="funil-10min" element={<Funildeescanteiosde10minutosnabet365 />} />
          <Route path="cantos-no-limite" element={<EstrategiaFunilCantosNoLimite />} />
          <Route path="ambos-marcam" element={<EstrategiaAmbosMarcam />} />
          <Route path="zoiao" element={<EstrategiaZoiao />} />
          <Route path="over-ht" element={<EstrategiaOverHT />} />
          <Route path="gol-1t" element={<EstrategiaGol1T />} />
          <Route path="funil-over-gol" element={<EstrategiaFunilOverGol />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
