"use client";
import React from "react";
import TabsComponent from "./TabsComponent";
import Section from "./Section";

const Process = () => {
  return (
    <Section
      id="process"
      className="flex-col flex justify-center items-center bg-gray2 -translate-y-[150px]"
    >
      <div className="flex max-lg:flex-col items-center  max-w-[1300px] w-full px-4 pt-[14rem] py-16 space-y-4">
        <div className="flex-col space-y-2 justify-between w-full ">
          <h2 className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] w-max ">
            Our process
          </h2>
          <h3 className="font-header text-[50px] max-lg:text-[35px] font-[700] tracking-[-1px] text-text ">
            How We Work
          </h3>
        </div>
        <div>
          <p className="text-text2 text-xl">
            Our social media marketing strategy also incorporates strategic
            partnerships with influencers.
          </p>
        </div>
      </div>

      <TabsComponent />
    </Section>
  );
};

export default Process;
