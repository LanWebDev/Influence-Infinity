import React from "react";
import AboutHero from "@/components/ui/AboutPage/AboutHero";
import AboutAgency from "@/components/ui/AboutPage/AboutAgency";
import CoreValues from "@/components/ui/AboutPage/CoreValues";
import Values from "@/components/ui/AboutPage/Values";
import AboutProcess from "@/components/ui/AboutPage/AboutProcess";
import Stats from "@/components/ui/AboutPage/Stats";
import CTABanner from "@/components/ui/HomePage/CTABanner";
import Team from "@/components/ui/AboutPage/Team";
import Footer from "@/components/ui/Footer/Footer";

const About = () => {
  return (
    <>
      <div className=" flex-col justify-center">
        <AboutHero />
        <AboutAgency />
        <CoreValues />
        <Values />
        <AboutProcess />
        <Stats />
        <CTABanner />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default About;
