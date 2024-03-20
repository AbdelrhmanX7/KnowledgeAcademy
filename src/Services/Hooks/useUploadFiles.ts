import { useMutation } from '@tanstack/react-query';
import { deleteFile } from '../APIs';

export const useDeleteFile = () => {
  return useMutation({
    mutationFn: (body: { name: string }) => deleteFile(body),
  });
};
