"use client";
import React from "react";
import Section from "../ReusableComponents/Section";
import BentoGrid from "./components/BentoGrid";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Section id="services" className="flex justify-center pt-10 pb-[6rem]">
      <div className="flex flex-col justify-center w-full max-w-[1300px]">
        <div className="items-center justify-center flex  flex-col  w-full space-y-2 ">
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] text-middle ">
              Our Services
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="font-header text-[50px] max-md:text-3xl font-[700] tracking-[-1px] text-text">
              Social Media Strategy
            </h3>
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div
          className=" delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0"
          data-taos-offset="400"
        >
          <BentoGrid />
        </div>
      </div>
    </Section>
  );
};

export default Services;
