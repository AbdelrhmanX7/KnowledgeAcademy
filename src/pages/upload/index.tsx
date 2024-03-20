import React, { useState } from 'react';
import { DeleteOutlined, InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { DatePicker, message, Upload } from 'antd';
import { useDeleteFile } from '@/services/hooks';
import { Button, Input, Select } from '@/UI';
import { STUDY_PHASES } from '@/Constants';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
const { Dragger } = Upload;
const getBase64 = (file: any, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(file);
};

dayjs.extend(customParseFormat);

const props: UploadProps = {
  name: 'file',
  multiple: false,
  action: 'http://localhost:4000/upload',
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default function UploadPage() {
  const { mutateAsync: deleteFn } = useDeleteFile();
  const [saveFile, setSaveFile] = useState<string>('');
  console.log(saveFile);
  const [formState, setFormState] = useState({
    studyPhase: '',
    lessonName: '',
  });

  return (
    <div className='flex items-center justify-evenly p-6 h-screen'>
      <div className='w-[900px]'>
        <div className='aspect-video border rounded-lg shadow-md'>
          <Dragger
            className='p-0'
            onChange={(info) => {
              const { status } = info.file;
              if (info.file.type !== 'video/mp4') {
                message.error('Only video files are allowed');
                return;
              }
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                getBase64(info.file.originFileObj, (url) => {
                  setSaveFile(url);
                });
              } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            }}
            showUploadList={false}
            {...props}
            onRemove={async (info) => {
              try {
                await deleteFn({ name: info.name });
                message.success(`${info.name} file deleted successfully.`);
              } catch (error) {
                message.error(`${info.name} file deleted failed.`);
              }
            }}
          >
            {saveFile ? (
              <div className='absolute  w-[calc(100%-2px)] h-[calc(100%-2px)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:opacity-70 duration-300 rounded-lg overflow-hidden'>
                <video src={saveFile} className='w-full h-full object-fill' />
              </div>
            ) : (
              <p className='text-center'>
                <InboxOutlined className='text-5xl' />
                <p className='text-lg'>Click or drag file to this area to upload</p>
              </p>
            )}
          </Dragger>
        </div>
        {saveFile && (
          <Button type='primary' icon={<DeleteOutlined />} className='mt-4' danger>
            Delete
          </Button>
        )}
      </div>
      <div className='flex flex-col gap-6'>
        <Input placeholder='درس الاول لغة عربية' label='اسم الدرس' />
        <Select
          label='الصف الدراسي'
          onChange={(value) => setFormState({ ...formState, studyPhase: value })}
          options={STUDY_PHASES}
        />
        <DatePicker
          minDate={dayjs().add(1, 'day').endOf('day')}
          showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
          format='YYYY-MM-DD HH:mm:ss'
          placeholder='تاريخ الدرس'
        />
      </div>
    </div>
  );
}
