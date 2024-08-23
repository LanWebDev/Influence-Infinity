"use client";
import React from "react";
import Section from "../ReusableComponents/Section";
import Logo from "@/assets/Influence-Infinity-Logo.png";
import Image from "next/image";
import LottieAnimation from "../animations/LottieAnimation";
import { motion } from "framer-motion";

const AboutAgency = () => {
  return (
    <Section id="aboutagency" className="flex justify-center  ">
      <div className="lg:space-x-10 flex max-lg:flex-col  justify-center lg:justify-evenly items-center w-full space-y-4 max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="lg:w-[50%] items-center"
        >
          <LottieAnimation
            fallback={<Image src={""} alt="business growth" />}
            animation="https://lottie.host/94bcb263-8ed3-4eb4-bc5b-03fb575a9c21/8Qz1HIXyxC.json"
            loop
            className=""
          />
        </motion.div>
        <div className=" justify-center flex  flex-col  space-y-2 lg:w-[50%] items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: "30%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600]  w-max">
              Influence Infinity
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "30%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="font-header text-[50px] max-md:text-3xl font-[700] tracking-[-1px] leading-[60px] text-text text-center">
              Your Partner in <br /> Social Media{" "}
              <span className="bg-gradient-to-r from-seco to-prim p-1 px-2 text-white rounded-sm">
                Success
              </span>
            </h3>
          </motion.div>
          <div className="text-text2 space-y-4 py-6 lg:py-10 font-body text-lg">
            <motion.p
              initial={{ opacity: 0, y: "30%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              At Influence Infinity, we believe that social media is more than
              just a platform—it&apos;s a powerful tool for storytelling,
              engagement, and growth. Our agency is dedicated to helping brands
              of all sizes navigate the ever-evolving digital landscape. We
              specialize in crafting innovative strategies that resonate with
              your audience, driving real, measurable results.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our team of experts combines creativity with data-driven insights
              to deliver tailored solutions that elevate your brand&apos;s
              online presence. From content creation and influencer partnerships
              to targeted advertising and comprehensive audits, we provide a
              full suite of services designed to unlock your brand&apos;s
              potential.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.35 }}
            >
              Partner with us, and let&apos;s build a social media presence that
              not only reflects your brand&apos;s identity but also connects
              with your audience in meaningful ways.
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutAgency;
