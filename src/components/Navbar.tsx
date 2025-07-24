import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { openWhatsAppWithMessage } from '../utils/adminUtils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Tentang Kami', path: '/#tentang-kami' },
    { name: 'Kontak', path: '/#kontak' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/Logo%20CV-mmdAi4oFQkXe42KI9mxLUZeTj1GxxB.png" 
              alt="Maha Niaga Artha" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-purple-primary">Maha Niaga Artha</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-purple-primary transition-colors duration-200 font-medium ${
                  location.pathname === item.path ? 'text-purple-primary' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => openWhatsAppWithMessage('saya ingin konsultasi untuk memilih paket usaha yang tepat.')}
              className="bg-purple-primary text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium text-sm"
            >
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-primary"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t z-50">
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-gray-700 hover:text-purple-primary transition-colors duration-200 font-medium ${
                    location.pathname === item.path ? 'text-purple-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => openWhatsAppWithMessage('saya ingin konsultasi untuk memilih paket usaha yang tepat.')}
                className="w-full bg-purple-primary text-white px-4 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium text-sm"
              >
                Konsultasi Gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;