import axios from 'axios';
import { API } from '.';
import { CreateLectureType } from '../type';
import { getCookie } from 'cookies-next';

export const createLecture = async (body: CreateLectureType) => {
  return axios.post(`${API}/create-lecture`, body).then((res) => res.data);
};

export const getLecture = async (id: string) => {
  const authorization = getCookie('token');
  const getRespone = await axios.get(`${API}/lecture?lectureId=${id}`).then((res) => res.data);
  console.log(`${API}/video-streaming?videoPath=${getRespone.video.path}&authorization=${authorization}`);
  getRespone.videoUrl = `${API}/video-streaming?videoPath=${getRespone.video.path}&authorization=${authorization}`;

  return getRespone;
};
