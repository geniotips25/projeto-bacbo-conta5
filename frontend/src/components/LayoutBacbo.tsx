import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const LayoutBacbo: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">📊 Estratégias</h2>
        <nav className="flex flex-col space-y-2">
          <Link
            to="/bacbo/funil-10min"
            className={location.pathname.includes("funil-10min") ? "text-blue-600 font-semibold" : ""}
          >
            Funil de Escanteios (10min)
          </Link>
          <Link
            to="/bacbo/cantos-no-limite"
            className={location.pathname.includes("cantos-no-limite") ? "text-blue-600 font-semibold" : ""}
          >
            Cantos no Limite
          </Link>
          <Link
            to="/bacbo/ambos-marcam"
            className={location.pathname.includes("ambos-marcam") ? "text-blue-600 font-semibold" : ""}
          >
            Ambos Marcam
          </Link>
          <Link
            to="/bacbo/zoiao"
            className={location.pathname.includes("zoiao") ? "text-blue-600 font-semibold" : ""}
          >
            Estratégia Zoião
          </Link>
          <Link
            to="/bacbo/over-ht"
            className={location.pathname.includes("over-ht") ? "text-blue-600 font-semibold" : ""}
          >
            Over HT
          </Link>
          <Link
            to="/bacbo/gol-1t"
            className={location.pathname.includes("gol-1t") ? "text-blue-600 font-semibold" : ""}
          >
            Gol 1º Tempo
          </Link>
          <Link
            to="/bacbo/funil-over-gol"
            className={location.pathname.includes("funil-over-gol") ? "text-blue-600 font-semibold" : ""}
          >
            Funil Over Gol
          </Link>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutBacbo;
