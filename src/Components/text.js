'use client';
import { useState, useRef } from 'react';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Pages dropdown
  const [cartOpen, setCartOpen] = useState(false); // Cart popup
  const [cartItems] = useState([]); // Cart items count
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu
  const dropdownTimeout = useRef(null); // Ref to store timeout ID

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 300);
  };

  const NavPillContent = () => (
    <nav className=" flex items-center bg-[#1A1A1A] text-white px-5 py-3 rounded-full shadow-lg relative font-satoshi lg:space-x-8 md:justify-between w-auto ">
      {/* Left Links */}
      <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium">
        <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
        <li className="hover:text-yellow-400 cursor-pointer">Services</li>
        <li className="hover:text-yellow-400 cursor-pointer">About</li>
      </ul>

      {/* Right Icons / Dropdown */}
      <div className="flex items-center gap-4 ml-auto md:ml-0">
        {/* Pages Dropdown */}
        <div
          className="relative hidden md:flex cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="flex items-center gap-1 hover:text-yellow-400 ,md:justify-end">
            Pages <FiChevronDown size={14} />
          </span>

          <div
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-[#121212] rounded-[30px] shadow-2xl text-sm transition-all duration-200 ease-out ${
              dropdownOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-6'
            } w-[90vw] max-w-[700px]`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-10">
              {/* Column 1 */}
              <div>
                <h3 className="text-xs text-gray-400 uppercase mb-3 font-semibold">
                  Pages
                </h3>
                <ul className="space-y-2">
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Home
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Projects
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Projects Single
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Services
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    About
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Career
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Contact
                  </li>
                </ul>
              </div>
              {/* Column 2 */}
              <div>
                <h3 className="text-xs text-gray-400 uppercase mb-3 font-semibold">
                  Pages
                </h3>
                <ul className="space-y-2">
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Blog
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Blog Post
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Shop
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Shop Single
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer font-semibold underline hover:translate-x-2 transition-transform duration-200 ">
                    More Templates
                  </li>
                </ul>
              </div>
              {/* Column 3 */}
              <div>
                <h3 className="text-xs text-gray-400 uppercase mb-3 font-semibold">
                  Utility Pages
                </h3>
                <ul className="space-y-2">
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    404 Error Page
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Password Protected
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Styleguide
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Licensing
                  </li>
                  <li className="hover:text-yellow-400 cursor-pointer hover:translate-x-2 transition-transform duration-200 ">
                    Changelog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="hidden md:block w-[2px] h-5 bg-white/30"></div>

        {/* Hamburger Menu */}
        <FiMenu
          size={20}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="cursor-pointer hover:text-yellow-400 lg:hidden flex justify-end md:justify-end"
        />

        {/* Cart Icon */}
        <div className="relative ">
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

  const MobilePillMenu = () => (
    <div className="flex items-center space-x-4 bg-[#1A1A1A] text-white px-5 py-3 rounded-full shadow-lg relative font-satoshi">
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
      className="relative w-full h-[300vh] bg-center bg-cover rounded-t-[60px] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://assets-global.website-files.com/634e3ae6f7e032d01b5e7fa7/635d6591482d4a5dc604ccc3_home-hero-bg.webp')",
        // height: '150vh',
      }}
    >
      <div className="absolute inset-0 bg-black/60 rounded-t-[60px]"></div>
      {/* Navigation */}
      <div className="top-0 left-0 w-full px-8 py-6 z-50 flex items-center lg:justify-between text-white ">
        <div className="flex items-center gap-8 w-full justify-between  z-50">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="font-bold text-xl  border-white px-3 py-1 cursor-pointer">
              ARKITECT
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block lg:block fixed top-6 left-1/2 transform -translate-x-1/2 ">
            <NavPillContent />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobilePillMenu />
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#"
              className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen text-white text-center px-4 ">
        {/* Main Title (Center) */}
        <div className="flex flex-col text-center max-w-4xl px-4  mt-[45vw] mb-56 z-10">
          <h1 className="text-7xl font-light md:text-8xl lg:text-[150px] font-serif  leading-none mb-6">
            YOUR <br />
            DREAM <br />
            PLACE
          </h1>
          <p className="text-2xl max-w-md font-satoshi text-center mx-auto">
            Designing timeless, luxurious spaces that redefine modern
            architecture and living.
          </p>
        </div>

        {/* Bottom Left & Right Content */}
        <div className="absolute bottom-10 left-0 right-0 p-6 md:p-10 flex flex-col lg:flex-row justify-between items-center lg:items-center w-full gap-12 lg:gap-16 ">
          {/* Bottom Left */}
          <div className="relative flex flex-col items-start space-y-4 ml-0 md:ml-10 text-left h-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-3 leading-tight">
              We love & live <br /> architecture
            </h2>

            <div className="flex space-x-2 text-sm cursor-pointer items-center gap-4">
              <span className="opacity-75 font-semibold">Our Story</span>
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

          {/* Bottom Right */}
          <div className="space-y-4 text-start text-base sm:text-lg md:text-xl lg:text-2xl max-w-full lg:max-w-md">
            <p className="pb-4 sm:pb-8">
              Arkitect creates luxurious, modern spaces where innovation meets
              timeless elegance. Our designs push boundaries, blending
              precision, creativity, and functionality.
            </p>
            <p>
              With a commitment to excellence, we craft architectural
              masterpieces that inspire and endure. Every project reflects our
              passion for bold ideas, meticulous craftsmanship, and the future
              of contemporary living.
            </p>

            <div className="space-y-1">
              <a
                href="mailto:hello@example.com"
                className="block font-semibold hover:text-yellow-400"
              >
                hello@example.com
              </a>
              <a
                href="tel:+4917612345679"
                className="block font-semibold hover:text-yellow-400"
              >
                +49 176 123 456 79
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {mobileMenuOpen && (
        <div className="fixed top-[88px] right-4 w-60 rounded-2xl bg-[#1A1A1A] p-8 shadow-lg z-40 text-white md:hidden">
          <ul className="flex flex-col items-center space-y-6 text-lg">
            <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li
              className="hover:text-yellow-400 cursor-pointer flex items-center justify-between w-full"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Pages
              <FiChevronDown />
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
