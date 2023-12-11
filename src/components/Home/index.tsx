import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import AllTeacher from '@/pages/teacher/all-Teacher/AllTeacher';
const HomeContent = () => {
  const sectionProps = {
    name: 'Knowledge Academy',
    description: ' هى منصة تعليمية تهدف لتطوير نظام التعليم والنهوض بمستوى الطالب عن طريق احدث الادوات وافضل الاساليب',
  };

  return (
    <div>
      <SectionOne {...sectionProps} />
      <SectionTwo />
      <SectionThree />
      <AllTeacher />
    </div>
  );
};

export default HomeContent;
