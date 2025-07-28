import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Testimonials = () => {
  return (
    <section className=" py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-tight mb-8 sm:mb-10 md:mb-14">
            Hear It from Our{' '}
            <span
              className="text-[#F3B415] italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              Happy Families
            </span>
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left">
          {testimonials.map((item, index) => (
            <ScrollAnimation key={index} animation="fadeInUp" delay={0.2 + (index * 0.1)}>
              <div className="bg-gradient-to-br from-[#FFFDF5] to-[#FFF3D1] border border-[#fbe5b9] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition duration-300">
                <p className="text-gray-700 font-light italic leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg whitespace-pre-line">
                  {item.message}
                </p>
                <h4 className="font-semibold text-gray-800 text-right mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                  – {item.author}
                </h4>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    author: 'Daiva Sindaraviciute',
    message: `I highly recommend Keerthana as an English teacher for young children. She has been working with my 2-year-old son, teaching him English as a second language.

She uses playful techniques — songs, stories, games, and creative activities. My son is always excited for the next class!

She is warm, kind, intuitive, and incredibly thoughtful.`,
  },
  {
    author: 'Iveta Elena Tavolacci',
    message: `Sounds great, our kids really enjoyed spending time with you. Massimo said he wants to have you come again.

The kids love you a lot and have picked you well.`,
  },
  {
    author: 'Tiara Sulcyte',
    message:
      'Would highly recommend. Warm, sincere teacher who is great at communicating and loving with children.',
  },
  {
    author: 'Toma Vaisvilaitė',
    message:
      "I just wanted to say how much we loved seeing you in action. Your approach to working with children is truly inspiring! We'd be thrilled to have you join us again.",
  },
  {
    author: 'Renata Moroz',
    message: `Keerthana is amazing and beyond wonderful. She connects deeply with children, makes lessons creative and engaging, and ensures every class is productive and joyful.

She is a remarkable tutor and a true asset.`,
  },
  {
    author: 'Juqrgita Pacésiene',
    message:
      'I recommend Keerthana. Very nice, responsible, knows how to deal with children and look after them.',
  },
];

export default Testimonials;
