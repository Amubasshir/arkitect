import React from 'react';

const statsData = [
  {
    percent: '300+',
    title: 'PROJECTS',
    description:
      'We have designed and completed over 300 projects, each reflecting our dedication to innovation, precision, and timeless architectural excellence.',
  },
  {
    percent: '200+',
    title: 'CLIENTS',
    description:
      'With over 200 satisfied clients, we have built lasting relationships through exceptional design, strategic planning, and unparalleled craftsmanship.',
  },
  {
    percent: '100%',
    title: 'HAPPY CLIENTS',
    description:
      'Client satisfaction is our priority—every project is delivered with precision, passion, and attention to detail, ensuring outstanding results.',
  },
  {
    percent: '110%',
    title: 'COMMITMENT',
    description:
      'We go beyond expectations, delivering creative excellence, meticulous execution, and unwavering dedication to every architectural vision we bring to life.',
  },
];

// Reusable component for a single statistic card
const StatCard = ({ stat }) => {
  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm h-full flex flex-col justify-start">
      <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-gray-900 mb-2">
        {stat.percent}
      </p>
      <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-700 mb-4">
        {stat.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
};

export default function StatisticsSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
        {/* 1. Left Column: Title and Description */}
        <div className="lg:col-span-1 flex flex-col justify-start pt-4 lg:pr-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Architecture <br className="hidden md:inline" /> in Motion
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-sm">
            We analyze your vision, site conditions, and functional requirements
            to create a strategic framework.
          </p>
          <a
            href="#"
            className="flex items-center text-base font-semibold text-gray-900 group"
          >
            Our Services
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1 border border-gray-900 rounded-full px-2 py-1 inline-flex items-center justify-center">
              &rarr; {/* Right Arrow */}
            </span>
          </a>
        </div>

        {/* 2. Right Columns: Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
