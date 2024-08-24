"use client";
import React from "react";
import Section from "../ReusableComponents/Section";
import Image from "next/image";

import { motion } from "framer-motion";
import followerIcon from "@/assets/icons/follower3.png";
import impressionsIcon from "@/assets/icons/impressions.png";
import roiIcon from "@/assets/icons/roi.png";
import clientsIcon from "@/assets/icons/clients2.png";
import Counter from "./components/Counter";

const Stats = () => {
  return (
    <Section
      id="stats"
      className="flex justify-center items-center  bg-gradient-to-r from-seco to-prim pt-[6rem] "
    >
      <motion.div
        className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-x-10 text-center items-center max-w-[1300px] w-full justify-evenly text-white py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="flex flex-col justify-center items-center space-y-4 ">
          <Image src={clientsIcon} alt="icon" className="w-[120px]" />
          <div>
            <div className="flex  justify-center">
              <Counter
                from={0}
                to={150}
                className="text-[50px] font-[600] font-body"
              />
              <p className="text-[50px] font-[600] font-body">+</p>
            </div>

            <h4 className="font-heading text-[14px] uppercase font-[600]">
              Clients Helped
            </h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <Image src={roiIcon} alt="icon" className="w-[120px]" />
          <div>
            <div className="flex  justify-center">
              <Counter
                from={0}
                to={200}
                className="text-[50px] font-[600] font-body"
              />
              <p className="text-[50px] font-[600] font-body">%</p>
            </div>

            <h4 className="font-heading text-[14px] uppercase font-[600]">
              Average ROI
            </h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <Image src={impressionsIcon} alt="icon" className="w-[120px]" />
          <div>
            <p className="text-[50px] font-[600] font-body">1B+</p>
            <h4 className="font-heading text-[14px] uppercase font-[600]">
              Total Impressions
            </h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <Image src={followerIcon} alt="icon" className="w-[120px]" />
          <div>
            <div className="flex  justify-center">
              <Counter
                from={0}
                to={60}
                className="text-[50px] font-[600] font-body"
              />
              <p className="text-[50px] font-[600] font-body">%</p>
            </div>
            <h4 className="font-heading text-[14px] uppercase font-[600]">
              Follower Growth
            </h4>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Stats;
