"use client";
import React from "react";
import Section from "../ReusableComponents/Section";
import aboutImage from "@/assets/about.svg";
import Image from "next/image";
import { ButtonTemplate } from "../ReusableComponents/ButtonTemplate";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section
      id={"about"}
      className="relative w-full flex justify-center  py-10 px-4 pb-[6rem]"
    >
      <div className="flex max-w-[1300px] max-lg:flex-col  items-center md:space-x-20 space-y-10">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: "-25%" }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.25 }}
        >
          <Image src={aboutImage} alt="flying a rocket" />
        </motion.div>
        <div className="md:w-[70%] w-full">
          <div className=" flex  flex-col   space-y-2 ">
            <motion.h2
              className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] w-max "
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              About us
            </motion.h2>
            <motion.h3
              className="font-header text-[40px] max-md:text-3xl font-[700] tracking-[-1px] lg:leading-[55px] text-text"
              initial={{ opacity: 0, y: "35%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.5 }}
            >
              Crafting social media strategies that inspire your audience to{" "}
              <span className="text-prim ">connect</span>,{" "}
              <span className="text-prim ">engage</span>, and{" "}
              <span className="text-prim ">stay loyal</span> to your brand
            </motion.h3>
            <motion.div
              className="py-4"
              initial={{ opacity: 0, y: "45%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.65 }}
            >
              <ButtonTemplate
                title="Read more"
                className="w-[12rem] h-[3.5rem] rounded-3xl uppercase"
                link={"/about"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
