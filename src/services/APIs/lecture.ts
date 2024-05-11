import axios from 'axios';
import { API } from '.';
import { CreateLectureType } from '../type';

export const createLecture = (body: CreateLectureType) => {
  return axios.post(`${API}/create-lecture`, body).then((res) => res.data);
};
