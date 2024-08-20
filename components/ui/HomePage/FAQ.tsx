import React from "react";
import Section from "../ReusableComponents/Section";
import Questions from "./components/Questions";

const FAQ = () => {
  return (
    <Section id="questions" className="">
      <div className="flex w-full justify-center items-center text-center -translate-y-[100px] flex-col space-y-10">
        <div className="max-w-[1300px] items-center flex flex-col justify-center  space-y-2">
          <h2 className="uppercase  text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] w-max ">
            General Questions
          </h2>
          <h3 className="font-header text-[50px] max-md:text-3xl font-[700] tracking-[-1px] text-text ">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="max-w-[900px] w-full  text-left  ">
          <Questions />
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
