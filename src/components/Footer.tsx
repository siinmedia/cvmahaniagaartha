import React from 'react';
import { ShoppingBag, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-primary to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold">Maha Niaga Artha</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-md">
              Partner terpercaya untuk memulai usaha Anda. Kami menyediakan paket usaha lengkap 
              dengan booth, branding, dan support penuh untuk kesuksesan bisnis Anda.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary flex-shrink-0" />
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

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Menu Utama</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Beranda', 'Produk', 'Tentang Kami', 'Testimonial', 'Kontak'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Produk Populer</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Mybestea', 'You Need Mie', 'Kopi Ibukota', 'Kentang Gantenk', 'Lihat Semua'].map((item) => (
                <li key={item}>
                  <a href="#produk" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Ikuti Kami</h4>
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

            <div className="text-center sm:text-right w-full sm:w-auto">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Newsletter</h4>
              <div className="flex max-w-sm mx-auto sm:mx-0">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-primary text-white text-sm"
                />
                <button className="bg-purple-primary hover:bg-purple-700 px-3 py-2 sm:px-4 sm:py-2 rounded-r-lg transition-colors duration-200 font-semibold text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-center sm:text-left text-xs sm:text-sm">
              © 2025 Maha Niaga Artha. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;