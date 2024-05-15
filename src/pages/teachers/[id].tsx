import { useGetTeacher } from '@/services/hooks/useTeacher';
import { Image, LectureCard, SkeletonCard } from '@/UI';
import { useQueryClient } from '@tanstack/react-query';
import { Empty } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { FaPeopleGroup, FaVideo } from 'react-icons/fa6';
export default function TeacherId() {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ['getTeacher'] });
  }, []);
  const { query } = useRouter();

  const { data, isLoading } = useGetTeacher({ id: query.id as string });

  return (
    <div>
      <div className='relative aspect-video mb-6'>
        <Image className='absolute -z-10' alt='' src={data?.profileImage} />
        <div className='absolute w-full h-full'>
          <div className='text-white p-6 w-full h-full flex gap-3 flex-col justify-between items-start bg-[#0000007d] hover:bg-[#000000af] duration-150 md:[&>div]:block [&>div]:hidden'>
            <div />
            <div>
              <p className='clamp-[46px-6vw-92px] font-extrabold'>{data?.username}</p>
              <p className='clamp-[32px-4vw-60px]'>{data?.subjects?.map((subject: any) => subject).join('، ')}</p>
              <p className='clamp-[32px-4vw-60px] text-[#f2f2f2] font-bold line-clamp-2'>{data?.description}</p>
            </div>
            <div className='w-full'>
              <div className='clamp-[32px-4vw-60px] w-full flex justify-evenly items-center font-bold'>
                <div className='flex flex-col items-center'>
                  <p>{data?.studentsCount}</p>
                  <FaPeopleGroup />
                  <p className='text-3xl text-[#f2f2f2]'>عدد طلاب</p>
                </div>
                <div className='flex flex-col items-center'>
                  <p>{data?.lectures?.length}</p>
                  <FaVideo />
                  <p className='text-3xl text-[#f2f2f2]'>عدد الحصص</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='px-6 mb-10 md:hidden block'>
          <div className='bg-[#6041ff] w-full shadow border rounded-lg p-6 text-white'>
            <div>
              <p className='text-5xl font-bold'>{data?.username}</p>
              <p className='text-4xl my-2'>{data?.subjects?.map((subject: any) => subject).join('، ')}</p>
              <p className='text-3xl line-clamp-2'>
                {data?.description?.length > 100 ? data?.description?.slice(0, 100) + '...' : data?.description}
              </p>
            </div>
            <div className='text-4xl mt-10'>
              <div className='w-full grid grid-auto-fit-[160px] gap-6 justify-between font-bold'>
                <div className='w-full flex flex-col items-center'>
                  <p>{data?.studentsCount}</p>
                  <FaPeopleGroup />
                  <p className='text-3xl'>عدد طلاب</p>
                </div>
                <div className='w-full flex flex-col items-center'>
                  <p>{data?.lectures?.length}</p>
                  <FaVideo />
                  <p className='text-3xl'>عدد الحصص</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='text-5xl font-bold px-6 text-[#212427] border-b w-fit pb-2'>الحصص المرفوعة</p>
        <div className='mt-10 px-6 mb-10 grid gap-6 md:grid-auto-fit-[390px] grid-auto-fit-[290px]'>
          {isLoading || !query?.id?.length ? (
            <SkeletonCard />
          ) : !data?.lectures?.length ? (
            <Empty
              className='text-2xl font-bold'
              description='لا يجود اي حصص مرفوعة حتي الان'
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ) : (
            <>
              {data?.lectures?.map((lecture: any) => {
                return <LectureCard key={lecture._id} lecture={lecture} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
