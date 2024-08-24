"use client";
import React, { useState } from "react";
import Section from "../ReusableComponents/Section";

import { Input } from "../input";

import { LabelInputContainer } from "./Components/LabelInputContainer";
import { BottomGradient } from "./Components/BottomGradient";

import phoneIcon from "@/assets/icons/phone.svg";
import locationIcon from "@/assets/icons/location.svg";
import emailIcon from "@/assets/icons/email.svg";
import Image from "next/image";

const ContactForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setMessage("Form was submitted!");
  };
  return (
    <Section id="contact">
      <div className="max-w-[1300px] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8  bg-white ">
        <form className="md:my-8 md:space-y-12" onSubmit={handleSubmit}>
          <LabelInputContainer className="max-md:mb-4">
            <Input
              id="firstname"
              placeholder="Name"
              type="text"
              className="h-[3.5rem]  text-base"
              required
            />
          </LabelInputContainer>
          <div className="flex flex-col md:flex-row md:space-x-10 ">
            <LabelInputContainer className="max-md:mb-4">
              <Input
                id="phone"
                placeholder="Phone"
                type="text"
                className="h-[3.5rem]  text-base"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="max-md:mb-4">
              <Input
                id="email"
                placeholder="Email"
                type="email"
                className="h-[3.5rem]  text-base"
                required
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10 ">
            <LabelInputContainer className="max-md:mb-4">
              <Input
                id="phone"
                placeholder="Company Name"
                type="text"
                className="h-[3.5rem]  text-base"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="max-md:mb-4">
              <Input
                id="email"
                placeholder="How did you hear about us?"
                type="text"
                className="h-[3.5rem] text-base "
              />
            </LabelInputContainer>
          </div>
          <div className="flex justify-center items-center   py-6">
            <button
              className="bg-gradient-to-br relative group/btn from-seco  to-prim block w-full md:w-[50%] text-white rounded-md p-4 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              <p className="uppercase font-heading text-">Get in touch</p>
              <BottomGradient />
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center w-full items-center">
          <div className="flex justify-center items-center max-lg:flex-col max-lg:space-y-2  lg:space-x-10">
            <div className="flex  space-x-2">
              <Image src={phoneIcon} alt="phone icon" className="w-6" />
              <p>+123 000 4567</p>
            </div>
            <div className="border-r" />
            <div className="flex space-x-2">
              <Image src={emailIcon} alt="email icon" className="w-6" />
              <p>contact@influenceinfinity.com</p>
            </div>
            <div className="border-r" />
            <div className="flex space-x-2">
              <Image src={locationIcon} alt="location icon" className="w-6" />
              <p>350 5th AveNew York, NY 10118, USA</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
