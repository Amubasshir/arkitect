'use client';

import { useState, useRef, useEffect } from 'react';

import { FiChevronDown, FiMenu } from 'react-icons/fi';

import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownTimeout = useRef(null);
  const targetDivRef = useRef(null);
  const headerRef = useRef(null); // Keep this if you use the scroll effect
  const cursorRef = useRef(null);

  const pulseTweenRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const header = headerRef.current;

    if (!cursor || !header) return;

    document.body.style.cursor = 'none';

    const pos = { x: -9999, y: -9999 };
    const actual = { x: -9999, y: -9999 };
    const pulseTweenRef = { current: null };

    const setCursorX = gsap.quickSetter(cursor, 'x', 'px');
    const setCursorY = gsap.quickSetter(cursor, 'y', 'px');

    // Initial cursor setup
    gsap.set(cursor, {
      scale: 1.1,
      backgroundColor: '#000',
      opacity: 0,
      x: -9999,
      y: -9999,
    });

    // Track mouse position
    const moveCursor = e => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    // Smooth follow animation
    const animateCursor = () => {
      const damp = 0.2;
      actual.x += (pos.x - actual.x) * damp;
      actual.y += (pos.y - actual.y) * damp;

      setCursorX(actual.x);
      setCursorY(actual.y);
    };

    // Hover logic — handle interactive elements
    const handleHover = e => {
      const target = e.target.closest(
        'li, a, button, [role="button"], .cursor-pointer, svg'
      );
      const isInteractive = !!target;

      if (isInteractive) {
        if (!pulseTweenRef.current) {
          pulseTweenRef.current = gsap.to(cursor, {
            scale: 0,
            backgroundColor: '#fff',
            color: '#000',
            duration: 0.25,
            ease: 'power2.out',
          });
        } else {
          pulseTweenRef.current.play();
        }
      } else {
        if (pulseTweenRef.current) pulseTweenRef.current.reverse();
      }
    };

    // Cursor enters header area
    const handleMouseEnter = e => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    // Cursor leaves header area
    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });

      pos.x = -9999;
      pos.y = -9999;
      actual.x = -9999;
      actual.y = -9999;

      document.body.style.cursor = 'default';
      if (pulseTweenRef.current) pulseTweenRef.current.reverse();
    };

    // Event listeners
    gsap.ticker.add(animateCursor);
    header.addEventListener('mousemove', moveCursor);
    header.addEventListener('mouseover', handleHover);
    header.addEventListener('mouseenter', handleMouseEnter);
    header.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      gsap.ticker.remove(animateCursor);
      document.body.style.cursor = 'default';
      if (pulseTweenRef.current) pulseTweenRef.current.kill();

      header.removeEventListener('mousemove', moveCursor);
      header.removeEventListener('mouseover', handleHover);
      header.removeEventListener('mouseenter', handleMouseEnter);
      header.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 300);
  };

  const NavPillContent = () => {
    return (
      <nav className="fixed top-16 flex items-center bg-[#1A1A1A] text-white px-4 py-2 rounded-full shadow-lg font-satoshi  md:justify-between w-auto overflow-visible z-50">
        {/* Nav links */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <li className="cursor-pointer px-5 py-3  font-light hover:bg-gray-600 rounded-full">
            Projects
          </li>
          <li className="cursor-pointer px-5 py-3  font-light hover:bg-gray-600 rounded-full">
            Services
          </li>
          <li className="cursor-pointer px-5 py-3  font-light hover:bg-gray-600 rounded-full">
            About
          </li>
        </ul>

        {/* Dropdown */}
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          <div
            className="relative hidden md:flex cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex items-center gap-1 px-5 py-3 font-light hover:bg-gray-600 rounded-full">
              Pages <FiChevronDown size={14} />
            </span>

            <div
              className={`absolute  -translate-x-1/2 top-full mt-6 bg-[#121212] rounded-[30px] shadow-2xl text-xl w-[60vw] max-w-[1000px] 
    transition-all duration-300 ease-in-out transform ${
      dropdownOpen
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-4 pointer-events-none'
    }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-10 mt-6">
                <div>
                  <h3 className="text-xl text-white uppercase mb-3 font-semibold">
                    Pages
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Home',
                      'Projects',
                      'Projects Single',
                      'Services',
                      'About',
                      'Career',
                      'Contact',
                    ].map(item => (
                      <li
                        key={item}
                        className="cursor-pointer text-white transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-yellow-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl text-white uppercase mb-3 font-semibold">
                    Pages
                  </h3>
                  <ul className="space-y-2">
                    {['Blog', 'Blog Post', 'Shop', 'Shop Single'].map(item => (
                      <li
                        key={item}
                        className="cursor-pointer text-white transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-yellow-400"
                      >
                        {item}
                      </li>
                    ))}
                    <li className="cursor-pointer font-semibold underline text-white">
                      More Templates
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl text-white uppercase mb-3 font-semibold">
                    Utility Pages
                  </h3>
                  <ul className="space-y-2">
                    {[
                      '404 Error Page',
                      'Password Protected',
                      'Styleguide',
                      'Licensing',
                      'Changelog',
                    ].map(item => (
                      <li
                        key={item}
                        className="cursor-pointer text-white transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-yellow-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-5 bg-white/30"></div>

          {/* Mobile Menu Icon */}
          <FiMenu
            size={20}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer lg:hidden"
          />

          {/* Cart */}
          <div className="relative">
            <div
              onClick={() => setCartOpen(!cartOpen)}
              className="flex items-center justify-center w-7 h-7 bg-white text-black rounded-full font-semibold cursor-pointer"
            >
              {cartItems.length}
            </div>
            {cartOpen && (
              <div className="absolute right-0 mt-4 bg-[#1A1A1A] text-white rounded-2xl shadow-xl w-64 p-4">
                <p className="text-sm text-gray-400 text-center">
                  Your cart is empty
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  };

  const MobilePillMenu = () => (
    <div className="fixed top-8 z-50 flex items-center space-x-4 bg-[#1A1A1A] text-white px-5 py-3 rounded-full shadow-lg font-satoshi">
      <FiMenu
        size={20}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="cursor-pointer"
      />
      <div className="relative">
        <div
          onClick={() => setCartOpen(!cartOpen)}
          className="flex items-center justify-center w-7 h-7 bg-white text-black rounded-full font-semibold cursor-pointer"
        >
          {cartItems.length}
        </div>
      </div>
    </div>
  );

  return (
    <header
      ref={headerRef} // Attach the ref to the header element
      className="relative mx-auto w-[96vw] md:h-[190vh] lg:h-[300vh]   bg-contain bg-no-repeat rounded-t-[70px] overflow-hidden "
      style={{
        backgroundImage:
          "url('https://assets-global.website-files.com/634e3ae6f7e032d01b5e7fa7/635d6591482d4a5dc604ccc3_home-hero-bg.webp')",

        backgroundPosition: 'center top',

        backgroundSize: 'cover',
      }}
    >
      <div
        ref={cursorRef}
        // Added background color, padding, and flex centering for the text
        className="fixed top-0 left-0 w-16 h-16 px-4 py-2 
                  rounded-full text-white text-sm font-semibold 
                  flex items-center justify-center whitespace-nowrap 
                    pointer-events-none z-[9999] opacity-100 
                       transform -translate-x-1/2 -translate-y-1/2
                             transition-all duration-200 ease-out"
      >
        Scroll
      </div>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20 rounded-t-[60px]"></div>

      {/* Navigation (Fixed Position) */}
      <div className=" top-10 left-0 w-full px-8 py-6 z-30 flex items-center justify-between text-white ">
        <div className="flex items-center gap-8 w-full justify-between z-30 mt-6">
          <div className="flex">
            <div className="font-bold text-xl border-white px-3 py-1 cursor-pointer">
              arkitect
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4">
            <NavPillContent />
          </div>

          <div className="hidden md:flex lg:hidden flex-1 justify-end  z-50 sticky top-5">
            <NavPillContent />
          </div>
          <div className="md:hidden flex-1 flex justify-end">
            <MobilePillMenu />
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#"
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center transition-colors"
            >
              <FaTwitter color="black" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center  transition-colors"
            >
              <FaFacebookF color="black" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center  transition-colors"
            >
              <FaInstagram color="black" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content (To be animated) */}
      <div className="flex flex-col justify-center items-center h-screen text-white text-center px-4">
        {/* Added class 'hero-content' for the GSAP target */}
        <div className="hero-content flex flex-col text-center max-w-4xl px-4 mt-[25vw] mb-56 z-10">
          <h1 className="text-7xl font-light md:text-8xl lg:text-[150px] font-serif leading-none mb-6 mt-20">
            YOUR <br />
            DREAM <br />
            PLACE
          </h1>
          <p className="text-2xl max-w-md font-satoshi text-center mx-auto">
            Designing timeless, luxurious spaces that redefine modern
            architecture and living.
          </p>
        </div>

        {/* Bottom Left & Right Content (Part of hero-content animation) */}
        <div className="absolute bottom-40   p-6 md:p-10 flex-col lg:flex-row justify-center  w-full gap-20 lg:gap-16 hidden md:flex  z-10">
          <div className="relative flex-1 flex-col items-start space-y-4 ml-0 md:ml-10 text-left h-full">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif  mb-3 leading-tight">
              We love & live <br /> architecture
            </h2>
            <div className="flex space-x-2 text-sm cursor-pointer items-center gap-4 mt-16">
              <span className="opacity-75 font-semibold text-xl text-white">
                Our Story
              </span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0L9.9 2.1L18.9 11H0V13H18.9L9.9 22L12 24L24 12L12 0Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 text-start text-base sm:text-ms md:text-lg lg:text-3xl max-w-full ">
            <p className="pb-2 sm:pb-4">
              Arkitect creates luxurious, modern spaces where innovation meets
              timeless elegance. Our designs push boundaries.
            </p>
            <p>
              With a commitment to excellence, we craft architectural
              masterpieces that inspire and endure. Every project reflects
            </p>
            <div className="space-y-1">
              <a
                href="mailto:hello@example.com"
                className="block  hover:text-yellow-400"
              >
                hello@example.com
              </a>
              <a
                href="tel:+4917612345679"
                className="block hover:text-yellow-400"
              >
                +49 176 123 456 79
              </a>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed top-[88px] right-4 w-60 rounded-2xl bg-[#1A1A1A] p-8 shadow-lg z-40 text-white md:hidden">
          <ul className="flex flex-col  space-y-6 text-lg">
            <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li
              className="hover:text-yellow-400 cursor-pointer flex items-center mr-4 w-full"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Pages <FiChevronDown />
            </li>
            {dropdownOpen && (
              <ul className="flex flex-col items-start pl-4 mt-2 space-y-2 text-base w-full">
                <li>Home</li>
                <li>Projects</li>
                <li>Services</li>
                <li>About</li>
              </ul>
            )}
            <li className="hover:text-yellow-400 cursor-pointer">
              Cart ({cartItems.length})
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}



'use client';
import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const teamData = [
  {
    id: 1,
    name: 'Cameron Williamson',
    title: 'CEO',
    // নিশ্চিত করুন যে এই URL গুলি অ্যাক্সেসযোগ্য
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebde396e6ef1be56a70e0_about-team-01-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1570295999919-56ceb8e25514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    id: 2,
    name: 'Albert Flores',
    title: 'ARCHITECT',
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebe9fb165560737f0ab4f_about-team-02-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1549419137-a12866e4a2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    id: 3,
    name: 'Bessie Cooper',
    title: 'INTERIOR DESIGNER',
    // এই পাথগুলি আপনার পাবলিক ডিরেক্টরির সাথে মেলানো নিশ্চিত করুন
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebea91407d8dae6ca2584_about-team-04-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1522294721184-b0a68d87b3e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    id: 4,
    name: 'Annette Black',
    title: 'EXTERIOR DESIGNER',
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebea41407d86568ca257a_about-team-03-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1555776269-e72e11894d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
];

// Reusable component for a single Team Member Row with Video Profile
const TeamMemberRow = ({ member }) => {
  // ফলব্যাক ম্যানেজ করার জন্য স্টেট
  const [videoError, setVideoError] = useState(false);

  // ভিডিও লোড হতে ব্যর্থ হলে সেটVideoError(true) কল করা হবে
  const handleVideoError = () => {
    console.error(`Error loading video for ${member.name}: ${member.videoUrl}`);
    setVideoError(true);
  };

  return (
    <div className="flex justify-between items-center py-8 border-b border-gray-100 last:border-b-0">
      {/* Left Side: Video/Image Profile and Name */}
      <div className="flex items-center space-x-6 md:space-x-10">
        <div className="w-20 h-20 md:w-40 md:h-40 flex-shrink-0 rounded-4xl overflow-hidden shadow-md bg-gray-200">
          {/* কন্ডিশনাল রেন্ডারিং: যদি ভিডিওতে এরর না থাকে তবে ভিডিও দেখাও */}
          {!videoError && member.videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={handleVideoError} // এরর হ্যান্ডলার যোগ করা হয়েছে
            >
              <source src={member.videoUrl} type={member.videoType} />
              {/* যদি <source> ট্যাগও কাজ না করে */}
              <img
                src={
                  member.fallbackImage ||
                  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20/%3E"
                }
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </video>
          ) : (
            // যদি ভিডিও এরর থাকে বা videoUrl না থাকে তবে ফলব্যাক ইমেজ দেখাও
            <img
              src={
                member.fallbackImage ||
                "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20/%3E"
              } // ডামি SVG যদি ইমেজও না থাকে
              alt={member.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <h3 className="text-xl md:text-3xl font-extralight text-gray-900 font-serif">
          {member.name}
        </h3>
      </div>

      {/* Right Side: Title and Socials (Previous code remains the same) */}
      <div className="flex items-center space-x-6 md:space-x-10">
        <p className="hidden sm:block text-sm md:text-base uppercase tracking-widest text-black font-medium whitespace-nowrap">
          {member.title}
        </p>
        <div className="flex space-x-3 text-gray-500">
          <a
            href={member.socials.twitter}
            aria-label="Twitter"
            className="hover:bg-gray-300 transition duration-150 h-10 w-10 rounded-full bg-gray-200 text-black flex items-center justify-center"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href={member.socials.instagram}
            aria-label="Instagram"
            className="hover:bg-gray-300 transition duration-150 h-10 w-10 rounded-full bg-gray-200 text-black flex items-center justify-center"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href={member.socials.facebook}
            aria-label="Facebook"
            className="hover:bg-gray-300 transition duration-150 h-10 w-10 rounded-full bg-gray-200 text-black flex items-center justify-center"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className=" mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-gray-600">
            OUR TEAM
          </h2>
        </div>

        {/* Team Members List */}
        <div className="space-y-4">
          {teamData.map(member => (
            <TeamMemberRow key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
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
    <div ref={containerRef} className="relative bg-white ">
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
                    <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-medium mb-4 tracking-tight uppercase text-gray-100 leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-base md:text-lg font-medium max-w-xs text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end flex-wrap sm:flex-nowrap gap-4 sm:gap-0 ">
                  <div className="flex space-x-2 text-[8px] sm:text-[10px] font-semibold flex-wrap gap-2">
                    {project.btn && (
                      <span className="px-3 py-2 border border-white/50 rounded-full uppercase tracking-wider cursor-pointer font-semibold ">
                        {project.btn}
                      </span>
                    )}
                    {project.btn2 && (
                      <span className="px-3 py-2 border border-white/50 rounded-full uppercase tracking-wider cursor-pointer ">
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
