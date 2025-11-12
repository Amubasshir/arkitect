'use client';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SocialIcon = ({ Icon, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 transition duration-150"
  >
    <Icon className="w-4 h-4" />
  </a>
);

const LinkList = ({ items }) => (
  <ul className="space-y-2 text-left">
    {items.map(item => (
      <li key={item}>
        <a
          href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
          className="text-white text-lg space-y-4 hover:text-gray-400 transition duration-150"
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
);

const navSections = {
  pages: [
    'Home',
    'Projects',
    'Projects Single',
    'Services',
    'About',
    'Career',
    'Contact',
  ],
  content: ['Blog', 'Blog Post', 'Shop', 'Shop Single'],
  utility: [
    '404 Error Page',
    'Password Protected',
    'Styleguide',
    'Licensing',
    'Changelog',
  ],
};

export default function Footer() {
  const footerRef = useRef(null);
  const footerContentRef = useRef(null);

  const defaultTextRef = useRef(null);
  const hoverTextRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (footerContentRef.current) {
        gsap.fromTo(
          footerContentRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);

    // Kill previous animations
    gsap.killTweensOf([defaultTextRef.current, hoverTextRef.current]);

    // Hide MORE
    gsap.to(defaultTextRef.current, { y: '-100%', opacity: 0, duration: 0.3 });

    // Show TEMPLATES
    gsap.fromTo(
      hoverTextRef.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.3 }
    );

    // Swap back after delay
    gsap.to(hoverTextRef.current, {
      y: '-100%',
      opacity: 0,
      duration: 0.3,
      delay: 0.6,
      onComplete: () => {
        // ALWAYS show MORE at the end
        gsap.set(defaultTextRef.current, { y: '0%', opacity: 1 });
      },
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    // Kill any running animations
    gsap.killTweensOf([defaultTextRef.current, hoverTextRef.current]);

    // Reset texts so MORE is always visible
    gsap.set(defaultTextRef.current, { y: '0%', opacity: 1 });
    gsap.set(hoverTextRef.current, { y: '100%', opacity: 0 });
  };
  return (
    <footer
      ref={footerRef}
      className="bg-black text-white pt-10 md:pt-20 pb-5 px-10 md:px-10 font-sans"
    >
      <div ref={footerContentRef} className="max-w-7xl mx-auto">
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-40 text-left">
          {/* Left Column - Logo & Contact */}
          <div className="w-full md:w-1/3 md:pl-10">
            <p className="text-base font-bold mb-6 uppercase">arkitect®</p>

            <a
              href="mailto:hello@example.com"
              className="block text-2xl md:text-3xl text-white hover:text-gray-400  mb-5 font-medium md:font-bold"
            >
              hello@example.com
            </a>
            <p className="text-2xl md:text-3xl mb-6 text-white font-medium md:font-bold">
              +49 176 123 456 79
            </p>

            <div className="flex space-x-3">
              <SocialIcon Icon={FaTwitter} url="#" />
              <SocialIcon Icon={FaInstagram} url="#" />
              <SocialIcon Icon={FaFacebookF} url="#" />
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div className="grid grid-cols-2 w-full ">
            {/* PAGES */}
            <div className="grid grid-cols-1  md:grid-cols-2">
              <div>
                <h4 className="text-md uppercase tracking-widest text-white font-bold mb-5">
                  Pages
                </h4>
                <LinkList items={navSections.pages} />
              </div>

              {/* CONTENT */}
              <div className="-mt-9 md:mt-0">
                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-10"></h4>
                <LinkList items={navSections.content} />

                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="relative mt-5 px-8 py-5 bg-white text-black text-sm font-bold uppercase rounded-full overflow-hidden shadow-md hover:shadow-lg"
                  style={{ minWidth: '130px', transition: 'box-shadow 0.2s' }}
                  aria-label="More Templates"
                >
                  <span
                    ref={defaultTextRef}
                    className="block absolute inset-0 flex items-center justify-center"
                  >
                    MORE
                  </span>
                  <span
                    ref={hoverTextRef}
                    className="block absolute inset-0 flex items-center justify-center"
                    style={{ transform: 'translateY(100%)', opacity: 0 }}
                  >
                    TEMPLATES
                  </span>
                </button>
              </div>
            </div>
            {/* UTILITY PAGES (Right side on mobile) */}
            <div className=" text-left">
              <h4 className="text-md uppercase tracking-widest text-white font-bold mb-5">
                Utility Pages
              </h4>
              <LinkList items={navSections.utility} />
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-8 md:pt-40 border-gray-800 flex justify-center items-center text-center md:text-left ">
          <p className="text-xs text-gray-400">
            © Made by{' '}
            <a
              href="#"
              className="text-white hover:text-gray-300 border-b border-white mx-1"
            >
              Pawel Gola
            </a>{' '}
            - Powered by{' '}
            <a
              href="#"
              className="text-white hover:text-gray-300 border-b border-white mx-1"
            >
              Webflow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
