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
    title: 'PUZZLE TOWER',
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
    title: 'YELLOW SUITS',
    description:
      'A vibrant architectural statement blending modern aesthetics with captivating design.',
    image:
      'https://cdn.prod.website-files.com/634e3ae6f7e03279e55e7fbf/635af1d8c41c46f3de66599d_project-waves-house-preview.webp',
  },
];

export default function ShowcaseGSAP() {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const sections = containerRef.current.querySelectorAll('.pin-card');

  //   sections.forEach(section => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: 'top top',
  //       end: '+=100%',
  //       pin: true,
  //       pinSpacing: false,
  //       scrub: true,
  //     });
  //   });
  // }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray('.pin-card');

    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);
  return (
    <div ref={containerRef}>
      {projectData.map(project => (
        <div
          key={project.id}
          className="pin-card relative w-full h-screen sm:h-[90vh] overflow-hidden rounded-[60px]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 text-white ">
            <div className="flex flex-col h-full w-full p-8 sm:p-16 lg:p-24 justify-between">
              {/* Top Section */}
              <div className="flex justify-between items-start flex-wrap sm:flex-nowrap gap-4 sm:gap-0">
                <div className="max-w-full sm:max-w-md">
                  <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-4 tracking-tight uppercase text-gray-100 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg font-light max-w-xs text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-end flex-wrap sm:flex-nowrap gap-4 sm:gap-0">
                <div className="flex space-x-2 text-[8px] sm:text-[10px] font-semibold flex-wrap gap-2">
                  <span className="px-3 py-1 border border-white/50 rounded-full uppercase tracking-wider cursor-pointer">
                    COMMERCIAL
                  </span>
                  <span className="px-3 py-1 border border-white/50 rounded-full uppercase tracking-wider cursor-pointer">
                    BERLIN
                  </span>
                </div>

                <div className="px-4 py-2 sm:px-5 sm:py-3 border border-white rounded-full text-[16px] sm:text-[10px] font-semibold tracking-widest uppercase cursor-pointer backdrop-blur-sm bg-white/20 hover:bg-white/30 transition text-black">
                  EXPLORE
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
