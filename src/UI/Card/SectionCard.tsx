import React, { useState } from 'react';
import Button from '../Button';
import Link from 'next/link';

interface CardProps {
  href?: string | undefined;
}
const SectionCard: React.FC<CardProps> = ({ href }) => {
  const [buys, setBuys] = useState(false);
  return (
    <div className='flex justify-center m-2'>
      {!buys ? (
        <Button
          className='w-[100%]'
          onClick={() => {
            setBuys(true);
          }}
        >
          جنية 20
        </Button>
      ) : (
        <Link href={href ? href : '/'} className='w-[100%]'>
          <Button className='w-[100%]'> فتح الحصة </Button>
        </Link>
      )}
    </div>
  );
};

export default SectionCard;
