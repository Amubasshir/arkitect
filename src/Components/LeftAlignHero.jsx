import React from 'react';

const backgroundImage = {
  // Replace with your actual high-resolution image URL
  url: 'https://assets-global.website-files.com/634e3ae6f7e032d01b5e7fa7/635d47feb165560f5de1a788_home-story-bg.webp',
  alt: 'Curved modern architecture',
};

export default function LeftAlignHero() {
  return (
    // Set min-h-screen for full height view
    <section className="relative w-full min-h-screen bg-gray-900 overflow-hidden ">
      {/* 1. Background Image */}
      <img
        src={backgroundImage.url}
        alt={backgroundImage.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 "></div>

      <div className="absolute inset-0 bg-blue-700/50 mix-blend-multiply"></div>

      <div className="absolute inset-0 bg-black/10"></div>

      {/* 3. Content Area */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-end pb-20 px-8 sm:px-16 lg:px-24">
        <div className="max-w-4xl text-white">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6 tracking-tight">
            INNOVATIVE <br />
            DESIGN
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg font-light max-w-md mb-12">
            With a clear plan in place, we craft a sophisticated design that
            blends aesthetics, functionality, and innovation.
          </p>

          {/* Call to Action Link */}
          <a
            href="#"
            className="flex items-center text-white text-base font-semibold group w-max"
          >
            Our Story
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              &rarr; {/* Right Arrow */}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
