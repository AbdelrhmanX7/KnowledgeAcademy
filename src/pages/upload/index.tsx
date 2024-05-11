import React, { useState } from 'react';
import { DeleteOutlined, InboxOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd';
import { message, Progress, Upload } from 'antd';
import { Button, Input, Select } from '@/UI';
import { STUDY_PHASES } from '@/Constants';
import { API } from '@/services/APIs';
import { UploadImage } from '@/components/upload';
import axios from 'axios';
import { RcFile } from 'antd/es/upload';
import { classNames } from '@/utils';
import { useCreateLecture } from '@/services/hooks';
import { CreateLectureType } from '@/services/type';
const { Dragger } = Upload;

type ModifiedUploadFile = Omit<UploadFile, 'status'> & {
  status: any;
};

export default function UploadPage() {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    price: '0',
    studyPhase: '',
  });

  const [fileList, setFileList] = useState<ModifiedUploadFile[]>([]);

  const [imageFile, setImageFile] = useState<RcFile | Blob | string>();

  const { mutateAsync, isPending } = useCreateLecture();

  const handleFileUpload = async (selectedFile: any) => {
    try {
      if (!selectedFile) {
        alert('Please select a file to upload.');
        return;
      }
      let getRespone = {
        videoId: '',
        message: '',
      };
      const chunkSize = selectedFile.size / 100;
      for (let i = 0; i < 100; i++) {
        const start = i * chunkSize;
        const end = Math.min(selectedFile.size, start + chunkSize);
        const chunk = selectedFile.slice(start, end);
        const formData = new FormData();
        formData.append('video-file', chunk);
        formData.append('chunkNumber', `${i}`);
        formData.append('totalChunks', `${100}`);
        formData.append('originalname', selectedFile.name);

        getRespone = await axios.post(`${API}/upload-video`, formData).then((res) => res.data);

        setFileList((prev) => {
          return [
            {
              ...prev[0],
              status: 'uploading',
              percent: Number(i),
            },
          ];
        });
      }
      setFileList((prev) => {
        return [
          {
            ...prev[0],
            status: 'ready',
            percent: 100,
          },
        ];
      });

      message.success('تم رفع الفيديو بنجاح');
      return getRespone;
    } catch (error) {
      message.error('حدث خطأ اثناء رفع الفيديو');
    }
  };

  const uploadFile = async (value: any) => {
    const data = new FormData();
    data.append('image-file', value);
    try {
      const getRespone = await axios
        .post(`${API}/upload-thumbnail`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => res.data);
      message.success('تم رفع الصورة بنجاح');
      return getRespone;
    } catch (error) {
      message.error('حدث خطأ اثناء رفع الصورة');
    }
  };

  function validation() {
    if (!formState.title)
      return {
        message: 'يرجى ملء حقل اسم الدرس',
        status: false,
      };
    if (!formState.description)
      return {
        message: 'يرجى ملء حقل وصف الدرس',
        status: false,
      };
    if (!formState.price)
      return {
        message: 'يرجى ملء حقل سعر الدرس',
        status: false,
      };
    if (!formState.studyPhase)
      return {
        message: 'يرجى اختيار الصف الدراسي',
        status: false,
      };
    if (!fileList[0]?.originFileObj)
      return {
        message: 'يرجى اختيار ملف الفيديو',
        status: false,
      };

    return {
      message: '',
      status: true,
    };
  }

  return (
    <div className='flex items-center justify-evenly p-6 h-screen'>
      <div className='w-[900px]'>
        <div className='aspect-video border rounded-lg shadow-md'>
          <Dragger
            maxCount={1}
            className='p-0'
            fileList={fileList}
            multiple={false}
            onChange={(info) => {
              setFileList([]);
              if (info.fileList[0]?.originFileObj) {
                setTimeout(() => {
                  setFileList([
                    {
                      ...info.fileList[0],
                      status: 'ready',
                    },
                  ]);
                }, 100);
              }
            }}
            customRequest={() => {}}
            showUploadList={true}
            onRemove={async (info) => {
              message.success(`${info.name} file deleted successfully.`);
            }}
          >
            {fileList[0]?.originFileObj ? (
              <div className='absolute w-[calc(100%-2px)] h-[calc(100%-2px)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:opacity-70 duration-300 rounded-lg overflow-hidden'>
                <video controlsList='nodownload' controls className='w-full h-full object-fill'>
                  <source src={URL.createObjectURL(fileList[0].originFileObj)} type='video/mp4' />
                </video>
                {(fileList[0]?.status === 'uploading' || fileList[0]?.status === 'done') && (
                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      event.preventDefault();
                    }}
                    className='absolute top-0 w-full h-full z-10 text-white bg-[#2525254d] flex justify-center items-center'
                  >
                    <Progress
                      className={classNames(fileList[0]?.status !== 'done' && '[&_span]:!text-white')}
                      size={200}
                      type='circle'
                      percent={fileList[0]?.status === 'done' ? 100 : fileList[0].percent}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className='text-center'>
                <InboxOutlined className='text-5xl' />
                <p className='text-lg'>Click or drag file to this area to upload video</p>
              </div>
            )}
          </Dragger>
        </div>
        {fileList[0]?.originFileObj && (
          <Button
            onClick={() => {
              setFileList([]);
            }}
            type='primary'
            icon={<DeleteOutlined />}
            className='mt-4'
            danger
          >
            حذف الفيديو
          </Button>
        )}
      </div>
      <div className='flex flex-col gap-6'>
        <UploadImage
          getImageFile={(img) => {
            setImageFile(img);
          }}
        />
        <Input
          onChange={({ target }) => {
            setFormState({ ...formState, title: target.value });
          }}
          placeholder='درس الاول لغة عربية'
          label='اسم الدرس'
        />
        <Input
          onChange={({ target }) => {
            setFormState({ ...formState, description: target.value });
          }}
          placeholder='مراجعة شاملة عن كل دروس اللغة العربية'
          label='وصف الدرس'
        />
        <Input
          onChange={({ target }) => {
            setFormState({ ...formState, price: target.value });
          }}
          defaultValue={0}
          min={0}
          type='number'
          label='سعر الدرس'
        />
        <Select
          label='الصف الدراسي'
          onChange={(value) => setFormState({ ...formState, studyPhase: value })}
          options={STUDY_PHASES}
        />
        <Button
          loading={isPending}
          disabled={isPending}
          onClick={async () => {
            let videoId = '';
            let thumbnailId = '';
            try {
              if (!validation()?.status) {
                return message.error(validation()?.message);
              }
              const getVideoId = await handleFileUpload(fileList[0]?.originFileObj);
              videoId = getVideoId?.videoId ?? '';
              if (imageFile) {
                const getThumbnail = await uploadFile(imageFile);
                thumbnailId = getThumbnail?.thumbnailId ?? '';
              }
              const data: CreateLectureType = {
                ...formState,
                videoId,
                thumbnailId,
              };
              await mutateAsync(data);
              message.success('تم اضافة الحصة بنجاح');
            } catch (error) {
              message.error('حدث خطأ اثناء اضافة الحصة');
            }
          }}
          type='primary'
        >
          اضافة حصة
        </Button>
      </div>
    </div>
  );
}
