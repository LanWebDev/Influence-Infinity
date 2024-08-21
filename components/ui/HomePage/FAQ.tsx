"use client";
import React from "react";
import Section from "../ReusableComponents/Section";
import Questions from "./components/Questions";
import { motion } from "framer-motion";
const FAQ = () => {
  return (
    <Section id="questions">
      <div className="flex w-full justify-center items-center text-center -translate-y-[100px] flex-col space-y-10">
        <div className="max-w-[1300px] items-center flex flex-col justify-center  space-y-2">
          <motion.h2
            className="uppercase  text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] w-max "
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            General Questions
          </motion.h2>
          <motion.h3
            className="font-header text-[50px] max-md:text-3xl font-[700] tracking-[-1px] text-text "
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Frequently Asked Questions
          </motion.h3>
        </div>
        <motion.div
          className="max-w-[900px] w-full  text-left  "
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Questions />
        </motion.div>
      </div>
    </Section>
  );
};

export default FAQ;
