import React, { useEffect, useState } from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

import { useLocalStorage } from 'usehooks-ts';
import AllTeacher from '@/pages/teacher/all teacher/AllTeacher';
import ClassroomTeachers from '@/pages/teacher/Classroom teachers';
const HomeContent = () => {
  const [user, ] = useLocalStorage<any>('user', {});
  const [userData, setUserData] = useState<any>({});
  useEffect(() => setUserData(user), [user]);
  const sectionProps = {
    name: 'Knowledge Academy',
    description: ' هى منصة تعليمية تهدف لتطوير نظام التعليم والنهوض بمستوى الطالب عن طريق احدث الادوات وافضل الاساليب',
  };

  return (
    <div>
      {userData?.username ? (
        <ClassroomTeachers />
      ) : (
        <div>
          <SectionOne {...sectionProps} />
          <SectionTwo />
          <SectionThree />
          <AllTeacher />
        </div>
      )}
    </div>
  );
};

export default HomeContent;
