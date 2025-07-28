import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const FeatureSection = () => {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-left">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-tight mb-6 sm:mb-8 md:mb-10">
            Designed for{' '}
            <span
              className="text-[#F3B415]"
              style={{
                fontFamily: 'Amiri, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.25rem, 3.5vw, 3.5rem)',
              }}
            >
              Little Learners
            </span>
            <br />
            Loved by Parents
          </h2>
        </ScrollAnimation>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Card 1 */}
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="w-full max-w-sm h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 relative px-4 sm:px-6 py-6 sm:py-8 text-white flex flex-col justify-center transform hover:scale-105" style={{ backgroundColor: '#413738' }}>
              {/* Top image */}
              <div className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 animate-bounce-slow">
                <img 
                  src="/c1.png" 
                  alt="Feature 1" 
                  className="w-10 sm:w-14 md:w-20 lg:w-24 object-contain hover:rotate-12 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="mt-6 sm:mt-8 md:mt-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 italic hover:text-[#F3B415] transition-colors duration-300" style={{ fontFamily: 'Amiri, serif' }}>Play-Based Learning</h3>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                  Interactive games, songs, and stories to spark joy and support early language development.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Card 2 */}
          <ScrollAnimation animation="fadeInUp" delay={0.4}>
            <div className="w-full max-w-sm h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 relative px-4 sm:px-6 py-6 sm:py-8 text-[#3F2E12] flex flex-col justify-center transform hover:scale-105" style={{ backgroundColor: '#D1AF84' }}>
              <div className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 animate-bounce-slow">
                <img 
                  src="/c2.png" 
                  alt="Feature 2" 
                  className="w-10 sm:w-14 md:w-20 lg:w-24 object-contain hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <div className="mt-6 sm:mt-8 md:mt-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 italic hover:text-[#8D5914] transition-colors duration-300" style={{ fontFamily: 'Amiri, serif' }}>Age-Specific Programs</h3>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                  Tailored lessons for every age group, ensuring your child learns at their perfect pace.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Card 3 */}
          <ScrollAnimation animation="fadeInUp" delay={0.6}>
            <div className="w-full max-w-sm h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 relative px-4 sm:px-6 py-6 sm:py-8 text-white flex flex-col justify-center transform hover:scale-105" style={{ backgroundColor: '#8D5914' }}>
              <div className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 animate-bounce-slow">
                <img 
                  src="/c3.png" 
                  alt="Feature 3" 
                  className="w-10 sm:w-14 md:w-20 lg:w-24 object-contain hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <div className="mt-6 sm:mt-8 md:mt-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 italic hover:text-[#D1AF84] transition-colors duration-300" style={{ fontFamily: 'Amiri, serif' }}>Parent-Friendly Updates</h3>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                  Get weekly progress summaries and insights into your child's growth and participation.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;
