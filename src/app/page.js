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
      <div>
        <div className="">
          <Navbar></Navbar>
        </div>
        <div className="">
          <ServicesSection></ServicesSection>
          <ProjectCards></ProjectCards>
          <StatisticsSection></StatisticsSection>
          <TeamSection></TeamSection>
          <LeftAlignHero></LeftAlignHero>
          <CtaSection></CtaSection>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
