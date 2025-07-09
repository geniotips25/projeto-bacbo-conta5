import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AppBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Login', path: '/' },
    { label: '🎲 BacBo', path: '/bacbo' },
    { label: '📊 Resultados', path: '/resultados' },
    { label: '⚽ Futebol', path: '/futebol' },
  ];

  return (
    <div className="w-full bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-lg font-bold">🔥 Projeto BacBo & Futebol</h1>
      <div className="flex gap-2">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <Button
              variant={location.pathname === item.path ? 'default' : 'outline'}
              className="text-sm"
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
