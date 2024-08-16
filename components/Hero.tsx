"use client";
import React from "react";
import Business from "@/assets/business-growth.svg";
import Image from "next/image";
import { ButtonTemplate } from "./ButtonTemplate";
import LottieAnimation from "./ui/animations/LottieAnimation";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Section from "./Section";

const Hero = () => {
  return (
    <Section id={"hero"}>
      <div className="w-full flex justify-center">
        <div className="xl:w-[85%] max-xl:w-[100%]  max-sm:w-full flex  justify-center px-10 lg:py-[150px] py-[100px] lg:h-[80vh] bg-gray-200 rounded-[2rem]">
          <div className=" max-w-[1300px] w-full  flex max-lg:flex-col items-center z-10 justify-center  space-y-10 ">
            <div className="max-w-[700px] max-lg:max-w-[750px]  max-lg:text-center">
              <h1 className="text-text font-header text-[70px] xl:leading-[80px] leading-[50px] md:leading-[60px] font-[600] tracking-[-0.03em]  max-xl:text-[55px] max-md:text-[35px]">
                Innovative Social Media Solutions to{" "}
                <span className="text-prim">Unlock Growth</span>
              </h1>
              <TextGenerateEffect
                words="At Influence Infinity, we elevate brands to their limitless
              potential through innovative social media strategies that resonate
              and engage."
                className="font-body text-text lg:text-2xl md:text-xl sm:text-sm lg:pt-6 lg:pb-10 max-lg:pb-6 max-lg:pt-4 font-semibold"
              />

              <ButtonTemplate
                title="LET'S TALK"
                className="text-base p-8 max-lg:w-[180px] w-[230px] max-md:p-6 rounded-sm"
              />
            </div>
            <div className=" w-full  justify-center flex ">
              <LottieAnimation
                fallback={<Image src={Business} alt="business growth" />}
                animation="https://lottie.host/0310cbce-dd31-4e30-bfc4-a8d83207f576/AiDjqgvPyD.json"
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
