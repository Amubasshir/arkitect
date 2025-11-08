import React from 'react';

export default function CtaSection() {
  return (
    // Outer container for padding and background
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16">
      {/* Inner container with max-width, auto margin for centering, and rounded corners */}
      <div className="max-w-7xl mx-auto bg-gray-50 p-10 md:p-20 rounded-[30px] shadow-lg flex flex-col items-center justify-center text-center">
        {/* Subtitle */}
        <p className="text-sm uppercase tracking-[0.2em] font-medium text-gray-600 mb-6">
          CONTACT
        </p>

        {/* Main Question/Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-10 max-w-4xl leading-tight">
          Curious about what we can do for you?
        </h2>

        {/* Call to Action Button */}
        <button className="px-10 py-5 bg-gray-900 text-white font-semibold text-lg rounded-full hover:bg-gray-700 transition duration-300">
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
}
