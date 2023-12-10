import React, { ReactNode } from 'react';

import Link from 'next/link';
import { RiFolderVideoFill } from 'react-icons/ri';
interface CardProps {
  title: string;
  img: string;
  type: string;
  children: ReactNode;
  href: string;
  Class: string;
  Subject: string;
  number: number;
  description: string;
  name: string;
}

export const Card: React.FC<Partial<CardProps>> = ({
  title,
  img,
  type,
  children,
  href,
  Class,
  Subject,
  number,
  description,
  name,
}) => {
  if (type === 'description') {
    return (
      <div className=' h-[auto] w-[100%] rounded-lg border shadow-lg my-8 px-3 py-2  '>
        {children ? children : null}
      </div>
    );
  } else if (type === 'teacher') {
    return (
      <div className='w-[250px] h-[350px] m-5 rounded-lg border shadow my-8 overflow-hidden flex flex-col'>
        <div className='h-[80%] relative overflow-hidden'>
          <img src={img} alt={title} className='w-full h-full object-cover h-[100%]' />
        </div>
        <div className='p-4 flex flex-col justify-center flex-1' style={{ direction: 'rtl' }}>
          <div className=''>
            <div className='flex ' style={{ justifyContent: 'space-between' }}>
              <p className='text-blue-500'> {Subject}</p>
              <p className='text-blue-500'> {name}</p>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  } else if (type === 'lecturer') {
    return (
      <Link href={href ?? ''}>
        <div className='w-[250px] h-[350px] m-5 rounded-lg border shadow my-8 overflow-hidden flex flex-col'>
          <div className='h-[70%] relative overflow-hidden'>
            <img src={img} alt={title} className='w-full h-full object-cover' />
          </div>
          <div className='p-4 flex flex-col justify-center flex-1' style={{ direction: 'rtl' }}>
            <div className=''>
              <div className='flex' style={{ justifyContent: 'space-between' }}>
                <h1 className='text-sm text-gray-500'> {Class}</h1>
                <h1 className='text-sm text-blue-500'> {Subject}</h1>
              </div>
              <h2 className='text-lg font-semibold mb-2'>{title}</h2>
              <p className='flex items-center text-sm '>
                <RiFolderVideoFill className='m-1 text-red-500' />
                {number} محاضرات
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Card;
