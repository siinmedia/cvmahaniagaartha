import React from 'react';
import { Palette, DollarSign, Headphones } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Gratis Branding',
      description: 'Desain logo, kemasan, dan booth yang menarik sesuai dengan identitas brand Anda'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Modal Ringan',
      description: 'Mulai usaha dengan modal terjangkau dan sistem pembayaran yang fleksibel'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Support 24 Jam',
      description: 'Tim support siap membantu Anda kapanpun dibutuhkan melalui WhatsApp'
    }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Pilih Kami?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Keuntungan eksklusif yang Anda dapatkan sebagai mitra usaha kami
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="relative mx-auto w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-purple-primary rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl w-full h-full flex items-center justify-center text-purple-primary group-hover:scale-110 transition-transform duration-300 shadow-lg [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-primary transition-colors duration-300 px-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;