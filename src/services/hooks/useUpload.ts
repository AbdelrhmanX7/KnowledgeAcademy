import { useMutation } from '@tanstack/react-query';
import { uploadCover, uploadThumbnail } from '../APIs';
import { RcFile } from 'antd/es/upload';

export const useUploadThumbnail = () => {
  return useMutation({
    mutationFn: (imageFile: string | RcFile | Blob) => uploadThumbnail(imageFile),
  });
};

export const useUploadCover = () => {
  return useMutation({
    mutationFn: (imageFile: string | RcFile | Blob) => uploadCover(imageFile),
  });
};
