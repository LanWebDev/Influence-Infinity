"use client";
import React from "react";
import Business from "@/assets/business-growth.svg";
import Image from "next/image";
import { ButtonTemplate } from "../ReusableComponents/ButtonTemplate";
import LottieAnimation from "../animations/LottieAnimation";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../text-generate-effect";
import Section from "../ReusableComponents/Section";

const Hero = () => {
  return (
    <Section id={"hero"} className="pb-[6rem]">
      <div className="w-full flex justify-center ">
        <div className="xl:w-[95%]  max-xl:w-[100%]  max-sm:w-full flex  justify-center px-10 lg:py-[150px] py-[100px] lg:h-[85vh] bg-gray-200 rounded-[2rem] items-center">
          <div className=" max-w-[1300px] w-full  flex max-lg:flex-col items-center z-10 justify-center space-x-6   space-y-10 ">
            <div className=" max-w-[750px]  max-lg:text-center">
              <motion.div
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <h1
                  className="text-text font-header text-[70px] xl:leading-[80px] leading-[50px] md:leading-[60px] font-[600] tracking-[-0.03em]  max-xl:text-[55px] max-md:text-[35px] delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0"
                  data-taos-offset="400"
                >
                  Accelerating <br className="max-md:hidden" />
                  Success through <br className="max-sm:hidden" />
                  <span className="text-prim">Digital Mastery</span>
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <TextGenerateEffect
                  words="At Influence Infinity, we elevate brands to their limitless
                potential through innovative social media strategies that resonate
                and engage."
                  className=" text-text lg:text-2xl md:text-xl sm:text-md lg:pt-6 lg:pb-10 max-lg:pb-6 max-lg:pt-4 font-semibold"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "10%" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.75 }}
              >
                <ButtonTemplate
                  title="LET'S TALK"
                  className="text-base p-8 max-lg:w-[180px] w-[230px] max-md:p-6 rounded-sm"
                  link={"/contact"}
                />
              </motion.div>
            </div>
            <div className=" justify-center items-center w-full flex ">
              <motion.div
                initial={{ opacity: 0, x: "10%" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0 }}
              >
                <LottieAnimation
                  fallback={<Image src={Business} alt="business growth" />}
                  animation="https://lottie.host/0310cbce-dd31-4e30-bfc4-a8d83207f576/AiDjqgvPyD.json"
                  loop
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
