import React from 'react';

const servicesData = [
  {
    number: '01',
    title: 'Architecture Design',
    description:
      'We create innovative, modern architectural designs that blend luxury, functionality, and timeless aesthetics. Every structure is meticulously planned to harmonize with its surroundings while delivering exceptional quality and sophistication.',
    details: ['CONCEPT DEVELOPMENT', 'SPACE PLANNING', '3D VISUALIZATION'],
  },
  {
    number: '02',
    title: 'Interior Design',
    description:
      'Our interior designs elevate spaces with refined materials, thoughtful layouts, and a seamless blend of elegance and comfort, ensuring every detail enhances both aesthetics and functionality.',
    details: [
      'LUXURY FURNISHINGS & MATERIALS',
      'CUSTOM LIGHTING DESIGN',
      'SPATIAL OPTIMIZATION',
    ],
  },
  {
    number: '03',
    title: 'Exterior Design',
    description:
      'We craft striking exteriors that integrate seamlessly with nature and urban environments, combining form, texture, and innovative materials for a bold yet timeless presence.',
    details: [
      'FAÇADE DESIGN',
      'LANDSCAPE INTEGRATION',
      'OUTDOOR LIVING SPACES',
    ],
  },
];

const ServiceItem = ({ number, title, description, details }) => (
  <div className="flex  py-12 items-start md:items-start gap-6 md:gap-10">
    {/* Left Column: Number */}
    <div className="flex font-[Zodiak] items-start md:items-center md:pr-8">
      <p className="text-3xl md:text-4xl font-medium text-black mr-4 md:mr-6 lg:mr-10 md:pt-2">
        {number}
      </p>
    </div>

    {/* Right Column: Title, Description, and Details */}
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-[Satoshi] font-medium text-black leading-tight lg:w-[420px]">
        {title}
      </h3>

      {/* Description + Details */}
      <div className="flex flex-col gap-6 lg:flex-1">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3 text-xs sm:text-sm md:text-[.875rem] text-gray-600 tracking-widest font-[Satoshi] font-medium uppercase">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 rounded-t-[60px] shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:mb-10 md:mt-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            OUR SERVICES
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {servicesData.map(service => (
            <ServiceItem
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
