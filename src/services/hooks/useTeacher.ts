import { useMutation, useQuery } from '@tanstack/react-query';
import { createTeacher, getTeachers, getTeacherLectures } from '../APIs';
import { CreateTeacherType } from '../type';
import { useGetUserData } from '@/hooks';
import { STUDY_PHASES } from '@/constants';

export const useCreateTeacher = () => {
  return useMutation({
    mutationFn: (body: CreateTeacherType) => createTeacher(body),
  });
};

export const useGetTeachers = ({ studyPhase = '' }: { studyPhase?: string }) => {
  const query = useQuery({
    queryKey: ['getTeachers'],
    queryFn: () => {
      return getTeachers({ studyPhase });
    },
  });

  return { ...query, data: query.data };
};

export const useGetTeacherLectures = ({ id }: { id?: string }) => {
  const { studyPhase: userStudyPhase } = useGetUserData();
  const query = useQuery({
    queryKey: ['getTeacherLectures'],
    queryFn: () => {
      return getTeacherLectures({
        id,
        studyPhase: STUDY_PHASES.find((phase) => phase.value === userStudyPhase)?.label,
      });
    },
    enabled: !!id,
  });

  return { ...query, data: query.data };
};
