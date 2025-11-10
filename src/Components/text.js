'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    title: 'OCEAN WAVE',
    description:
      'A flowing, organic design inspired by the movement and rhythm of the sea.',
    image:
      'https://cdn.prod.website-files.com/634e3ae6f7e03279e55e7fbf/635d01bd4cc38fdedd93b2dc_project-ocean-wave-preview.webp',
  },
  {
    id: 2,
    title: 'Puzzle Tower',
    description:
      'A bold, modular design redefining vertical living with dynamic, interlocking structures.',
    image:
      'https://cdn.prod.website-files.com/634e3ae6f7e03279e55e7fbf/635d01b397c2631f080eb397_project-puzzle-tower-preview.webp',
  },
  {
    id: 3,
    title: 'HONEY COMB',
    description:
      'A fusion of complex structure featuring a honeycomb design for beauty and efficiency.',
    image:
      'https://cdn.prod.website-files.com/634e3ae6f7e03279e55e7fbf/635d01a7bc9d9c2938d9f1cd_project-honey-comb-preview.webp',
  },
  {
    id: 4,
    title: 'Waves House',
    description:
      'A vibrant architectural statement blending modern aesthetics with captivating design.',
    image:
      'https://cdn.prod.website-files.com/634e3ae6f7e03279e55e7fbf/635af1d8c41c46f3de66599d_project-waves-house-preview.webp',
  },
  {
    id: 5,
    title: 'YELLOW SUITS',
    description:
      'A vibrant architectural statement blending modern aesthetics with captivating design.',
    image:
      'https://cdn.prod.website-files.com/634e3ae6f7e03279e55e7fbf/635af0a661d8b04e2927170e_project-yellow-suites-preview.webp',
    btn: 'COMMERCIAL',
    btn2: 'BERLIN',
    button: 'EXPLORE',
  },
];

export default function ShowcaseGSAP() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Clear old triggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    const sections = gsap.utils.toArray('.pin-card');

    sections.forEach((section, index) => {
      // Skip pinning the last card
      if (index === sections.length - 1) return;

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    // Cursor animation
    const cursor = cursorRef.current;

    const moveCursor = e => {
      gsap.to(cursor, {
        x: e.clientX - 25,
        y: e.clientY - 25,
        duration: 0.2,
        ease: 'power3.out',
        backgroundColor: '#000000',
      });
    };

    const cards = document.querySelectorAll('.pin-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          backgroundColor: 'rgba(255,255,255,0.3)',
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
        });
      });
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-white">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-white text-[10px] font-medium opacity-0 transition-all duration-200 hidden sm:flex"
        style={{ backgroundColor: '#000000' }}
      >
        view
      </div>

      {/* Showcase Cards */}
      {projectData.map((project, index) => (
        <div key={project.id}>
          <div className="pin-card relative w-full h-[70vh] lg:h-[50vw] sm:h-[60vh] rounded-[40px] sm:rounded-[60px] cursor-none overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover rounded-[40px] sm:rounded-[60px]"
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-black/30 rounded-[40px] sm:rounded-[60px]" />

            <div className="absolute inset-0 text-white">
              <div className="flex flex-col h-full w-full p-6 sm:p-16 lg:p-24 justify-between">
                {/* Title and Description */}
                <div className="flex justify-between items-start flex-wrap sm:flex-nowrap gap-4 sm:gap-0">
                  <div className="max-w-full sm:max-w-md">
                    <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-4 tracking-tight uppercase text-gray-100 leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-base md:text-lg font-light max-w-xs text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end flex-wrap sm:flex-nowrap gap-4 sm:gap-0">
                  <div className="flex space-x-2 text-[8px] sm:text-[10px] font-semibold flex-wrap gap-2">
                    {project.btn && (
                      <span className="px-5 py-3 border border-white/50 rounded-full uppercase tracking-wider cursor-pointer text-sm">
                        {project.btn}
                      </span>
                    )}
                    {project.btn2 && (
                      <span className="px-5 py-3 border border-white/50 rounded-full uppercase tracking-wider cursor-pointer text-sm">
                        {project.btn2}
                      </span>
                    )}
                  </div>

                  {/* Only last card shows button */}
                  {index === projectData.length - 1 && (
                    <div className="px-5 py-3 sm:px-5 sm:py-3 border border-white rounded-full text-[10px] sm:text-[15px] font-semibold tracking-widest uppercase cursor-pointer backdrop-blur-sm bg-white hover:bg-white/30 transition text-black">
                      {project.button}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Gap between cards */}
          {index < projectData.length - 1 && (
            <div className="h-2 sm:h-2 bg-transparent" />
          )}
        </div>
      ))}

      {/* Smooth ending space */}
      {/* <div className="lg:h-[80vh] h-[60vh] bg-transparent"></div> */}
    </div>
  );
}




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
    <div className="bg-gray-100 p-6 md:p-8 rounded-xl w-80 h-full flex flex-col justify-start gap-2">
      <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-gray-900 mb-2">
        {stat.percent}
      </p>
      <h3 className="text-lg uppercase tracking-[0.2em] font-semibold text-gray-700 mb-4">
        {stat.title}
      </h3>
      <p className="text-lg font-medium text-gray-600 leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
};

export default function StatisticsSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
        {/* 1. Left Column: Title and Description */}
        <div className="flex flex-col justify-start pt-4  border-r border-gray-300 w-96">
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
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 border border-gray-300">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
