import { STUDY_PHASES } from '@/constants';
import { useGetUserData } from '@/hooks';
import { useGetTeachers } from '@/services/hooks/useTeacher';
import { SkeletonCard, TeacherCard } from '@/UI';
import React from 'react';

export default function Teachers() {
  const userData = useGetUserData();

  const { data, isFetching } = useGetTeachers();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
      }}
      className='px-6 mt-20 mb-10'
    >
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
