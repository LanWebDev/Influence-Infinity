"use client";
import React from "react";
import Business from "@/assets/business-growth.svg";
import Image from "next/image";
import { ButtonTemplate } from "./ButtonTemplate";
import LottieAnimation from "./ui/animations/LottieAnimation";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="xl:w-[80%] max-xl:w-[90%] max-sm:w-full flex  justify-center px-10 lg:py-[150px] py-[100px]  bg-gray-200 rounded-xl">
        <div className=" max-w-[1300px] w-full  flex max-lg:flex-col items-center z-10 justify-center  space-y-10 ">
          <div className="max-w-[700px] max-lg:max-w-[750px]  max-lg:text-center">
            <h1 className="text-text font-header text-[70px] xl:leading-[80px] leading-[50px] md:leading-[60px] font-[600] tracking-[-0.03em]  max-xl:text-[55px] max-md:text-[35px]">
              Innovative Social Media Solutions to{" "}
              <span className="text-prim">
                <br />
                Unlock Growth
              </span>
            </h1>
            <p className="font-body text-text text-lg max-md:text-base lg:pt-6 lg:pb-10 max-lg:pb-6">
              At Influence Infinity, we elevate brands to their limitless
              potential through innovative social media strategies that resonate
              and engage.
            </p>
            <ButtonTemplate
              title="LET'S TALK"
              className="text-base p-8 max-lg:w-[180px] w-[230px] max-md:p-6 rounded-sm"
            />
          </div>
          <div className=" w-full  justify-center flex">
            <LottieAnimation
              fallback={<Image src={Business} alt="under construction" />}
              animation="https://lottie.host/0310cbce-dd31-4e30-bfc4-a8d83207f576/AiDjqgvPyD.json"
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
