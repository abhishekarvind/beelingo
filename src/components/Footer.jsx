import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Logo & Description */}
          <ScrollAnimation animation="fadeInLeft" delay={0.1}>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-[#F3B415]">Beelingo</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                Empowering language learning through innovative technology and engaging content. 
                Join us on your journey to mastering new languages with our cutting-edge approach.
              </p>
              <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
                {/* Instagram */}
                <a href="https://www.instagram.com/beelingo.lt?igsh=MWgzZWRsdjhvand3dg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F3B415] transition-all duration-300 hover:scale-110 transform p-2">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/share/1B4MyxgexJ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F3B415] transition-all duration-300 hover:scale-110 transform p-2">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/k-s-bright-bee-english-classes/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F3B415] transition-all duration-300 hover:scale-110 transform p-2">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation animation="fadeInRight" delay={0.3}>
            <div className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 text-[#F3B415]">Get In Touch</h4>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="bg-[#F3B415] p-1.5 sm:p-2 md:p-3 rounded-full flex-shrink-0 mt-0.5">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">Email</p>
                    <a href="mailto:bookwithbeelingo@gmail.com" className="text-gray-400 hover:text-[#F3B415] transition-colors text-xs sm:text-sm md:text-base break-all leading-tight">
                      bookwithbeelingo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="bg-[#F3B415] p-1.5 sm:p-2 md:p-3 rounded-full flex-shrink-0 mt-0.5">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">Phone</p>
                    <a href="tel:+37065738940" className="text-gray-400 hover:text-[#F3B415] transition-colors text-xs sm:text-sm md:text-base">
                      +370 657 38940
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="bg-[#F3B415] p-1.5 sm:p-2 md:p-3 rounded-full flex-shrink-0 mt-0.5">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">Location</p>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base">Vilnius, Lithuania</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom Text */}
        <ScrollAnimation animation="fadeInUp" delay={0.4}>
          <div className="border-t border-gray-700 mt-6 sm:mt-8 md:mt-10 pt-3 sm:pt-4 md:pt-6 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 Beelingo. All rights reserved.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
