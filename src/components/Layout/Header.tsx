import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#011627] border-b border-[#1E2D3D] sticky top-0 z-50">
      <div className="flex items-center justify-between md:justify-start">
        <div className="text-[#607B96] px-4 py-4 border-r border-[#1E2D3D] w-full md:w-auto flex justify-between items-center">
          <Link to="/" className="text-[#CE9178] hover:text-[#FEA55F]">
            <span>ahmet-deger</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#607B96] hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          {NAV_ITEMS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-6 py-4 border-r border-[#1E2D3D] hover:bg-[#1E2D3D] transition-colors ${isActive(path) ? 'text-white border-b-2 border-b-[#FEA55F]' : 'text-[#607B96]'
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col border-t border-[#1E2D3D]">
          {NAV_ITEMS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-6 py-4 border-b border-[#1E2D3D] hover:bg-[#1E2D3D] transition-colors ${isActive(path) ? 'text-white border-l-2 border-l-[#FEA55F]' : 'text-[#607B96]'
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;