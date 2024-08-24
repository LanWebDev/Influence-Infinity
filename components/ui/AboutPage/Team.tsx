"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "../ReusableComponents/Section";
import Image from "next/image";
import { team } from "@/constants/constants";

const Team = () => {
  return (
    <Section id="team" className="flex justify-center pt-[6rem]">
      <div className="w-full flex flex-col max-w-[1300px] justify-center items-center space-y-10">
        <div className="items-center justify-center flex  flex-col  w-full space-y-2 ">
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] text-middle ">
              Our Team
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="font-header text-[50px] max-md:text-3xl font-[700] tracking-[-1px] text-text text-center ">
              The Team Driving <br />
              Your Success
            </h3>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-4 max-lg:grid-cols-2 gap-4 py-10">
          {team.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center text-center space-y-4 bg-gray1 p-4 z-10"
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <div>
                <Image src={item.image} alt="icon" className="w-[150px]" />
              </div>
              <div className="space-y-2 ">
                <h3 className="text-text font-header text-2xl font-[600]">
                  {item.name}
                </h3>
                <p className="text-text2 font-body text-base">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;
