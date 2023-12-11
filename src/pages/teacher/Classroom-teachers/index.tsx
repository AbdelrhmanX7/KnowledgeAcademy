import { Card } from '@/UI';
import React from 'react';
import Container from '@mui/material/Container';
import { Radio } from 'antd';
interface Teacher {
  id: number;
  title: string;
  img: string;
  subject: string;
  number: number;
}
const ClassroomTeachers: React.FC = () => {
  const teachers: Teacher[] = [
    {
      id: Math.random(),
      title: 'االغة العربية مع احمد مجمود',
      img: 'images (6).jfif',
      subject: 'لغة عربية ',
      number: 5,
    },
    {
      id: Math.random(),
      title: 'اللغة الانجليزية مع عمر مكرم ',
      img: 'images (6).jfif',
      subject: 'لغة انجليزية ',
      number: 6,
    },
    {
      id: Math.random(),
      title: 'اللغة الفرنسية مع حسام الحداد',
      img: 'images (6).jfif',
      subject: 'لغة فرنسية ',
      number: 10,
    },
    { id: Math.random(), title: 'الكيمياء مع محمود عمر ', img: 'images (6).jfif', subject: 'كيمياء', number: 5 },
    { id: Math.random(), title: 'الفيزياء مع سامح احمد ', img: 'images (6).jfif', subject: 'فيزياء', number: 7 },
    { id: Math.random(), title: ' الاحياء مع حاتم  محمود', img: 'images (6).jfif', subject: 'احياء', number: 8 },
    {
      id: Math.random(),
      title: 'الجيولوجيا مع احمد محسن ',
      img: 'images (6).jfif',
      subject: 'جيولوجيا ',
      number: 15,
    },
    { id: Math.random(), title: 'الجغرفيا مع محمد عيد', img: 'images (6).jfif', subject: 'جغرفيا ', number: 12 },
    { id: Math.random(), title: 'التاريخ مع فارس عوض', img: 'images (6).jfif', subject: 'تاريخ ', number: 8 },
    { id: Math.random(), title: 'علم النفس مع احمد خالد ', img: 'images (6).jfif', subject: 'علم نفس', number: 10 },
    { id: Math.random(), title: 'الفلسفة مع عمرو خالد ', img: 'images (6).jfif', subject: 'فلسفة ', number: 5 },
    { id: Math.random(), title: 'الاحياء مع محمود السيد ', img: 'images (6).jfif', subject: 'احياء ', number: 12 },
    { id: Math.random(), title: 'الكيمياء مع احمد محمود  ', img: 'images (6).jfif', subject: 'كيمياء ', number: 8 },
  ];
  return (
    <div className='mt-[80px] flex' style={{ direction: 'rtl' }}>
      <Container className='flex'>
        <div className='    m-auto mt-[30px] w-[800px] sticky top-[90px] z-10' style={{ direction: 'rtl' }}>
          <div className='border '>
            <div className='text-center'>
              <h3 className='m-1'> اختر الشعبة </h3>
            </div>
            <hr />
            <div className='block'>
              <Radio className='w-[100%] text-lg m-2'> ادبى </Radio>
              <Radio className='w-[100%] text-lg m-2'> علمى </Radio>
              <Radio className='w-[100%] text-lg m-2'> علم رياضة </Radio>
            </div>
          </div>

          <div className='border my-8'>
            <div className='text-center'>
              <h3 className='m-1'> اختر المادة </h3>
            </div>
            <hr />
            <div className='block '>
              <Radio className='w-[100%] text-lg m-2'> لغة عربية </Radio>
              <Radio className='w-[100%] text-lg m-2'> لغة انجليزية </Radio>
              <Radio className='w-[100%] text-lg m-2'> لغة فرنسية </Radio>
              <Radio className='w-[100%] text-lg m-2'> كيمياء </Radio>
              <Radio className='w-[100%] text-lg m-2'> احياء </Radio>
              <Radio className='w-[100%] text-lg m-2'> فيزياء </Radio>
              <Radio className='w-[100%] text-lg m-2'> جيولوجيا </Radio>
              <Radio className='w-[100%] text-lg m-2'> تاريخ </Radio>
              <Radio className='w-[100%] text-lg m-2'> جغرفيا </Radio>
              <Radio className='w-[100%] text-lg m-2'> فلسفة </Radio>
              <Radio className='w-[100%] text-lg m-2'> علم نفس </Radio>
              <Radio className='w-[100%] text-lg m-2'> رياضة </Radio>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', width: 'auto', justifyContent: 'center' }}>
          {teachers.map((teacher) => (
            <Card
              type='lecturer'
              key={teacher.id}
              title={teacher.title}
              Subject={teacher.subject}
              img={teacher.img}
              number={teacher.number}
              href={`teacher/${teacher.id}`}
              Class='الصف الثالث الثانوى '
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ClassroomTeachers;
