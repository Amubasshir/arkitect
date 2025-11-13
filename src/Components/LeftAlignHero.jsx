
const backgroundImage = {
  url: 'https://assets-global.website-files.com/634e3ae6f7e032d01b5e7fa7/635d47feb165560f5de1a788_home-story-bg.webp',
  alt: 'Curved modern architecture',
};

export default function LeftAlignHero() {
  return (
    <section className="relative w-full md:min-h-[140vh] min-h-[50vh] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage.url}
        alt={backgroundImage.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#191919]/15" />

      {/* Content Area */}
      <div className="relative z-10 w-full h-full lg:min-h-screen flex flex-col justify-end pb-20 px-6 sm:px-16 lg:px-20 mt-20">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left text-white ">
          {/* Main Title */}
          <h1 className="leading-2 mb-6 tracking-tight  font-bold mt-20">
            <span className="text-5xl sm:text-6xl md:text-xl lg:text-9xl font-medium font-[Zodiak]">
              INNOVATIVE
            </span>{' '}
            <br />
            <span className="font-semibold text-5xl sm:text-6xl md:text-8xl lg:text-9xl">
              DESIGN
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-3xl  max-w-3xl font-medium mx-auto lg:mx-0 mb-12">
            With a clear plan in place, we craft a sophisticated design that
            blends aesthetics, functionality, and innovation.
          </p>

          {/* Call to Action Link */}
          <div className="pt-6 md:mt-20 flex justify-center lg:justify-start">
            <a
              href="#"
              className="flex items-center text-white text-2xl font-semibold group w-max"
            >
              Our Story
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1 w-10 h-10 rounded-full border flex items-center justify-center">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
