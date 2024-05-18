import React, { useState } from 'react';
import { UploadImage } from '../upload';
import { getBase64 } from '@/utils';
import { Button } from '@/UI';
import { useUploadCover } from '@/services/hooks';
import { message } from 'antd';
import { useUpdateTeacher } from '@/services/hooks/useTeacher';
import { RcFile } from 'antd/es/upload';
import { getCookie } from 'cookies-next';

export const UploadTeacherImages = ({ goNextStep }: { goNextStep?: () => void }) => {
  const [images, setImages] = useState<{
    profileImage: string;
    coverImage: string | RcFile | Blob;
  }>({
    profileImage: '',
    coverImage: '',
  });

  const { mutateAsync: uploadTeacherFn, isPending: isUploadThumbnailPending } = useUpdateTeacher();
  const { mutateAsync: uploadCoverFn, isPending: isUploadCoverPending } = useUploadCover();

  const isLoading = isUploadThumbnailPending || isUploadCoverPending;

  const token = getCookie('token');

  return (
    <div className='w-full h-fit mt-20 mb-6 max-w-[550px] mx-auto flex flex-col gap-10 px-4 py-6 rounded-lg sm:border border-0'>
      <div>
        <p className='text-lg'>الصورة الشخصية</p>
        <p className='mb-4'>يفضل ان تكون نسبة عرض الصورة إلى ارتفاعها تساوي 1 : 2*</p>
        <div className='relative sm:aspect-auto w-full aspect-[2_/_1] sm:w-[400px] sm:h-[200px] mx-auto'>
          <UploadImage
            disabled={isLoading}
            className='absolute !w-full !h-full [&_div]:!w-full [&_div]:!h-full'
            getImageFile={async (req, file) => {
              if (file?.originFileObj) {
                const profileImage = await getBase64(file?.originFileObj);
                setImages({
                  ...images,
                  profileImage,
                });
              }
            }}
            uploadButtonText='أختر صورة الشخصية'
            listType='picture-card'
          />
        </div>
      </div>
      <div>
        <p className='text-lg'>صورة الخلفية</p>
        <p className='mb-4'>يفضل ان تكون نسبة عرض الصورة إلى ارتفاعها تساوي 9 : 16*</p>
        <div className='relative w-full sm:w-[400px] aspect-video mx-auto'>
          <UploadImage
            disabled={isLoading}
            className='absolute !w-full !h-full [&_div]:!w-full [&_div]:!h-full'
            getImageFile={async (coverImage) => {
              setImages({
                ...images,
                coverImage,
              });
            }}
            uploadButtonText='أختر صورة الخلفية'
            listType='picture-card'
          />
        </div>
      </div>
      <Button
        onClick={async () => {
          if (!images?.profileImage && !images?.coverImage && token) {
            goNextStep && goNextStep();
            return;
          }
          try {
            const { coverId } = await uploadCoverFn(images.coverImage);
            message.success('تم رفع الصور الخلفية بنجاح');

            await uploadTeacherFn({
              profileImage: images.profileImage,
              coverImage: coverId,
            });

            message.success('تم رفع الصور الشخصية بنجاح');

            goNextStep && goNextStep();
          } catch (e: any) {
            message.error('حدث خطأ ما');
          }
        }}
        className='w-fit'
        isLoading={isLoading}
        disabled={isLoading}
        type='primary'
      >
        {images.profileImage || images.coverImage ? 'رفع الصور' : 'تخطي'}
      </Button>
    </div>
  );
};

export default UploadTeacherImages;
