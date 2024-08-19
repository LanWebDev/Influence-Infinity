import About from "@/components/ui/HomePage/About";
import CTABanner from "@/components/ui/HomePage/CTABanner";
import Header from "@/components/ui/Navigation/Header";
import Hero from "@/components/ui/HomePage/Hero";
import Process from "@/components/ui/HomePage/Process";
import Services from "@/components/ui/HomePage/Services";

import React from "react";
import Testimonials from "@/components/ui/HomePage/Testimonials";

const Home = () => {
  return (
    <>
      <div className=" flex-col justify-center">
        <Header />
        <Hero />
        <Services />
        <About />
        <CTABanner />
        <Process />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
