'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // const container = {
  //   hidden: {},
  //   visible: {
  //     transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  //   },
  // };

  // const item = {
  //   hidden: { y: 40, opacity: 0, scale: 0.95 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  //   },
  // };
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const NavPillContent = () => {
    return (
      <nav className="fixed top-16 flex items-center bg-[#1A1A1A] text-white px-4 py-2 rounded-full shadow-lg font-satoshi  md:justify-between w-auto overflow-visible z-50">
        {/* Nav links */}
        <ul className="hidden lg:flex items-center text-sm font-medium">
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
    <div className="fixed top-14 z-50 flex items-center space-x-4 bg-[#1A1A1A] text-white px-5 py-3 rounded-full shadow-lg font-satoshi">
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
      ref={headerRef}
      className="relative mx-auto w-[96vw] sm:w-[93vw] md:w-[97vw] md:h-[190vh] lg:h-[292vh] rounded-t-[70px] overflow-hidden"
    >
      {/* Static Zoomed Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover scale-[1.2]"
        style={{
          backgroundImage:
            "url('https://assets-global.website-files.com/634e3ae6f7e032d01b5e7fa7/635d6591482d4a5dc604ccc3_home-hero-bg.webp')",
        }}
      ></div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/15 rounded-t-[60px] pointer-events-none"></div>

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
        <motion.div
          className="hero-content flex flex-col text-center max-w-4xl px-4 mt-[5vw] md:mt-[20vw] lg:mt-[25vw] mb-56 z-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="text-5xl font-light md:text-8xl lg:text-[150px] font-serif leading-none mb-6 md:mt-20"
          >
            <motion.span variants={item} className="block">
              YOUR
            </motion.span>
            <motion.span variants={item} className="block">
              DREAM
            </motion.span>
            <motion.span variants={item} className="block">
              PLACE
            </motion.span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-2xl max-w-md font-satoshi text-center mx-auto"
          >
            Designing timeless, luxurious spaces that redefine modern
            architecture and living.
          </motion.p>
        </motion.div>

        {/* Bottom Left & Right Content (Part of hero-content animation) */}
        <div className="absolute bottom-40 p-6 md:p-10 flex-col lg:flex-row justify-center  w-full gap-20 lg:gap-16 hidden md:flex  z-10 mt-36">
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
            <p className="pb-2 sm:pb-4">
              With a commitment to excellence, we craft architectural
              masterpieces that inspire and endure. Every project reflects
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="block  hover:text-yellow-400 pb-2 sm:pb-4"
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
