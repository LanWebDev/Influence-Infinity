import React, { useMemo } from "react";

import Section from "../ReusableComponents/Section";

import dynamic from "next/dynamic";

const SiteMap = async () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/ui/ContactPage/Components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <Section id="map" className="flex justify-center items-center">
      <div className="max-w-[1300px] w-full">
        <Map />
      </div>
    </Section>
  );
};

export default SiteMap;
