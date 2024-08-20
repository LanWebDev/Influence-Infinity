import React from "react";
import Section from "../ReusableComponents/Section";

const FAQ = () => {
  return (
    <Section id="questions" className="py-0">
      <div className="flex w-full justify-center text-center items-center -translate-y-[120px]">
        <div className="max-w-[1300px] items-center flex flex-col justify-center  space-y-2">
          <h2 className="uppercase  text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] w-max ">
            General Questions
          </h2>
          <h3 className="font-header text-[50px] max-md:text-3xl font-[700] tracking-[-1px] text-text ">
            Frequently Asked Questions
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
