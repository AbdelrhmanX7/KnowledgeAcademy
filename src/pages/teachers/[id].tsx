import { useBuyLecture } from '@/services/hooks';
import { useGetTeacherLectures } from '@/services/hooks/useTeacher';
import { useGetInvalidateQueries } from '@/services/invalidateQueries';
import { Button, Image } from '@/UI';
import { message, Tag } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

export default function TeacherId() {
  const { query, push } = useRouter();

  const { data, refetch } = useGetTeacherLectures({ id: query.id as string });

  const { mutateAsync: buyLuctureFn, isPending } = useBuyLecture();

  const { invalidateEWalletQuery } = useGetInvalidateQueries();

  return (
    <div className='mt-20 mb-10 flex flex-wrap gap-4'>
      {data?.map((lecture: any) => {
        return (
          <div
            key={lecture._id}
            className='flex flex-col aspect-[4/5] w-[400px] border rounded-lg shadow-md cursor-pointer hover:bg-[#f8f8f8] hover:scale-[1.01] duration-300'
          >
            <div className='w-full h-[200px] relative overflow-hidden rounded-t-lg'>
              <Image className='object-cover' width={400} height={200} alt='' src={lecture?.thumbnail ?? ''} />
            </div>
            <div className='flex flex-col  p-3'>
              <p className='text-[22px] text-[#404040]'>{lecture?.teacherName ?? ''}</p>
              <p className='text-2xl h-[72px]'>{lecture?.title ?? ''}</p>
            </div>
            <div className='px-3 mb-3'>
              <Tag className='text-base' color='orange'>
                امتحان
              </Tag>
            </div>
            <div className='px-3 w-full'>
              <Button
                onClick={async () => {
                  if (!lecture?.isPurchased) {
                    try {
                      await buyLuctureFn({ lectureId: lecture._id });
                      await invalidateEWalletQuery();
                      await refetch();
                      message.success('تم شراء الحصة بنجاح');
                    } catch (error: any) {
                      message.error(error?.response?.data);
                    }
                  } else {
                    push(`/lecture/${lecture._id}`);
                  }
                }}
                isLoading={isPending}
                className='w-full text-2xl !font-bold'
              >
                {lecture?.isPurchased ? 'فتح الحصة' : `${lecture.price} جنية`}
              </Button>
            </div>
            <div className='h-[62px] text-[#696969] [&_p]:text-[22px] mt-auto flex justify-between items-center border-t px-3 py-2'>
              <p>مدة الحصة: {lecture?.video?.duration ?? 'N/A'}</p>
              <p>{lecture?.studyPhase}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
