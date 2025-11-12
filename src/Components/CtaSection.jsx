import React from 'react';

export default function CtaSection() {
  return (
    <section className="bg-white rounded-b-[80px] md:h-screen flex items-center justify-center py-20 md:py-0">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Subtitle */}
        <p className="text-sm uppercase tracking-[0.2em] font-medium text-gray-600 mb-6">
          CONTACT
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-10 max-w-4xl leading-tight">
          Curious about what we can do for you?
        </h2>

        {/* Button with smooth text replace on hover */}
        <button className="relative px-10 py-5 bg-gray-900 text-white font-semibold text-lg rounded-full overflow-hidden group cursor-pointer">
          <span className="block transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-[-10px]">
            GET IN TOUCH
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg opacity-0 translate-y-[10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            GET IN TOUCH
          </span>
        </button>
      </div>
    </section>
  );
}
