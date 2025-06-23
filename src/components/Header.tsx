
import React from 'react';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '../contexts/PortfolioContext';

const Header = () => {
  const { isAdmin, setIsAdmin } = usePortfolio();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Portfolio</h1>
        <Button
          onClick={() => setIsAdmin(!isAdmin)}
          variant={isAdmin ? "destructive" : "default"}
          size="sm"
        >
          {isAdmin ? 'Exit Admin' : 'Admin Mode'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
