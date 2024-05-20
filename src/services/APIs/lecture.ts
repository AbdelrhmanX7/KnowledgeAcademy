import axios from 'axios';
import { API } from '.';
import { CreateLectureType } from '../type';
import { getCookie } from 'cookies-next';
import { message } from 'antd';
import { imageStreamingHandler } from './utils';

export const createLecture = async (body: CreateLectureType) => {
  return axios.post(`${API}/create-lecture`, body).then((res) => res.data);
};

export const getLecture = async (id: string) => {
  try {
    const authorization = getCookie('token');
    const getRespone = await axios.get(`${API}/lecture?lectureId=${id}`).then((res) => res.data);
    getRespone.videoUrl = `${API}/video`;
    getRespone.thumbnailUrl = imageStreamingHandler(getRespone?.thumbnail?.path ?? '');
    return getRespone;
  } catch (error: any) {
    message.error(error.response.data);
    return {};
  }
};
