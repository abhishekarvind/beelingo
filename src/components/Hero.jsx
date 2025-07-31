import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 flex items-center justify-center relative overflow-hidden touch-pan-y">
      {/* Gradient Design Elements - optimized for mobile */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-30 sm:opacity-40 blur-2xl sm:blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-28 sm:w-40 md:w-56 lg:w-64 xl:w-80 h-28 sm:h-40 md:h-56 lg:h-64 xl:h-80 bg-gradient-to-tr from-orange-300 to-yellow-300 rounded-full opacity-25 sm:opacity-35 blur-2xl sm:blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-64 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full opacity-35 sm:opacity-45 blur-xl sm:blur-2xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-28 sm:w-36 md:w-48 lg:w-56 xl:w-72 h-28 sm:h-36 md:h-48 lg:h-56 xl:h-72 bg-gradient-to-bl from-orange-200 to-yellow-200 rounded-full opacity-30 sm:opacity-40 blur-2xl sm:blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 sm:w-28 md:w-40 lg:w-48 xl:w-56 h-20 sm:h-28 md:h-40 lg:h-48 xl:h-56 bg-gradient-to-tl from-yellow-300 to-orange-300 rounded-full opacity-25 sm:opacity-35 blur-xl sm:blur-2xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-2/3 right-1/3 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-16 sm:h-24 md:h-32 lg:h-40 xl:h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-40 sm:opacity-50 blur-xl sm:blur-2xl animate-pulse pointer-events-none"></div>

      <div className="max-w-9xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-40">
          
          {/* Text Content */}
          <ScrollAnimation animation="fadeInLeft" delay={0.2}>
            <div className="text-center lg:text-left max-w-2xl">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-gray-700 leading-snug">
                Shaping tiny voices into <br className="hidden sm:block" />
                buzzing storytellers of tomorrow 🐝
              </p>
            </div>
          </ScrollAnimation>
          
          {/* Logo Image */}
          <ScrollAnimation animation="fadeInRight" delay={0.4}>
            <div className="flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="BeeLingo Logo" 
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-56 xl:w-56 2xl:h-64 2xl:w-64 3xl:h-80 3xl:w-80 object-contain transition-transform duration-300 hover:scale-105"
                loading="eager"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
