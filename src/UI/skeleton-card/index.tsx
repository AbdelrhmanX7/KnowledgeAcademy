import { Skeleton } from 'antd';
import React from 'react';

export const SkeletonCard = () => {
  return (
    <React.Fragment>
      {[...Array(10)].map((_, index) => {
        return (
          <div
            key={index}
            className='flex flex-col w-full border rounded-lg shadow-md hover:bg-[#f8f8f8] hover:scale-[1.01] duration-300'
          >
            <div className='w-full aspect-[2_/_1] relative overflow-hidden rounded-t-lg'>
              <Skeleton.Image active className='object-cover !w-full !h-full' />
            </div>
            <Skeleton paragraph={{ rows: 2 }} active loading className='flex flex-col  p-3' />
            <div className='flex gap-3 w-full px-3 mb-3 mt-auto'>
              {[...Array(5)].map((_, index) => {
                return (
                  <div key={index}>
                    <Skeleton.Input className='!w-14 !min-w-0' size='small' active />
                  </div>
                );
              })}
            </div>
            <div className='px-3 w-full mb-3'>
              <Skeleton.Button size='large' active rootClassName='w-full' className='!w-full !h-[50px]' />
            </div>
            <div className='h-[62px] text-[#696969] [&_p]:text-[22px] mt-auto flex justify-between items-center border-t px-3 py-2'>
              <Skeleton.Input active />
              <Skeleton.Input active />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default SkeletonCard;
