import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Nav = () => {
  return (
    <nav className="bg-white/20 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Logo/Brand */}
          <ScrollAnimation animation="fadeInLeft" delay={0.1}>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-gray-900">
                Bee<span style={{ color: '#E59412' }}>Lingo</span>
              </h1>
            </div>
          </ScrollAnimation>
          
          {/* Book a Session Button */}
          <ScrollAnimation animation="fadeInRight" delay={0.2}>
            <div>
              <a 
                href="https://form.typeform.com/to/a5XxAEAN"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full text-white font-medium hover:scale-105 transition-all duration-300 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2.5 text-xs sm:text-sm md:text-base backdrop-blur-sm shadow-lg border border-white/20 inline-block"
                style={{ backgroundColor: 'rgba(229, 148, 18, 0.9)' }}
              >
                Book a session
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 