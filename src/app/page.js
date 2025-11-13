// app/page.js

import CtaSection from '@/Components/CtaSection';
import Footer from '@/Components/Footer';
import LeftAlignHero from '@/Components/LeftAlignHero';
import Navbar from '@/Components/NavBar';
import ProjectCards from '@/Components/ProjectCards';
import ServicesSection from '@/Components/ServicesSection';
import StatisticsSection from '@/Components/StatisticsSection';
import TeamSection from '@/Components/TeamSection';

export default function HomePage() {
  return (
    <>
      <div className="bg-[#191919] text-white pt-4 relative overflow-hidden font-[Satoshi]">
        <div className="">
          <div className="">
            <Navbar></Navbar>
          </div>

          <div className="md:-mt-16 -mt-36 relative w-[96vw] sm:w-[93vw] md:w-[97vw] mx-auto">
            <ServicesSection></ServicesSection>
          </div>
        </div>
        <ProjectCards></ProjectCards>
        <StatisticsSection></StatisticsSection>
        <TeamSection></TeamSection>
        <LeftAlignHero></LeftAlignHero>
      </div>
      <div>
        <div className="relative  bg-[#191919] ">
          <CtaSection></CtaSection>
        </div>
        <div className="relative -mt-0.5">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
