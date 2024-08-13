import React from "react";
import Logo from "@/assets/Influence-Infinity-Logo.png";
import Image from "next/image";
import { navigation } from "@/constants/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <>
      <div className="  border-gray border-b w-full flex justify-center py-[25px] ">
        <div className="max-w-[1300px] w-full  flex justify-between items-center  ">
          <div>
            <Image src={Logo} alt="Logo" className="max-h-[75px] max-w-max " />
          </div>
          <div className="space-x-10">
            {navigation.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                className="font-body text-lg text-text font-bold"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <Button className="space-x-2 p-6 rounded-2xl  bg-prim   bg-[linear-gradient(75deg,_#005dc7,_#FF00DD,_#A200FF)] [background-size:300%] bg-left [transition:500ms_background-position_ease-in-out] hover:bg-right">
              <p>WORK WITH US</p>
              <ArrowTopRightIcon className="size-5 " />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
