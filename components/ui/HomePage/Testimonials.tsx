"use client";
import React from "react";
import Section from "../ReusableComponents/Section";
import { InfiniteMovingCards } from "./components/InfiniteMovingCards";
import { testimonials } from "@/constants/constants";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <Section id="testimonials" className="-translate-y-[150px]  max-xxl:px-0 ">
      <div className=" w-full flex justify-center z-15">
        <div className="w-full xxl:w-[95%] max-sm:w-full flex  justify-center px-10 p-16   bg-gradient-to-r from-seco to-prim  rounded-[2rem]">
          <div className=" max-w-[1300px] w-full  flex max-lg:flex-col z-10 justify-center  space-y-10 flex-col items-center">
            <div className="max-w-[700px] max-lg:max-w-[750px]  max-lg:text-center text-middle justify-center items-center flex flex-col space-y-6 ">
              <motion.div
                initial={{ opacity: 0, y: "20%" }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray2/90 p-2 px-4 rounded-full max-w-max"
              >
                <h2 className="uppercase text-sm max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600]  ">
                  Our testimonials
                </h2>
              </motion.div>
              <div className="text-center">
                <motion.h3
                  className="font-header text-[40px] max-md:text-3xl font-[700] tracking-[-1px] text-white leading-[50px]"
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  What Our Patients Are Sharing <br />
                  About <span className="text-special">Their Experience</span>
                </motion.h3>
              </div>
            </div>

            <motion.div
              className="py-10 max-w-[1300px] w-full"
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
                className="z-20 "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
