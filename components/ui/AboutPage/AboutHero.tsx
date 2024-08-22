"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "../ReusableComponents/Section";

const Hero = () => {
  return (
    <Section
      id="abouthero"
      className="flex flex-col justify-center w-full items-center"
    >
      <div className="h-[30rem] xxl:max-w-[90%] w-full bg-white  bg-grid-gray-400/[0.3] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white  [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] "></div>
        <div className="items-center justify-center flex  flex-col  w-full space-y-2 z-10">
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="uppercase text-base max-md:text-base bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] text-middle ">
              About us
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="font-header text-[50px] max-md:text-[35px] font-[700] tracking-[-1px] text-text text-center ">
              We&apos;re a social Media
              <br />
              <span className="text-prim">Marketing Agency</span>
            </h3>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
