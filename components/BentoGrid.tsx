import React from "react";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "./ui/card";
import LottieAnimation from "./ui/animations/LottieAnimation";

const BentoGrid = () => {
  return (
    <div className=" text-center">
      <div className="grid grid-cols-6 max-md:grid-cols-1  gap-4 pt-[5rem] text-center ">
        <Card className="col-span-3 row-span-2 max-md:col-span-2 text-center flex-col flex  justify-center items-center ">
          <div className="max-w-[85%] max-lg:max-w-[95%] h-[90%] flex flex-col justify-center space-y-10">
            <CardSkeletonContainer>
              <LottieAnimation
                animation="https://lottie.host/d2b04ca2-f7ec-4739-b228-3a8704de3fa5/jlRFOQppBh.json"
                loop
                className="h-full"
              />
            </CardSkeletonContainer>
            <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4  ">
              <CardTitle className="group-hover:text-prim font-header text-text text-[22px]">
                Social Media Advertising
              </CardTitle>
              <CardDescription className="text-center w-full font-body text-[16px] ">
                Drive growth with targeted ad campaigns that effectively reach
                and convert your ideal audience
              </CardDescription>
            </div>
          </div>
        </Card>
        <Card className="col-span-3 row-span-1 max-md:col-span-2 text-center flex-col flex justify-center items-center ">
          <div className="max-w-[85%] max-lg:max-w-[95%] h-[90%]">
            <CardSkeletonContainer>
              <LottieAnimation
                animation="https://lottie.host/7131b558-64a9-47f0-b3fa-f88b33bfa142/ePFZkV8w7s.json"
                loop
                className="h-[16rem] "
              />
            </CardSkeletonContainer>
            <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4">
              <CardTitle className="group-hover:text-prim font-header text-text text-[22px]">
                Social Media Management
              </CardTitle>
              <CardDescription className="text-center w-full font-body text-[16px]">
                Strengthen your online presence with engaging, consistent
                content that resonates across all platforms.
              </CardDescription>
            </div>
          </div>
        </Card>
        <Card className="col-span-3 row-span-1 max-md:col-span-2 text-center flex-col flex justify-center items-center ">
          <div className="max-w-[85%] max-lg:max-w-[95%] h-[90%]">
            <CardSkeletonContainer>
              <LottieAnimation
                animation="https://lottie.host/9f4c0334-cd04-44b4-9ebb-595cda61e7bd/Kl2WXtc4zJ.json"
                loop
                className="h-[16rem] "
              />
            </CardSkeletonContainer>
            <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4">
              <CardTitle className="group-hover:text-prim font-header text-text text-[22px]">
                Influencer Marketing
              </CardTitle>
              <CardDescription className="text-center w-full font-body text-[16px]">
                Expand your brand&apos;s reach through strategic influencer
                partnerships that align with your values.
              </CardDescription>
            </div>
          </div>
        </Card>
        <Card className="lg:col-span-4 md:col-span-6 max-md:col-span-2 text-center flex-col flex justify-center items-center">
          <div className="max-w-[85%] max-lg:max-w-[95%] h-[90%]">
            <CardSkeletonContainer>
              <LottieAnimation
                animation="https://lottie.host/9704b8cb-d5fa-4c49-8832-948712e11407/qBcJa5d7Ix.json"
                loop
                className="h-[22rem] "
              />
            </CardSkeletonContainer>
            <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4">
              <CardTitle className="group-hover:text-prim font-header text-text text-[23px]">
                Storytelling Audit
              </CardTitle>
              <CardDescription className="text-center w-full font-body text-[16px]">
                Enhance your brand&apos;s story by refining your message to
                create stronger connections with your audience.
              </CardDescription>
            </div>
          </div>
        </Card>
        <Card className="lg:col-span-2 md:col-span-6 max-md:col-span-2  bg-gradient-to-r from-purple/90 to-prim/90 text-center flex-col flex justify-center items-center ">
          <div className="max-w-[95%] max-lg:max-w-[95%] h-[90%]">
            <CardSkeletonContainer>
              <LottieAnimation
                animation="https://lottie.host/590369b0-ffa1-487a-8091-0da7875252a7/5ktZqOWwsU.json"
                loop
                className="h-[22rem] "
              />
            </CardSkeletonContainer>
            <div className="transition-transform duration-300 hover:-translate-y-2  w-full group p-4">
              <CardTitle className="group-hover:text-special text-white font-header text-[22px]">
                Content Consulting
              </CardTitle>
              <CardDescription className="text-center text-white/90 w-full font-body text-[16px]">
                Elevate your content strategy with expert guidance to create
                compelling and impactful content.
              </CardDescription>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BentoGrid;
