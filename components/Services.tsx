"use client";
import React from "react";
import Section from "./Section";
import BentoGrid from "./BentoGrid";

const Services = () => {
  return (
    <Section id="services" className="flex justify-center pt-10">
      <div className="flex flex-col justify-center w-full max-w-[1300px]">
        <div className="items-center justify-center flex  flex-col  w-full space-y-2 ">
          <h2 className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] text-middle ">
            Our Services
          </h2>
          <h3 className="font-header text-[50px] max-md:text-3xl font-[700] tracking-[-1px] ">
            Social Media Strategy
          </h3>
        </div>

        {/* BENTO GRID */}
        <BentoGrid />
      </div>
    </Section>
  );
};

export default Services;
