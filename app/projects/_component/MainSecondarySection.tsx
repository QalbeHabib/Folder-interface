"use client";
import SecondSection from "@/app/component/AllProjectShowCase/SecondarySection";
import ProjectHero from "@/app/component/Projects";
import ThirdSection from "@/app/ThirdSection/page";
import React from "react";

const MainSecondarySection = () => {
  return (
    <>
      <ProjectHero />
      <SecondSection />
      <ThirdSection />
    </>
  );
};

export default MainSecondarySection;
