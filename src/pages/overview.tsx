import { AreaChartHero, BarChartHero } from '@/components/dashboard';
import { Button, SkeletonCard } from '@/UI';
import React from 'react';

export default function Overview() {
  return (
    <div>
      <Button type='default'>رفع حصة جديدة</Button>
      <BarChartHero />
      <AreaChartHero />
      <div>
        <p className='text-5xl font-bold px-6 text-[#212427] border-b w-fit pb-2'>اعلي 5 حصص من حيث عدد طلاب</p>
        <div className='mt-10 flex gap-6 overflow-auto'>
          <SkeletonCard />
        </div>
      </div>
      <div>
        <p className='text-5xl font-bold px-6 text-[#212427] border-b w-fit pb-2'>حصص الصف الاول الثانوي</p>
        <div className='mt-10 py-2 flex gap-6 overflow-auto'>
          <SkeletonCard />
        </div>
      </div>
      <div>
        <p className='text-5xl font-bold px-6 text-[#212427] border-b w-fit pb-2'>حصص الصف الثاني الثانوي</p>
        <div className='mt-10 flex gap-6 overflow-auto'>
          <SkeletonCard />
        </div>
      </div>
      <div>
        <p className='text-5xl font-bold px-6 text-[#212427] border-b w-fit pb-2'>حصص الصف الثالث الثانوي</p>
        <div className='mt-10 flex gap-6 overflow-auto'>
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}
