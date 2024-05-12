import { useMutation } from '@tanstack/react-query';
import { createTeacher } from '../APIs';
import { CreateTeacherType } from '../type';

export const useCreateTeacher = () => {
  return useMutation({
    mutationFn: (body: CreateTeacherType) => createTeacher(body),
  });
};
