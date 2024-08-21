import React from "react";

import Image from "next/image";
import whiteLogo from "@/assets/whitelogo.png";

import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import githubIcon from "@/assets/icons/github.svg";
import youtubeIcon from "@/assets/icons/youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-[1300px] px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center  px-10 ">
              <Image src={whiteLogo} alt="logo" height={100} />
            </div>

            <ul className="mt-8 flex justify-center  gap-6  md:gap-8">
              <Link href={""}>
                <li className="w-6">
                  <Image src={facebookIcon} alt="facebook icon" />
                </li>
              </Link>
              <Link href={""}>
                <li className="w-6">
                  <Image src={instagramIcon} alt="instagram icon" />
                </li>
              </Link>
              <Link href={""}>
                <li className="w-6">
                  <Image src={twitterIcon} alt="twitter icon" />
                </li>
              </Link>
              <Link href={""}>
                <li className="w-6">
                  <Image src={githubIcon} alt="github icon" />
                </li>
              </Link>
              <Link href={""}>
                <li className="w-6">
                  <Image src={youtubeIcon} alt="youtube icon" />
                </li>
              </Link>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 ">
            <div className="text-center  ">
              <h4 className="text-xl text-white font-header ">Company</h4>

              <ul className="mt-8 space-y-4 text-base font-body  ">
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#"
                  >
                    The Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#"
                  >
                    Our clients
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#"
                  >
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-xl text-white font-header">Our Services</p>

              <ul className="mt-8 space-y-4 text-base font-body">
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#"
                  >
                    Social Media Advertising
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#"
                  >
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#"
                  >
                    Influence Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#"
                  >
                    Storytelling Audit
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#"
                  >
                    Content Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center ">
              <p className="text-xl text-white font-header">Support</p>

              <ul className="mt-8 space-y-4 text-base font-body">
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray1/80 transition hover:text-gray1"
                    href="#questions"
                  >
                    FAQ&apos;s
                  </Link>
                </li>

                <li>
                  <Link className="group flex justify-center gap-1.5 " href="#">
                    <span className="text-gray1/80 transition group-hover:text-gray1">
                      Live Chat
                    </span>

                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-prim opacity-75"></span>
                      <span className=" relative inline-flex size-2 rounded-full bg-prim"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left ">
            <p className="text-sm text-gray1/80 space-x-2">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-prim underline transition hover:text-prim/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-prim underline transition hover:text-prim/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray1/80 sm:order-first sm:mt-0">
              &copy; 2024 Influence Infinity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
