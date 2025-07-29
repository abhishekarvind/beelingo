import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const AboutSection = () => {
  return (
    <section className="bg-[#FFF8E1] py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 overflow-hidden relative">
      
      {/* Hive SVG at Top-Left Corner */}
      <ScrollAnimation animation="fadeInLeft" delay={0.1}>
        <div className="absolute top-4 sm:top-6 left-0 hidden lg:block w-16 sm:w-20 md:w-24">
          <img 
            src="/hive.svg" 
            alt="Honeycomb Hive" 
            className="object-contain opacity-90 transition-transform duration-300 hover:scale-110" 
          />
        </div>
      </ScrollAnimation>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16 relative z-10">
        
        {/* First Paragraph */}
        <ScrollAnimation animation="fadeInLeft" delay={0.2}>
          <div className="text-center lg:text-left">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light transition-colors duration-300 hover:text-gray-700">
              Hi there! 🐝 I'm <span className="font-semibold text-[#333] hover:text-[#E59412] transition-colors">Keerthana Bukya</span>, a <span className="font-semibold hover:text-[#E59412] transition-colors">TEFL-certified English educator</span> and Founder of <span className="font-semibold text-[#333] hover:text-[#E59412] transition-colors">BeeLingo</span> a creative learning space for children aged 2–10. At BeeLingo, we build strong language foundations through joyful, play-based lessons focused on communication, vocabulary, and phonics.
            </p>
          </div>
        </ScrollAnimation>

        {/* Curved Arrow */}
        <ScrollAnimation animation="scaleIn" delay={0.4}>
          <div className="hidden lg:block w-20 sm:w-24 md:w-28 xl:w-36">
            <img 
              src="/arrow.png" 
              alt="Curved Arrow" 
              className="object-contain rotate-12 transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]" 
            />
          </div>
        </ScrollAnimation>

        {/* Second Paragraph */}
        <ScrollAnimation animation="fadeInRight" delay={0.6}>
          <div className=" text-center lg:text-left">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light transition-colors duration-300 hover:text-gray-700">
              With over a year of experience across Northern Europe, I work with IB and Cambridge curricula, teaching early years to secondary students and training adult professionals. Currently, I also serve as an English teacher and trainer, combining structure with creativity to help every learner shine.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
