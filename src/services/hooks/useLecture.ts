import { useMutation, useQuery } from '@tanstack/react-query';
import { createLecture, getLecture } from '../APIs';
import { CreateLectureType } from '../type';

export const useCreateLecture = () => {
  return useMutation({
    mutationFn: (body: CreateLectureType) => createLecture(body),
  });
};

export const useGetLecture = ({ id = '' }: { id?: string }) => {
  const query = useQuery({
    queryKey: ['getLecture'],
    queryFn: () => getLecture(id),
    enabled: !!id,
  });

  return { ...query, data: query.data };
};
