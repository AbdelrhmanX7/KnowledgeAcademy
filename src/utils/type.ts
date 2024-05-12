import { GetProp, UploadProps } from 'antd';

export type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
