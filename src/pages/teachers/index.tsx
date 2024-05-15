import { STUDY_PHASES } from '@/constants';
import { useGetUserData } from '@/hooks';
import { useGetTeachers } from '@/services/hooks/useTeacher';
import { SkeletonCard, TeacherCard } from '@/UI';
import React from 'react';

export default function Teachers() {
  const userData = useGetUserData();

  const { data, isFetching } = useGetTeachers();

  return (
    <div className='px-6 mt-20 mb-10 grid gap-6 md:grid-auto-fit-[390px] grid-auto-fit-[290px]'>
      {isFetching ? (
        <SkeletonCard />
      ) : (
        <>
          {data?.map((teacher: any) => (
            <TeacherCard
              key={teacher._id}
              data={teacher}
              studyPhase={STUDY_PHASES.find((phase) => phase.value === userData?.studyPhase)?.label}
            />
          ))}
        </>
      )}
    </div>
  );
}
