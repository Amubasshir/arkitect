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
  <div className="flex flex-row lg:flex-col  py-12 items-start md:items-start">
    {/* Left Column: Number */}
    <div className="flex-shrink-0 w-16 md:w-20 mb-6 md:mb-0 md:mr-8 flex items-center justify-center">
      <p className="text-3xl font-medium text-black">{number}</p>
    </div>

    {/* Right Column: Title, Description, Details */}
    <div className="flex-1">
      <h3 className="text-3xl md:text-4xl font-[Satoshi] font-medium text-black leading-tight mb-4">
        {title}
      </h3>
      <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-gray-600 font-medium">
            • {detail}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
