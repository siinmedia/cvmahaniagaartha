import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sari Wulandari',
      business: 'Mybestea Bandung',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Alhamdulillah, dalam 3 bulan omset sudah mencapai 15 juta per bulan. Supportnya juga sangat membantu!',
      revenue: 'Omset Rp 15jt/bulan'
    },
    {
      name: 'Ahmad Rizki',
      business: 'Kopi Ibukota Jakarta',
      image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Dari nol sampai bisa buka 2 cabang dalam 8 bulan. Paketnya lengkap banget dan gampang dijalanin.',
      revenue: '2 Cabang dalam 8 bulan'
    },
    {
      name: 'Rina Susanti',
      business: 'Kentang Gantenk Surabaya',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Investasi terbaik! Modal kembali dalam 4 bulan, sekarang sudah planning buat cabang kedua.',
      revenue: 'ROI 4 bulan'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Dengar langsung kisah sukses dari para mitra usaha kami
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-purple-50 to-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                      {/* Profile */}
                      <div className="text-center md:text-left">
                        <div className="relative mx-auto md:mx-0 w-20 h-20 sm:w-24 sm:h-24 mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-full shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-purple-primary rounded-full p-1">
                            <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-purple-primary font-semibold text-xs sm:text-sm mb-2">
                          {testimonial.business}
                        </p>
                        <div className="flex justify-center md:justify-start items-center space-x-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <div className="bg-purple-100 text-purple-primary px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold inline-block">
                          {testimonial.revenue}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <div className="md:col-span-2">
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-purple-primary mb-4 opacity-50" />
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-purple-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;