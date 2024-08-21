"use client";
import React, { useState } from "react";
import Logo from "@/assets/Influence-Infinity-Logo.png";
import Image from "next/image";
import { navigation } from "@/constants/constants";
import Link from "next/link";

import { ButtonTemplate } from "../ReusableComponents/ButtonTemplate";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SheetNavbar from "./components/SheetNavbar";
import { useRouter } from "next/navigation";

const Header = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const { scrollDirection, isAtTop } = useScrollDirection();

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
    // REMOVE TOP-0 TO FIX THE ANIMATION
    <>
      <motion.div
        className={`sticky top-0 ${
          scrollDirection === "down" ? "-top-[130px]" : "top-0"
        } w-full flex justify-center py-[25px] px-4 transition-all duration-500 bg-white z-50 ${
          isAtTop ? "border-b" : "shadow-md"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
                className="max-h-[75px]  max-w-[240px] hover:opacity-85"
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
                className="group relative font-body text-lg text-text font-bold hover:"
              >
                {item.title}
                <span
                  className={`absolute bottom-0 left-0 block h-0.5 w-0 -mb-1 bg-purple transition-all duration-300 ease-in-out group-hover:w-full `}
                ></span>
              </Link>
            ))}
          </div>
          <div className="max-lg:hidden">
            <ButtonTemplate title="WORK WITH US" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
