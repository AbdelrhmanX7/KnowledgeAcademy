import React, { useState } from 'react';
import Image from '../image-with-fallback';
import { message, Tag } from 'antd';
import Button from '../Button';
import { useGetInvalidateQueries } from '@/services/invalidateQueries';
import { useBuyLecture } from '@/services/hooks';
import { useRouter } from 'next/router';
import { formatVideoDuration } from '@/utils';

export const LectureCard = ({ lecture }: any) => {
  const { mutateAsync: buyLuctureFn } = useBuyLecture();
  const [isLoading, setIsLoading] = useState(false);

  const { invalidateEWalletQuery, invalidateGetTeacherQuery } = useGetInvalidateQueries();

  const { push } = useRouter();

  return (
    <div className='flex flex-col w-full border rounded-lg shadow-md hover:bg-[#f8f8f8] hover:scale-[1.01] duration-300'>
      <div className='w-full aspect-[2_/_1] relative overflow-hidden rounded-t-lg'>
        <Image
          className='object-cover object-top !w-full !h-full'
          width={400}
          height={200}
          alt=''
          src={lecture?.thumbnail ?? ''}
        />
      </div>
      <div className='flex flex-col  p-3'>
        <p className='text-[22px] text-[#404040]'>{lecture?.teacherName ?? ''}</p>
        <p className='text-2xl h-[72px]'>{lecture?.title ?? ''}</p>
      </div>
      <div className='px-3'>
        <Tag className='text-base' color='orange'>
          امتحان
        </Tag>
      </div>
      <div className='px-3 w-full my-3'>
        <Button
          onClick={async () => {
            if (!lecture?.isPurchased) {
              setIsLoading(true);
              try {
                await buyLuctureFn({ lectureId: lecture._id });
                await invalidateEWalletQuery();
                await invalidateGetTeacherQuery();
                message.success('تم شراء الحصة بنجاح');
              } catch (error: any) {
                message.error(error?.response?.data);
              }
            } else {
              push(`/lecture/${lecture._id}`);
            }
            setIsLoading(false);
          }}
          isLoading={isLoading}
          className='w-full text-2xl !font-bold'
        >
          {lecture?.isPurchased ? 'فتح الحصة' : `${lecture.price} جنية`}
        </Button>
      </div>
      <div className='h-[62px] text-[#696969] [&_p]:truncate [&_p]:text-[22px] mt-auto flex justify-between items-center border-t px-3 py-2'>
        <p>مدة الحصة: {formatVideoDuration(lecture?.videoDuration) ?? 'N/A'}</p>
        <p>{lecture?.studyPhase}</p>
      </div>
    </div>
  );
};

export default LectureCard;
