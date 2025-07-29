import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const FreeContent = () => {
  return (
    <section className="bg-[#413738] py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4 sm:mb-6 md:mb-8 italic mt-6 sm:mt-8 md:mt-10"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            First Session Free!
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-5xl mx-auto">
            Your child's first class is on me a joyful way to explore BeeLingo and see how we learn through play!
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animation="scaleIn" delay={0.4}>
          <a 
            href="https://form.typeform.com/to/a5XxAEAN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F3B415] text-[#1E1E1E] font-light py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-full text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors duration-300 mt-4 sm:mt-6 md:mt-8 inline-block"
          >
            Book now
          </a>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.6}>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white italic mt-6 sm:mt-8 md:mt-10"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            Let's make English fun for your little bee!
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FreeContent; 