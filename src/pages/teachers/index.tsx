import { STUDY_PHASES } from '@/constants';
import { useGetUserData } from '@/hooks';
import { useGetTeachers } from '@/services/hooks/useTeacher';
import { TeacherCard } from '@/UI';
import React from 'react';

export default function Teachers() {
  const userData = useGetUserData();

  const { data } = useGetTeachers({ studyPhase: userData?.studyPhase ?? '' });

  return (
    <div dir='rtl' className='mt-20 mb-10 flex gap-4 w-full'>
      {data?.map((teacher: any) => (
        <TeacherCard
          key={teacher.id}
          data={teacher}
          studyPhase={STUDY_PHASES.find((phase) => phase.value === userData?.studyPhase)?.label}
        />
      ))}
    </div>
  );
}
