import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Category = () => {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-tight mb-6 sm:mb-8 md:mb-10">
            Age-Based Programs at{' '}
            <span className="text-[#F3B415] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-pulse">
              Bee
            </span>
            <span className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Lingo
            </span>
          </h2>
        </ScrollAnimation>
        
        {/* Four images in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center">
          {/* Card 1 */}
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="w-full max-w-40 sm:max-w-48 md:max-w-56 lg:max-w-64 xl:max-w-72 relative group animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F3B415]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/child1.png" 
                alt="Child 1" 
                className="w-full h-auto object-contain rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 transform hover:scale-110 hover:rotate-2 relative z-10"
              />
              <button className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F3B415] text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full font-light text-xs sm:text-sm md:text-base hover:bg-[#E59412] hover:scale-110 transition-all duration-300 shadow-lg whitespace-nowrap z-20 animate-bounce-slow">
                Age 2–3
              </button>
            </div>
          </ScrollAnimation>

          {/* Card 2 */}
          <ScrollAnimation animation="fadeInUp" delay={0.3}>
            <div className="w-full max-w-40 sm:max-w-48 md:max-w-56 lg:max-w-64 xl:max-w-72 relative group animate-float-delayed">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F3B415]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/child2.png" 
                alt="Child 2" 
                className="w-full h-auto object-contain rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 transform hover:scale-110 hover:-rotate-2 relative z-10"
              />
              <button className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F3B415] text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full font-light text-xs sm:text-sm md:text-base hover:bg-[#E59412] hover:scale-110 transition-all duration-300 shadow-lg whitespace-nowrap z-20 animate-bounce-slow-delayed">
                Age 4–5
              </button>
            </div>
          </ScrollAnimation>

          {/* Card 3 */}
          <ScrollAnimation animation="fadeInUp" delay={0.4}>
            <div className="w-full max-w-40 sm:max-w-48 md:max-w-56 lg:max-w-64 xl:max-w-72 relative group animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F3B415]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/child3.png" 
                alt="Child 3" 
                className="w-full h-auto object-contain rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 transform hover:scale-110 hover:rotate-2 relative z-10"
              />
              <button className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F3B415] text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full font-light text-xs sm:text-sm md:text-base hover:bg-[#E59412] hover:scale-110 transition-all duration-300 shadow-lg whitespace-nowrap z-20 animate-bounce-slow">
                Age 6–7
              </button>
            </div>
          </ScrollAnimation>

          {/* Card 4 */}
          <ScrollAnimation animation="fadeInUp" delay={0.5}>
            <div className="w-full max-w-40 sm:max-w-48 md:max-w-56 lg:max-w-64 xl:max-w-72 relative group animate-float-delayed">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F3B415]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/child4.png" 
                alt="Child 4" 
                className="w-full h-auto object-contain rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 transform hover:scale-110 hover:-rotate-2 relative z-10"
              />
              <button className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F3B415] text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full font-light text-xs sm:text-sm md:text-base hover:bg-[#E59412] hover:scale-110 transition-all duration-300 shadow-lg whitespace-nowrap z-20 animate-bounce-slow-delayed">
                Age 8–10
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(-5px);
          }
          50% {
            transform: translateY(5px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.05);
          }
        }
        
        @keyframes bounce-slow-delayed {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.05);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow-delayed {
          animation: bounce-slow-delayed 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Category;
