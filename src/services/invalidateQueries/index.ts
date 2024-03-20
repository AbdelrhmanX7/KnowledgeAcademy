import { useQueryClient } from '@tanstack/react-query';

export const GetInvalidateQueries = () => {
  const queryClient = useQueryClient();
  return {
    invalidateEWalletQuery: () =>
      queryClient.invalidateQueries({
        queryKey: ['getEWallet'],
      }),
  };
};
