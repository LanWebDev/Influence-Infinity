import React from "react";
import Logo from "@/assets/Influence-Infinity-Logo.png";
import Image from "next/image";
import { navigation } from "@/constants/constants";
import Link from "next/link";

import { ButtonTemplate } from "./ButtonTemplate";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <>
      <div className="  border-gray border-b w-full flex justify-center py-[25px] px-2 ">
        <div
          className="max-w-[1300px] w-full z-50 flex justify-between items-center  
          "
        >
          <div>
            <Image
              src={Logo}
              alt="Logo"
              className="max-h-[75px] max-w-[240px] "
            />
          </div>

          <Sheet>
            <SheetTrigger>
              <Button
                variant={"ghost"}
                className="lg:hidden mr-8 p-4 hover:bg-gray-100 rounded-lg h-[55px] "
              >
                <HamburgerMenuIcon className="size-[30px]  " />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src={Logo}
                    alt="Logo"
                    className="max-h-[75px] max-w-[240px] "
                  />
                </SheetTitle>
              </SheetHeader>
              <ul className="space-y-10 px-4 py-10">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      key={item.id}
                      className="font-body text-xl  text-text font-bold "
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
          <div className="space-x-10 max-lg:hidden">
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
          <div className="max-lg:hidden">
            <ButtonTemplate title="WORK WITH US" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
