import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import { Card } from '@/UI';
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
      <Card type='classe' title='الصف الاول الثانوى ' img='book.png' href='/classes' />
    </div>
  );
};

export default HomeContent;
