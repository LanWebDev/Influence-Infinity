"use client";
import React from "react";
import Section from "../ReusableComponents/Section";
import { motion } from "framer-motion";
import { values } from "@/constants/constants";
import Image from "next/image";

const Values = () => {
  return (
    <Section id="values" className="flex justify-center pt-[6rem]">
      <div className="w-full flex flex-col max-w-[1300px] justify-center items-center space-y-10">
        <div className="items-center justify-center flex  flex-col  w-full space-y-2 ">
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] text-middle ">
              Our Values
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="font-header text-[50px] max-md:text-3xl font-[700] tracking-[-1px] text-text text-center ">
              Guiding Principles That <br /> Drive Our Success
            </h3>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-10">
          {values.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center text-center space-y-4 max-w-sm p-4"
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <div>
                <Image src={item.icon} alt="icon" className="w-[100px]" />
              </div>
              <div className="space-y-2 w-[80%]">
                <h3 className="text-text font-header text-2xl font-[600]">
                  {item.title}
                </h3>
                <p className="text-text2 font-body text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Values;
