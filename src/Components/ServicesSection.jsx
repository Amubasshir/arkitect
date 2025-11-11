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
  <div className="flex flex-col md:flex-row py-12 md:items-start">
    {/* Left Column: Number and Title */}
    <div className="w-full md:w-1/12 flex items-center md:items-start md:pr-8 pt-0 md:pt-2 mb-6 md:mb-0">
      <p className="text-3xl font-medium text-gray-400 md:mb-3">{number}</p>
    </div>
    <div className="lg:flex ">
      <div className="w-full md:w-1/3 flex-1 md:flex-col items-start md:items-start md:pr-12 mb-6 md:mb-0">
        <h3 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 leading-tight md:whitespace-nowrap">
          {title}
        </h3>
      </div>

      {/* Right Column: Description and Details */}
      <div className="w-full md:w-2/3 flex-1">
        <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-1 text-[.875rem]  text-gray-600 tracking-widest font-satoshi font-medium uppercase">
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
        <div className="text-center mb-16">
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
