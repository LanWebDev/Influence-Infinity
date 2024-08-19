"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/Influence-Infinity-Logo.png";
import Image from "next/image";
import { navigation } from "@/constants/constants";
import Link from "next/link";

import { ButtonTemplate } from "./ButtonTemplate";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useScrollDirection } from "@/hooks/useScrollDirection";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SheetNavbar from "./SheetNavbar";
import { useRouter } from "next/navigation";

const Header = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const scrollDirection = useScrollDirection();

  const router = useRouter();

  const handleNavigation = (e: any, url: string) => {
    if (url.startsWith("#")) {
      e.preventDefault();

      const elementId = url.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        router.replace(url, { scroll: false });
      }
    }
  };

  return (
    <>
      <div
        className={`sticky top-0 ${
          scrollDirection === "down" ? "-top-[125px]" : "top-0 "
        } w-full flex justify-center py-[25px]  px-4  transition-all duration-500 bg-white shadow-md z-50`}
      >
        <div
          className="max-w-[1300px] w-full flex justify-between items-center  
          "
        >
          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Logo"
                className="max-h-[75px]  max-w-[240px] "
              />
            </Link>
          </div>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger className="lg:hidden">
              <HamburgerMenuIcon className="size-[30px]  lg:hidden mr-6 " />
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
              <SheetNavbar setOpen={setSheetOpen} />
            </SheetContent>
          </Sheet>
          <div className="space-x-10 max-xl:space-x-6  max-lg:hidden">
            {navigation.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                passHref
                onClick={(e) => handleNavigation(e, item.url)}
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
