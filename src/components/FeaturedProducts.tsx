import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      name: 'Mybestea',
      price: 'Rp 2.5 Juta',
      image: 'https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Minuman',
      rating: 4.9,
      description: 'Paket usaha minuman teh premium dengan booth modern'
    },
    {
      name: 'You Need Mie',
      price: 'Rp 3.2 Juta',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Makanan',
      rating: 4.8,
      description: 'Franchise mie instan dengan peralatan lengkap'
    },
    {
      name: 'Kopi Ibukota',
      price: 'Rp 4.5 Juta',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Minuman',
      rating: 4.9,
      description: 'Coffee shop starter kit dengan mesin espresso'
    },
    {
      name: 'Kentang Gantenk',
      price: 'Rp 2.8 Juta',
      image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Snack',
      rating: 4.7,
      description: 'Paket usaha kentang goreng dengan bumbu rahasia'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produk Unggulan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Pilihan terbaik paket usaha dengan tingkat keberhasilan tertinggi
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="relative h-64 sm:h-80 md:h-96">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="bg-white/90 text-purple-primary px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {product.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">{product.rating}</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base opacity-90">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-300 text-xs sm:text-sm">Mulai dari</span>
                      <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                        {product.price}
                      </p>
                    </div>

                    <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-purple-primary transition-all duration-300 font-semibold flex items-center group-hover:scale-105 text-xs sm:text-sm md:text-base">
                      Lihat Detail
                      <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            to="/products"
            className="inline-block border-2 border-purple-primary text-purple-primary px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-purple-primary hover:text-white transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;