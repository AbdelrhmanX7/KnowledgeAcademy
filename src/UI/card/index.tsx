import React, { ReactNode } from 'react';
import Image from 'next/image';
import { TiPinOutline } from 'react-icons/ti';
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
  img = 'DEFAULT_IMAGE_URL',
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
      <div className='relative w-[280px] h-[auto] m-5 rounded-lg border bg-blue-500 shadow-xl my-8 overflow-hidden flex flex-col'>
        <div className='absolute top-0 right-0 p-2'>
          <TiPinOutline className='text-red-500' style={{ fontSize: '30px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='h-[180px] w-[180px] relative overflow-hidden mt-3' style={{ borderRadius: '50%' }}>
            <Image src={`/${img}`} alt={''} width={250} height={250} objectFit='cover' />
          </div>
        </div>
        <div className='p-4 flex flex-col justify-center flex-1' style={{ direction: 'rtl' }}>
          <div className=''>
            <div className='text-center flex' style={{ justifyContent: 'space-between' }}>
              <h3 className='text-white'> {name}</h3>
              <h4 className='text-black m-2'> {Subject}</h4>
            </div>
            <p style={{ fontSize: '17px', fontWeight: 'bold', color: 'white' }}>{description}</p>
          </div>
        </div>
      </div>
    );
  } else if (type === 'lecturer') {
    return (
      <Link href={href ?? ''}>
        <div className='w-[250px] h-[350px] m-5 rounded-lg border shadow my-8 overflow-hidden flex flex-col'>
          <div className='h-[70%] relative overflow-hidden'>
            <Image src={`/${img}`} alt={''} width={250} height={350} objectFit='cover' />
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
