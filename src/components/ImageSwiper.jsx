import React, { useState, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';

const ImageSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Updated images - using t1 through t11 (11 images total)
  const images = [
    '/t1.JPG',
    '/t2.jpg',
    '/t5.jpg',
    '/t6.jpg',
    '/t7.jpg',
    '/t8.JPG',
    '/t9.JPG',
    '/t10.JPG',
    '/t11.JPG'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-tight mb-6 sm:mb-8 md:mb-10">
            Our{' '}
            <span 
              className="text-[#F3B415] italic"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              Learning Moments
            </span>
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.3}>
          <div className="relative max-w-6xl mx-auto">
            {/* Enhanced Image Container with Modern Design */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 sm:p-3 md:p-4">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-[#F3B415] to-yellow-400 rounded-full opacity-20 -translate-x-6 sm:-translate-x-8 md:-translate-x-10 -translate-y-6 sm:-translate-y-8 md:-translate-y-10"></div>
              <div className="absolute bottom-0 right-0 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 translate-x-4 sm:translate-x-6 md:translate-x-8 translate-y-4 sm:translate-y-6 md:translate-y-8"></div>
              
              {/* Main Image Carousel */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-xl aspect-[16/10]">
                <div 
                  className="flex transition-transform duration-700 ease-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div 
                      key={index} 
                      className="w-full flex-shrink-0 relative group h-full"
                      style={{ width: '100%' }}
                    >
                      <img
                        src={image}
                        alt={`Learning moment ${index + 1}`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 sm:p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-gray-200"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 sm:p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-gray-200"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Enhanced Dots Indicator */}
              <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-2 sm:space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#F3B415] scale-125 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Image Counter */}
       
      </div>
    </section>
  );
};

export default ImageSwiper; 