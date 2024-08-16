import React from "react";
import Section from "./Section";
import Image from "next/image";
import business from "@/assets/business-growth.svg";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "./ui/card";

const Services = () => {
  return (
    <Section id="services" className="flex justify-center">
      <div className="flex flex-col justify-center w-full max-w-[1300px]">
        <div className="items-center justify-center flex  flex-col  w-full space-y-2 ">
          <p className="uppercase text-base max-md:text-sm bg-gradient-to-r from-seco to-prim bg-clip-text text-transparent font-[600] text-middle ">
            Our Services
          </p>
          <h2 className="font-header text-[50px] max-md:text-3xl font-[700] tracking-[-1px] ">
            Social Media Strategy
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className=" text-center">
          <div className="grid grid-cols-6 max-md:grid-cols-1  gap-4 pt-[5rem] text-center ">
            <Card className="col-span-3 row-span-2 max-md:col-span-2 text-center flex-col flex justify-center items-center ">
              <div className="max-w-[85%] h-[90%] flex flex-col justify-end">
                <CardSkeletonContainer>
                  <div className="">mommy</div>
                </CardSkeletonContainer>
                <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4  ">
                  <CardTitle className="group-hover:text-prim ">
                    Analytics for everything
                  </CardTitle>
                  <CardDescription className="text-center w-full">
                    Check analytics, track your posts, and get insights into
                    your audience.
                  </CardDescription>
                </div>
              </div>
            </Card>
            <Card className="col-span-3 row-span-1 max-md:col-span-2 text-center flex-col flex justify-center items-center ">
              <div className="max-w-[85%] h-[90%]">
                <CardSkeletonContainer>
                  <div className="">mommy</div>
                </CardSkeletonContainer>
                <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4">
                  <CardTitle className="group-hover:text-prim ">
                    Analytics for everything
                  </CardTitle>
                  <CardDescription className="text-center w-full">
                    Check analytics, track your posts, and get insights into
                    your audience.
                  </CardDescription>
                </div>
              </div>
            </Card>
            <Card className="col-span-3 row-span-1 max-md:col-span-2 text-center flex-col flex justify-center items-center ">
              <div className="max-w-[85%] h-[90%]">
                <CardSkeletonContainer>
                  <div className="">mommy</div>
                </CardSkeletonContainer>
                <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4">
                  <CardTitle className="group-hover:text-prim ">
                    Analytics for everything
                  </CardTitle>
                  <CardDescription className="text-center w-full">
                    Check analytics, track your posts, and get insights into
                    your audience.
                  </CardDescription>
                </div>
              </div>
            </Card>
            <Card className="lg:col-span-4 md:col-span-6 max-md:col-span-2 ">
              <div className="max-w-[85%] h-[90%]">
                <CardSkeletonContainer>
                  <div className="">mommy</div>
                </CardSkeletonContainer>
                <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4">
                  <CardTitle className="group-hover:text-prim ">
                    Analytics for everything
                  </CardTitle>
                  <CardDescription className="text-center w-full">
                    Check analytics, track your posts, and get insights into
                    your audience.
                  </CardDescription>
                </div>
              </div>
            </Card>
            <Card className="lg:col-span-2 md:col-span-6 max-md:col-span-2  bg-gradient-to-r from-purple to-prim  ">
              <div className="max-w-[85%] h-[90%]">
                <CardSkeletonContainer>
                  <div className="">mommy</div>
                </CardSkeletonContainer>
                <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4">
                  <CardTitle className="group-hover:text-prim ">
                    Analytics for everything
                  </CardTitle>
                  <CardDescription className="text-center w-full">
                    Check analytics, track your posts, and get insights into
                    your audience.
                  </CardDescription>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
