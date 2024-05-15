import React from 'react';
import Image from '../image-with-fallback';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';
import { TeacherCardProps } from './type';

export const TeacherCard = ({ data, studyPhase }: TeacherCardProps) => {
  return (
    <Link href={`/teachers/${data._id}`}>
      <div className='flex flex-col w-full border rounded-lg shadow-md cursor-pointer hover:bg-[#f8f8f8] hover:scale-[1.01] duration-300'>
        <div className='w-full aspect-[2_/_1] relative overflow-hidden rounded-t-lg'>
          <Image
            className='object-cover object-top !w-full !h-full'
            width={400}
            height={200}
            alt=''
            src={data?.profileImage ?? ''}
          />
        </div>
        <div className='flex flex-col p-3'>
          <p className='text-[22px] text-[#404040]'>{data?.username}</p>
          <p className='text-[22px] text-[#404040]'>{data?.subjects[0]}</p>
          <p className='text-2xl h-[72px]'>{data?.description}</p>
        </div>
        <div className='px-3 my-3'>
          <SocialMediaLinks />
        </div>
        <div className='text-[#696969] [&_p]:text-[22px] mt-auto flex justify-between items-center border-t px-3 py-2'>
          <p>عدد الحصص: {data?.lectures?.length}</p>
          <p>{studyPhase}</p>
        </div>
      </div>
    </Link>
  );
};

export default TeacherCard;
