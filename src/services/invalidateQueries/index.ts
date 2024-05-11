import { useQueryClient } from '@tanstack/react-query';

export const useGetInvalidateQueries = () => {
  const queryClient = useQueryClient();
  return {
    invalidateEWalletQuery: () =>
      queryClient.invalidateQueries({
        queryKey: ['getEWallet'],
      }),
  };
};
