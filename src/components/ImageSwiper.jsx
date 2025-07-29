import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const ImageSwiper = () => {
  // Updated images array - using images from testimonials folder
  const images = [
    '/testimonials/t1.jpg',
    '/testimonials/t2.jpg', 
    '/testimonials/t3.JPG',
    '/testimonials/t4.jpg',
    '/testimonials/t5.JPG',
    '/testimonials/t6.JPG',
    '/testimonials/t7.jpg',
    '/testimonials/t9.jpg'
  ];

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-2 border-transparent hover:border-[#F3B415]/20"
              >
                {/* Image Container */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Learning moment ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-125"
                    loading="lazy"
                  />
                  
                  {/* Enhanced Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 p-4">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center mb-3 mx-auto shadow-lg">
                        <span className="text-[#F3B415] font-bold text-lg">🐝</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle corner accent */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-[#F3B415] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ImageSwiper; 