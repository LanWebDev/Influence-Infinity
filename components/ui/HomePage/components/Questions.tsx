import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { questions } from "@/constants/constants";

const Questions = () => {
  return (
    <Accordion type="single" collapsible>
      {questions.map((question) => (
        <AccordionItem
          key={question.id}
          value={`"item-${question.id}"`}
          className="md:p-4 px-4 sm:py-2 space-y-2"
        >
          <AccordionTrigger className="text-text font-[600] font-body text-lg  max-md:text-[17px] text-left">
            {question.question}
          </AccordionTrigger>
          <AccordionContent className="text-text2 font-body text-[17px] leading-6">
            {question.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Questions;
