"use client";
import { useState, useEffect, useRef } from "react";

import { tabs } from "@/constants/constants";
import business from "@/assets/business-growth.svg";
import Image from "next/image";
import checkedIcon from "@/assets/checkedCircleIcon.svg";

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<any>();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="border-t flex max-w-[1300px] w-full h-full justify-center items-center ">
      <div className=" flex max-lg:flex-col  gap-y-2 w-full">
        <div className=" w-[25%] max-lg:w-full py-10 pr-6 h-full  flex-col  items-center gap-x-2 font-bold border-r text-text space-y-2 max-lg:border-b">
          {tabs.map((item: any, index: any) => (
            <div
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none p-2 pl-4 transition-transform duration-200 hover:translate-x-1 focus:border-l cursor-pointer w-full ${
                selectedTab === index
                  ? "border-l-4  border-prim   text-prim"
                  : ""
              } `}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className="p-6 py-10 rounded-xl lg:w-[75%] h-full  ">
          {tabs.map((tab: any, index: any) => (
            <div
              key={index}
              className={`${
                selectedTab === index
                  ? "flex max-lg:space-y-10 max-lg:flex-col space-x-6"
                  : "hidden"
              }`}
            >
              <div className="lg:w-[40%] p-2 items-center flex min-h-[364px]">
                <Image src={tab.image} alt="process image" />
              </div>
              <div className="space-y-6 p-2  lg:max-w-[60%]">
                <div className="flex space-x-4 ">
                  <div className="p-2 min-w-[45px] text-center text-text text-lg   bg-special rounded-full h-max">
                    0{tab.id}/
                  </div>
                  <div>
                    <h3 className="font-header text-[40px] max-lg:text-[30px] font-[700] tracking-[-1px] text-text">
                      {tab.title}
                    </h3>
                    <p className="text-text text-lg font-body">
                      In Social Media Marketing
                    </p>
                  </div>
                </div>
                <div className="text-body text-text2 text-lg font-body">
                  {tab.description}
                </div>
                <div className="text-body text-text2 text-lg">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-4 font-body">
                      <Image
                        src={checkedIcon}
                        alt="checked circle icon"
                        className="size-5 "
                      />

                      {tab.point1}
                    </li>
                    <li className="flex items-center gap-4 font-body">
                      <Image
                        src={checkedIcon}
                        alt="checked circle icon"
                        className="size-5 "
                      />

                      {tab.point2}
                    </li>
                    <li className="flex items-center gap-4 font-body">
                      <Image
                        src={checkedIcon}
                        alt="checked circle icon"
                        className="size-5 "
                      />

                      {tab.point3}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
