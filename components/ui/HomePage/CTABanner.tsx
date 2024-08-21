"use client";
import React from "react";
import growingImage from "@/assets/growing.svg";
import Image from "next/image";
import { Button } from "../button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <div className="flex justify-center py-10 pt-16 px-4 ">
      <motion.div
        className="max-w-[1300px] bg-gradient-to-r from-seco to-prim rounded-3xl w-full flex max-lg:flex-col justify-center items-center z-30"
        initial={{ opacity: 0, y: "35%" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, delay: 0.25 }}
      >
        <div className="lg:w-[40%] max-lg:w-[90%] space-y-6 max-lg:text-center py-16">
          <h3 className="font-header text-white text-[50px] max-md:text-3xl font-[700] tracking-[-1px] ">
            Are you ready to grow? Let&apos;s talk about it.
          </h3>
          <Button
            className="w-[15rem] h-[3.5rem] rounded-3xl uppercase space-x-2 
          transition ease-in-out bg-special duration-500 hover:bg-black hover:text-white  text-black font-[600]"
          >
            <p>let&apos;s get to work</p>
            <ArrowTopRightIcon className="size-5 " />
          </Button>
        </div>
        <div className="">
          <Image
            src={growingImage}
            alt="growing"
            className=" lg:-translate-y-[113.25px] max-lg:p-4"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CTABanner;
