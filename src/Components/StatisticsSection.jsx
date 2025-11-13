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
    <div className="bg-[#f8f8f8] p-[2rem] sm:p-[2.5rem] md:p-[3rem] rounded-4xl flex flex-col justify-start gap-4">
      <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">
        {stat.percent}
      </p>
      <h3 className="text-base sm:text-lg uppercase tracking-[0.2em] font-semibold text-gray-700">
        {stat.title}
      </h3>
      <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
};

export default function StatisticsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16 flex justify-center">
      <div className=" mx-auto flex flex-col lg:flex-row gap-10 md:gap-20 mt-20">
        {/* Left Column */}
        <div className="flex flex-col justify-start pt-4 lg:pr-20">
          <h2 className="text-3xl sm:text-4xl md:text-[4rem] font-semibold text-gray-900 mb-6 leading-tight">
            Architecture <br className="hidden md:inline" /> in Motion
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-sm">
            We analyze your vision, site conditions, and functional requirements
            to create a strategic framework.
          </p>
          <a
            href="#"
            className="flex items-center text-base font-semibold text-gray-900 group pt-4 sm:pt-6"
          >
            Our Services
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1 border border-gray-900 rounded-full px-2 py-1 inline-flex items-center justify-center">
              &rarr;
            </span>
          </a>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
