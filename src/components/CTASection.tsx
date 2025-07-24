import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { openWhatsAppWithMessage } from '../utils/adminUtils';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-primary to-purple-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Masih bingung mulai dari mana?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-purple-100 leading-relaxed">
                Jangan khawatir! Tim konsultan ahli kami siap membantu Anda memilih paket usaha yang tepat sesuai dengan passion dan budget Anda.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 sm:space-y-4">
              <button 
                onClick={() => openWhatsAppWithMessage('saya ingin konsultasi untuk memilih paket usaha yang tepat.')}
                className="w-full sm:w-auto bg-white text-purple-primary px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center group"
              >
                <MessageCircle className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                Konsultasi Gratis via WhatsApp
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => window.open('tel:6282124952606', '_self')}
                  className="flex-1 border-2 border-white text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-purple-primary transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center"
                >
                  <Phone className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Telepon Langsung
                </button>
                <button 
                  onClick={() => window.open('mailto:franchisewaralaba@gmail.com', '_self')}
                  className="flex-1 border-2 border-white text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-purple-primary transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center"
                >
                  <Mail className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Email Kami
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-purple-400 pt-4 sm:pt-6 space-y-2">
              <p className="text-purple-200 text-xs sm:text-sm">Atau hubungi kami langsung:</p>
              <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
                <span className="text-white font-semibold text-sm sm:text-base">📱 6282124952606</span>
                <span className="text-white font-semibold text-sm sm:text-base">✉️ franchisewaralaba@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Elements */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 lg:p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-purple-primary" />
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg font-semibold">Konsultasi Gratis</h3>
                      <p className="text-purple-200 text-xs lg:text-sm">Respons dalam 5 menit</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 rounded-2xl p-3 lg:p-4">
                    <p className="text-xs lg:text-sm text-purple-100 italic">
                      "Terima kasih sudah membantu saya memilih paket yang tepat. Sekarang usaha saya sudah jalan!"
                    </p>
                    <p className="text-xs text-purple-200 mt-1 lg:mt-2">- Budi, Owner Kopi Nusantara</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl lg:text-2xl font-bold">24/7</div>
                      <div className="text-xs text-purple-200">Support</div>
                    </div>
                    <div>
                      <div className="text-xl lg:text-2xl font-bold">5 Min</div>
                      <div className="text-xs text-purple-200">Response</div>
                    </div>
                    <div>
                      <div className="text-xl lg:text-2xl font-bold">100%</div>
                      <div className="text-xs text-purple-200">Gratis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorations */}
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-20 h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;