import About from "@/components/ui/HomePage/About";
import CTABanner from "@/components/ui/HomePage/CTABanner";
import Hero from "@/components/ui/HomePage/Hero";
import Process from "@/components/ui/HomePage/Process";
import Services from "@/components/ui/HomePage/Services";

import React from "react";
import Testimonials from "@/components/ui/HomePage/Testimonials";
import FAQ from "@/components/ui/HomePage/FAQ";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className=" flex-col justify-center">
        <Hero />
        <Services />
        <About />
        <CTABanner />
        <Process />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Home;
