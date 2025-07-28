import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const LearningWay = () => {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-tight mb-6 sm:mb-8 md:mb-10">
            The{' '}
            <span className="text-[#F3B415] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Bee
            </span>
            <span className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Lingo
            </span>{' '}
            way of learning
          </h2>
        </ScrollAnimation>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Container 1 */}
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="bg-[#D1AF84] rounded-xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition duration-300 min-h-[160px] sm:min-h-[180px] md:min-h-[220px] flex items-end hover:scale-105 transform">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white ml-auto text-right hover:text-gray-100 transition-colors duration-300">
                Early Communication Skills
              </h3>
            </div>
          </ScrollAnimation>

          {/* Container 2 */}
          <ScrollAnimation animation="fadeInUp" delay={0.3}>
            <div className="bg-[#8D5914] rounded-xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition duration-300 min-h-[160px] sm:min-h-[180px] md:min-h-[220px] flex items-end hover:scale-105 transform">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white ml-auto text-right hover:text-gray-100 transition-colors duration-300">
                Phonics & Reading
              </h3>
            </div>
          </ScrollAnimation>

          {/* Container 3 */}
          <ScrollAnimation animation="fadeInUp" delay={0.4}>
            <div className="bg-[#F3B415] rounded-xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition duration-300 min-h-[160px] sm:min-h-[180px] md:min-h-[220px] flex items-end hover:scale-105 transform">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white ml-auto text-right hover:text-gray-100 transition-colors duration-300">
                Vocabulary Building
              </h3>
            </div>
          </ScrollAnimation>

          {/* Container 4 */}
          <ScrollAnimation animation="fadeInUp" delay={0.5}>
            <div className="bg-[#413738] rounded-xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition duration-300 min-h-[160px] sm:min-h-[180px] md:min-h-[220px] flex items-end hover:scale-105 transform">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white ml-auto text-right hover:text-gray-100 transition-colors duration-300">
                Interactive Speaking Activities
              </h3>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default LearningWay;
