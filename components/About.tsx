import React from "react";
import Section from "./Section";
import aboutImage from "@/assets/about.svg";
import Image from "next/image";
import { ButtonTemplate } from "./ButtonTemplate";

const About = () => {
  return (
    <Section
      id={"about"}
      className="relative w-full flex justify-center py-10 px-4"
    >
      <div className="flex max-w-[1300px] max-lg:flex-col  items-center md:space-x-20 space-y-10">
        <div className="w-full">
          <Image src={aboutImage} alt="flying a rocket" />
        </div>
        <div className="md:w-[70%] w-full">
          <div className=" flex  flex-col   space-y-2 ">
            <h2 className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] w-max ">
              About us
            </h2>
            <h3 className="font-header text-[40px] max-md:text-3xl font-[700] tracking-[-1px] ">
              Social media strategy that makes your audience want to follow &
              engage with your brand
            </h3>
            <div className="py-4">
              <ButtonTemplate
                title="Read more"
                className="w-[12rem] h-[3.5rem] rounded-3xl uppercase"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
