import { getBase64 } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';
import { GetProp, Image, Upload, UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';
import { UploadListType } from 'antd/es/upload/interface';
import React, { useEffect, useState } from 'react';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const UploadImage = ({
  getImageFile,
  uploadButtonText = 'اختر صورة الحصة',
  listType = 'picture-card',
  ...props
}: {
  uploadButtonText?: React.ReactNode | string;
  listType?: UploadListType | undefined;
  getImageFile: (file: RcFile | Blob | string, fileList?: UploadFile<any>) => void;
} & UploadProps<any>) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    if (newFileList.length) {
      newFileList[0].thumbUrl = await getBase64(newFileList[0].originFileObj as FileType);
      setFileList([
        {
          ...newFileList[0],
          status: 'done',
        },
      ]);
    }
  };

  const uploadButton = (
    <button className='border-0 bg-none' type='button'>
      <PlusOutlined />
      <div className='mt-2'>{uploadButtonText}</div>
    </button>
  );

  useEffect(() => {
    getImageFile && getImageFile(fileList[0]?.originFileObj as FileType, fileList[0]);
  }, [fileList]);

  return (
    <>
      <Upload
        maxCount={1}
        listType={listType}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple={false}
        onRemove={() => setFileList([])}
        {...props}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          alt=''
          wrapperStyle={{ display: 'none' }}
          className='fixed'
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default UploadImage;
