'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: 'OCEAN WAVE',
    description:
      'A flowing, organic design inspired by the movement and rhythm of the sea.',
    image:
      'https://images.unsplash.com/photo-1549298492-263a2a0d7f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['COMMERCIAL', 'BERLIN'],
    theme: 'light',
  },
  {
    id: 2,
    title: 'PUZZLE TOWER',
    description:
      'A bold, modular design redefining vertical living with dynamic, interlocking structures.',
    image:
      'https://images.unsplash.com/photo-1549419137-a12866e4a2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['RESIDENTIAL', 'NEW YORK'],
    theme: 'dark',
  },
  {
    id: 3,
    title: 'HONEY COMB',
    description:
      'A fusion of complex structure featuring a honeycomb design for beauty and efficiency.',
    image:
      'https://images.unsplash.com/photo-1522294721184-b0a68d87b3e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['RESIDENTIAL', 'LONDON'],
    theme: 'light',
  },
  {
    id: 4,
    title: 'YELLOW SUITS',
    description:
      'A vibrant architectural statement blending modern aesthetics with captivating design.',
    image:
      'https://images.unsplash.com/photo-1555776269-e72e11894d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['COMMERCIAL', 'TOKYO'],
    theme: 'dark',
  },
];

// Reusable component for a single Project Card (Now using motion.div)
const FullWidthProjectCard = ({ project }) => {
  const { title, description, image, tags, theme } = project;
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const tagTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const tagBorderColor =
    theme === 'dark' ? 'border-gray-500' : 'border-gray-400';
  const buttonBgColor = theme === 'dark' ? 'bg-white' : 'bg-gray-800';
  const buttonTextColor = theme === 'dark' ? 'text-gray-800' : 'text-white';

  return (
    // Framer Motion Animation Setup
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start below and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to full visibility and normal position when in view
      viewport={{ once: true, amount: 0.3 }} // Animate only once, when 30% of the card is visible
      transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth animation
      className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden rounded-[30px] shadow-lg group"
    >
      {/* Background Image (right side) */}
      <img
        src={image}
        alt={title}
        className="absolute right-0 top-0 h-full w-2/3 object-cover object-center"
      />

      {/* Overlay for gradient and content (left side) */}
      <div
        className={`absolute left-0 top-0 h-full w-full md:w-2/3 lg:w-3/5 xl:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between
                      ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-black/60 via-black/30 to-transparent'
                          : 'bg-gradient-to-r from-gray-900/60 via-gray-900/30 to-transparent'
                      }`}
      >
        {/* Title and Description */}
        <div className="flex flex-col justify-start">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold ${textColor} mb-4 leading-tight`}
          >
            {title}
          </h2>
          <p className={`text-lg md:text-xl ${textColor} max-w-md`}>
            {description}
          </p>
        </div>

        {/* Bottom Left: Tags */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full border ${tagBorderColor} ${tagTextColor} text-xs uppercase tracking-wider font-semibold`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Explore Button (bottom right) */}
        <div className="absolute bottom-8 right-8">
          <button
            className={`px-8 py-4 rounded-full ${buttonBgColor} ${buttonTextColor} font-semibold text-lg hover:scale-105 transition-transform duration-300 z-10`}
          >
            EXPLORE
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function FullWidthProjectCards() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        {' '}
        {/* Gaps between cards */}
        {projectData.map(project => (
          <FullWidthProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
