import axios from 'axios';
import { API } from '.';
import { RcFile } from 'antd/es/upload';

export const uploadThumbnail = async (imageFile: string | RcFile | Blob) => {
  const data = new FormData();
  data.append('image-file', imageFile);
  return axios
    .post(`${API}/upload-thumbnail`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.data);
};

export const uploadCover = async (imageFile: string | RcFile | Blob) => {
  const data = new FormData();
  data.append('image-file', imageFile);
  return axios
    .post(`${API}/upload-cover`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.data);
};

export const uploadVideo = async (body: { videoFile: any }) => {
  const data = new FormData();
  data.append('video-file', body.videoFile);
  return axios
    .post(`${API}/upload-video`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.data);
};
