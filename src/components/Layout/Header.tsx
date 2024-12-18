import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils/constants';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#011627] border-b border-[#1E2D3D] sticky top-0 z-50">
      <div className="flex items-center">
        <div className="text-[#607B96] px-4 py-4 border-r border-[#1E2D3D]">
          ahmet-deger
        </div>
        <nav className="flex">
          {NAV_ITEMS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-6 py-4 border-r border-[#1E2D3D] hover:bg-[#1E2D3D] transition-colors ${
                isActive(path) ? 'text-white border-b-2 border-b-[#FEA55F]' : 'text-[#607B96]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;