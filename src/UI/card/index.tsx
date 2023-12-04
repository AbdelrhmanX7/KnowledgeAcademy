import React, { ReactNode } from 'react';
import { Button } from '@/UI';
import Image from 'next/image';
import Link from 'next/link';
interface CardProps {
  title: string;
  img: string;
  type: string;
  children: ReactNode;
  href: string;
}

export const Card: React.FC<CardProps> = ({ title, img, type, children, href }) => {
  if (type === 'description') {
    return (
      <div className=' h-[400px] w-[600px] rounded-lg border shadow-lg my-8 px-3 py-2 hover:scale-110 transition duration-500'>
        {children ? children : null}
      </div>
    );
  } else if (type == 'classe') {
    return (
      <div className=' w-[320px]  m-5 rounded-lg border shadow-lg my-8 px-3 py-2 hover:scale-110 transition duration-500'>
        <div>
          <img src={img} className='h-[320px]' />
          <Link href={href}>
            <Button className='w-[100%]'>{title}</Button>
          </Link>
        </div>
      </div>
    );
  } else if (type === 'lecture') {
    return (
      <div className=' w-[320px]  m-5 rounded-lg border shadow-lg my-8 px-3 py-2 hover:scale-110 transition duration-500'>
        <div>
          <div className='text-right flex' style={{ justifyContent: 'space-between' }}>
            <h4 className='m-1'>
              {' '}
              السعر :<span style={{ color: 'red' }}> 150 جنية </span>{' '}
            </h4>
            <h4 className='m-1'>{title}</h4>
          </div>
          <p className='w-[100%] mx-auto bg-blue-500 h-0.5'></p>
          {typeof img === 'string' ? (
            <img src={img} alt={title} /> // Regular image
          ) : (
            <Image src={img} alt={title} style={{ height: '300px' }} /> // Image loaded using next/image
          )}
          <p className='w-[100%] mx-auto bg-blue-500 h-0.5'></p>
          <div className='flex justify-between'>
            <Button className='m-3'> اشترك الان </Button>
            <Button className='m-3'> دخول للكورس </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
