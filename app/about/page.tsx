import React from "react";
import AboutHero from "@/components/ui/AboutPage/AboutHero";
import AboutAgency from "@/components/ui/AboutPage/AboutAgency";
import CoreValues from "@/components/ui/AboutPage/CoreValues";
import Values from "@/components/ui/AboutPage/Values";

const About = () => {
  return (
    <>
      <div className=" flex-col justify-center">
        <AboutHero />
        <AboutAgency />
        <CoreValues />
        <Values />
      </div>
    </>
  );
};

export default About;
