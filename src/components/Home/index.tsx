import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import ClassesList from "../../pages/classes/ClassesList";
import { Curd } from "@/UI";
const HomeContent = () => {
  const sectionProps = {
    name: "Knowledge Academy",
    description:
      " هى منصة تعليمية تهدف لتطوير نظام التعليم والنهوض بمستوى الطالب عن طريق احدث الادوات وافضل الاساليب",
  };

  return (
    <div>
      <SectionOne {...sectionProps} />
      <SectionTwo />
      <SectionThree />
      <ClassesList />
    </div>
  );
};

export default HomeContent;
