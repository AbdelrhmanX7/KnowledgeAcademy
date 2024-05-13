import { useQueryClient } from '@tanstack/react-query';

export const useGetInvalidateQueries = () => {
  const queryClient = useQueryClient();
  return {
    invalidateEWalletQuery: () =>
      queryClient.invalidateQueries({
        queryKey: ['getEWallet'],
      }),
    invalidateGetTeachersQuery: () =>
      queryClient.invalidateQueries({
        queryKey: ['getTeachers'],
      }),

    invalidateGetTeacherQuery: () =>
      queryClient.invalidateQueries({
        queryKey: ['getTeacherLectures'],
      }),

    invalidateGetLectureQuery: () =>
      queryClient.invalidateQueries({
        queryKey: ['getLecture'],
      }),
  };
};
