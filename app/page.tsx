import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

import React from "react";

const Home = () => {
  return (
    <>
      <div className=" flex-col justify-center">
        <Header />
        <Hero />
        <Services />
        <About />
        <CTABanner />
      </div>
    </>
  );
};

export default Home;
