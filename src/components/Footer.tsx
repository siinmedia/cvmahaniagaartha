import React from 'react';
import { ShoppingBag, MapPin, Phone, Mail, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-primary to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold">Maha Niaga Artha</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
              Partner terpercaya untuk memulai usaha kuliner Anda dengan paket lengkap dan support penuh.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-purple-primary rounded-full flex items-center justify-center transition-colors duration-200">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-purple-primary rounded-full flex items-center justify-center transition-colors duration-200">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-purple-primary rounded-full flex items-center justify-center transition-colors duration-200">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm md:text-base text-gray-400">Jl. Merdeka No. 123, Jakarta Pusat 10110</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-gray-400">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-gray-400">info@mahaniagaartha.com</span>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Mulai Sekarang</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              Konsultasi gratis untuk memilih paket usaha yang tepat untuk Anda.
            </p>
            <button 
              onClick={() => {
                const phoneNumber = '6281234567890';
                const message = encodeURIComponent('Halo, saya ingin konsultasi untuk memilih paket usaha yang tepat.');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-300 font-semibold text-xs sm:text-sm flex items-center"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              Konsultasi Gratis
            </button>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Menu</h4>
              <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                <a href="/" className="hover:text-white transition-colors">Beranda</a>
                <a href="/products" className="hover:text-white transition-colors">Produk</a>
                <a href="#master-kuliner" className="hover:text-white transition-colors">Tentang</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-center sm:text-left text-xs sm:text-sm">
              © 2025 Maha Niaga Artha. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;