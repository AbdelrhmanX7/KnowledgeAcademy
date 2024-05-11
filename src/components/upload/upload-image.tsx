import { PlusOutlined } from '@ant-design/icons';
import { GetProp, Image, Upload, UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';
import React, { useState } from 'react';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const UploadImage = ({ getImageFile }: { getImageFile: (file: string | RcFile | Blob) => void }) => {
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

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    if (newFileList.length) {
      setFileList([
        {
          ...newFileList[0],
          status: 'done',
        },
      ]);
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload Image</div>
    </button>
  );

  return (
    <>
      <Upload
        customRequest={(req) => {
          getImageFile(req.file);
        }}
        maxCount={1}
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple={false}
        onRemove={() => setFileList([])}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          alt=''
          wrapperStyle={{ display: 'none' }}
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
