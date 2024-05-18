import axios from 'axios';
import { API } from '.';
import { CreateTeacherType } from '../type';
import { STUDY_PHASES } from '@/constants';
import { imageStreamingHandler } from './utils';

export const createTeacher = async (data: CreateTeacherType) =>
  axios.post(`${API}/create-teacher`, data).then((res) => res.data);

export const updateTeacher = async (data: Partial<CreateTeacherType>) =>
  axios.put(`${API}/update-teacher`, data).then((res) => res.data);

export const getTeachers = async ({ studyPhase = '' }: { studyPhase: string }) =>
  await axios.get(`${API}/get-teachers?studyPhase=${studyPhase}`).then((res) => res.data);

export const getTeacher = async ({ id = '', studyPhase = '' }: { id?: string; studyPhase?: string }) => {
  try {
    const getRespone = await axios
      .get(`${API}/get-teacher?teacherId=${id}&studyPhase=${studyPhase}`)
      .then((res) => res.data);

    getRespone.coverImage = imageStreamingHandler(getRespone?.coverImage?.path ?? '');
    for (const lecture of getRespone?.lectures ?? []) {
      lecture.thumbnail = imageStreamingHandler(lecture?.thumbnail?.path ?? '');
      lecture.studyPhase = STUDY_PHASES.find((phase) => phase.value === lecture?.studyPhase)?.label ?? '';
    }

    return getRespone;
  } catch (error: any) {
    return [];
  }
};
