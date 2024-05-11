import { useMutation } from '@tanstack/react-query';
import { createLecture } from '../APIs';
import { CreateLectureType } from '../type';

export const useCreateLecture = () => {
  return useMutation({
    mutationFn: (body: CreateLectureType) => createLecture(body),
  });
};
