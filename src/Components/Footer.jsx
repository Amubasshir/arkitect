'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

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
  <ul className="space-y-3 text-left">
    {items.map((item) => (
      <li key={item}>
        <a
          href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
          className="text-white text-base hover:text-gray-400 hover:pl-5 transition-all duration-200"
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

    gsap.killTweensOf([defaultTextRef.current, hoverTextRef.current]);
    gsap.to(defaultTextRef.current, { y: '-100%', opacity: 0, duration: 0.3 });

    gsap.fromTo(
      hoverTextRef.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.3 }
    );

    gsap.to(hoverTextRef.current, {
      y: '-100%',
      opacity: 0,
      duration: 0.3,
      delay: 0.6,
      onComplete: () => {
        gsap.set(defaultTextRef.current, { y: '0%', opacity: 1 });
      },
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    gsap.killTweensOf([defaultTextRef.current, hoverTextRef.current]);
    gsap.set(defaultTextRef.current, { y: '0%', opacity: 1 });
    gsap.set(hoverTextRef.current, { y: '100%', opacity: 0 });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#191919] text-white pt-10 md:pt-20 pb-5 px-10 md:px-10 font-sans"
    >
      <div ref={footerContentRef}>
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-32 text-left">
          {/* Left Column - Logo & Contact */}
          <div className="w-full md:w-1/3">
            <p className="text-sm font-bold mb-8 uppercase tracking-wide">
              arkitect®
            </p>

            <a
              href="mailto:hello@example.com"
              className="block text-2xl md:text-3xl lg:text-4xl text-white hover:text-gray-400 mb-6 font-normal"
            >
              hello@example.com
            </a>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-10 text-white font-normal">
              +49 176 123 456 79
            </p>

            <div className="flex space-x-3">
              <SocialIcon Icon={FaTwitter} url="#" />
              <SocialIcon Icon={FaInstagram} url="#" />
              <SocialIcon Icon={FaFacebookF} url="#" />
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div
            className="grid grid-cols-2
           md:grid-rows-1 gap-10 md:gap-12 w-full md:w-2/3"
          >
            {/* PAGES */}
            <div className="flex flex-col md:flex-row md:gap-16 lg:gap-30">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-white font-bold mb-6">
                  Pages
                </h4>
                <LinkList items={navSections.pages} />
              </div>

              {/* CONTENT with Button */}
              {/* <div className="flex flex-col">
                <div className="mb-5  md:mb-24">
                  <LinkList items={navSections.content} />
                </div>

                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="relative mt-0 px-8 py-6 bg-white text-black inline-flex text-xs font-bold uppercase rounded-full overflow-hidden hover:shadow-lg transition-shadow mb-auto"
                  style={{ minWidth: '160px' }}
                  aria-label="More Templates"
                >
                  <span
                    ref={defaultTextRef}
                    className="block absolute inset-0 flex items-center justify-center"
                  >
                    MORE TEMPLATES
                  </span>
                  <span
                    ref={hoverTextRef}
                    className="block absolute inset-0 flex items-center justify-center"
                    style={{ transform: 'translateY(100%)', opacity: 0 }}
                  >
                    TEMPLATES
                  </span>
                </button>
              </div> */}
            </div>
            {/* UTILITY PAGES */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-white font-bold mb-6">
                Utility Pages
              </h4>
              <LinkList items={navSections.utility} />
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-16 md:pt-32 flex justify-center items-center text-center">
          <p className="text-xs text-gray-500">
            © 2025 Arkitect
            {/* <a
              href="#"
              className="text-white hover:text-gray-300 underline mx-1"
            >
              Arkitect
            </a> */}
          </p>
        </div>
      </div>
    </footer>
  );
}
