"use client";
import React from "react";
import TabsComponent from "../HomePage/components/TabsComponent";
import Section from "../ReusableComponents/Section";
import { motion } from "framer-motion";
const Process = () => {
  return (
    <Section
      id="process"
      className="flex-col flex justify-center items-center bg-gray2  z-1"
    >
      <div className="flex max-lg:flex-col items-center  max-w-[1300px] w-full px-4  py-16 space-y-4">
        <div className="flex-col space-y-2 justify-between w-full ">
          <motion.h2
            className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] w-max "
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our process
          </motion.h2>
          <motion.h3
            className="font-header text-[50px] max-lg:text-[35px] font-[700] tracking-[-1px] text-text "
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            How We Work
          </motion.h3>
        </div>
        <div>
          <motion.p
            className="text-text2 text-[21px] font-body"
            initial={{ opacity: 0, x: "20%" }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our social media marketing strategy also incorporates strategic
            partnerships with influencers.
          </motion.p>
        </div>
      </div>

      <TabsComponent />
    </Section>
  );
};

export default Process;
