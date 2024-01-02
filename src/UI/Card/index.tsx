import React, { ReactNode } from 'react';
import TeacherCard from './TeacherCard';
import SectionCard from './SectionCard';
interface CardProps {
  title: string;
  img?: string;
  type: string;
  children?: ReactNode;
  href?: string | undefined;
  Class?: string;
  Subject?: string;
  number?: number;
  description?: string;
  name?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  img = 'DEFAULT_IMAGE_URL',
  Subject,
  description,
  type,
}: CardProps) => {
  return (
    <div className=' w-[320px] border shadow m-5'>
      <div className=' w-[100%] '>
        <img src={img} className='h-[180px] w-[100%]' />
      </div>
      <div className=' mx-2' style={{ direction: 'rtl' }}>
        <h5 className='text-right font-inter text-gray-800 text-lg font-normal'>{title}</h5>
        <h5 className='text-right font-inter text-gray-800 text-lg font-normal'> {Subject}</h5>
      </div>
      <div className='mx-2' style={{ direction: 'rtl' }}>
        <h5 className='text-right font-inter text-black text-2xl font-normal'>{description}</h5>
      </div>
      {type === 'teacher' ? <TeacherCard /> : <SectionCard />}
      <hr />
      <div className='flex p-1 h-[50px] justify-between items-center flex-shrink-0 self-stretch'>
        <h4 className='text-right font-inter text-gray-600 text-xl font-normal'> الصف الثالث الثانوى </h4>
        {type === 'teacher' ? (
          <h4 className='text-right font-inter text-gray-600 text-xl font-normal'>عدد الحصص: 10</h4>
        ) : (
          <h4 className='text-right font-inter text-gray-600 text-xl font-normal'> مدة الحصة :120 دقيقة </h4>
        )}
      </div>
    </div>
  );
};

export default Card;
