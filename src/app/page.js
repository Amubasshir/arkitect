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
      <div className="bg-black text-white px-2 pt-4 relative overflow-hidden">
        <div className="">
          <div className="">
            <Navbar></Navbar>
          </div>

          <div className="md:-mt-16 -mt-36 relative">
            <ServicesSection></ServicesSection>
          </div>
        </div>
        <ProjectCards></ProjectCards>
        <StatisticsSection></StatisticsSection>
        <TeamSection></TeamSection>
        <LeftAlignHero></LeftAlignHero>
      </div>
      <div>
        <div className="relative  bg-black px-2">
          <CtaSection></CtaSection>
        </div>
        <div className="relative -mt-10">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
