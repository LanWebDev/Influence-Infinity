import React from "react";
import AboutHero from "@/components/ui/AboutPage/AboutHero";
import AboutAgency from "@/components/ui/AboutPage/AboutAgency";
import CoreValues from "@/components/ui/AboutPage/CoreValues";

const About = () => {
  return (
    <>
      <div className=" flex-col justify-center">
        <AboutHero />
        <AboutAgency />
        <CoreValues />
      </div>
    </>
  );
};

export default About;
