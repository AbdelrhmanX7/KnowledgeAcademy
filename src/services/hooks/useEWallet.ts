import { useMutation, useQuery } from '@tanstack/react-query';
import { addBalance, getEWallet, buyLecture } from '../APIs';

export const useGetEWallet = () => {
  const query = useQuery({
    queryKey: ['getEWallet'],
    queryFn: getEWallet,
  });

  return { ...query, data: query.data };
};

export const useAddBalance = () => {
  return useMutation({
    mutationFn: (body: { rechargeCode: string }) => addBalance(body),
  });
};

export const useBuyLecture = () => {
  return useMutation({
    mutationFn: (body: { lectureId: string }) => buyLecture(body),
  });
};
