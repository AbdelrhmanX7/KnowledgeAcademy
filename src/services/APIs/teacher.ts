import axios from 'axios';
import { API } from '.';
import { CreateTeacherType } from '../type';

export const createTeacher = async (data: CreateTeacherType) => {
  try {
    const getRespone = await axios.post(`${API}/create-teacher`, data).then((res) => res.data);
    return getRespone;
  } catch (error) {
    console.log(error);
  }
};
