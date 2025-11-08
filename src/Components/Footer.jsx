'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const footerContentRef = useRef(null);

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
              start: 'top 80%', // start animating when footer top reaches 80% of viewport
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-8 lg:px-16"
    >
      <div ref={footerContentRef} className="max-w-7xl mx-auto flex flex-col">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12 md:pb-16 lg:pb-20 border-b border-gray-700">
          {/* Column 1 */}
          <div className="flex flex-col space-y-6">
            <span className="text-white text-xl font-serif font-bold border border-white px-2 py-1 w-max">
              arkitect<sup className="text-xs">&reg;</sup>
            </span>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:hello@example.com"
                className="text-lg hover:text-white transition duration-150 underline"
              >
                hello@example.com
              </a>
              <a
                href="tel:+4917612345678"
                className="text-lg hover:text-white transition duration-150 underline"
              >
                +49 176 123 456 78
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition duration-150"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition duration-150"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
              PAGES
            </h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Career', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
              CMS
            </h3>
            <ul className="space-y-3">
              {[
                'Projects',
                'Project Single',
                'Blog',
                'Blog Post',
                'Shop',
                'Shop Single',
              ].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                    className="hover:text-white transition duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
              UTILITY PAGES
            </h3>
            <ul className="space-y-3">
              {['404 Error Page', 'Licensing', 'Changelog'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                    className="hover:text-white transition duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Made by{' '}
            <a href="#" className="underline hover:text-white">
              Solia Templates
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
