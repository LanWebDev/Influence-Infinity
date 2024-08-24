"use client";
import React from "react";
import Section from "../ReusableComponents/Section";
import { coreValues } from "@/constants/constants";
import Image from "next/image";

import { Button } from "../button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const CoreValues = () => {
  return (
    <Section id="corevalues" className="flex justify-center bg-gray2 pb-0">
      <div className="p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased max-w-[1300px] w-full  ">
        <div className="flex max-lg:flex-col lg:space-x-4 max-lg:space-y-4 justify-evenly items-center">
          {coreValues.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: item.id * 0.15 }}
              key={item.id}
              className="flex flex-col justify-center items-center  bg-white p-10 py-20 rounded-xl text-center  lg:max-w-sm "
            >
              <div className="flex flex-col justify-center items-center space-y-4">
                <Image src={item.icon} alt="icon" className="w-20" />
                <div className="group space-y-4 cursor-pointer">
                  <h3 className="font-header group-hover:text-prim  text-text text-[26px] font-[600]  group-hover:-translate-y-2 transition duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-[17px] text-text2 lg:min-h-[153px]  group-hover:-translate-y-2 transition duration-300">
                    {item.description}
                  </p>
                </div>
                <div className="py-4">
                  <Button
                    className={`rounded-full py-8 px-6   bg-[linear-gradient(75deg,_#005dc7,_#FF00DD,_#A200FF)] [background-size:300%] bg-left [transition:500ms_background-position_ease-in-out] hover:bg-right`}
                  >
                    <ArrowTopRightIcon className="size-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CoreValues;
