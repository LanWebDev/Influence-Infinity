import React from "react";
import { Button } from "../button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const ButtonTemplate = ({
  title,
  className,
  link,
}: {
  title?: string;
  className?: string;
  link?: any;
}) => {
  return (
    <>
      <Link href={link || ""}>
        <Button
          className={`${
            className ? className : "p-6 rounded-2xl"
          } space-x-2      bg-[linear-gradient(75deg,_#005dc7,_#FF00DD,_#A200FF)] [background-size:300%] bg-left [transition:500ms_background-position_ease-in-out] hover:bg-right`}
        >
          <p>{title}</p>
          <ArrowTopRightIcon className="size-5" />
        </Button>
      </Link>
    </>
  );
};
