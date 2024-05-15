import axios from 'axios';
import { API } from '.';
import { CreateTeacherType } from '../type';
import { STUDY_PHASES } from '@/constants';
import { getCookie } from 'cookies-next';

export const createTeacher = async (data: CreateTeacherType) =>
  axios.post(`${API}/create-teacher`, data).then((res) => res.data);

export const getTeachers = async ({ studyPhase = '' }: { studyPhase: string }) =>
  await axios.get(`${API}/get-teachers?studyPhase=${studyPhase}`).then((res) => res.data);

export const getTeacher = async ({ id = '', studyPhase = '' }: { id?: string; studyPhase?: string }) => {
  try {
    const getRespone = await axios
      .get(`${API}/get-teacher?teacherId=${id}&studyPhase=${studyPhase}`)
      .then((res) => res.data);

    for (const lecture of getRespone?.lectures ?? []) {
      if (lecture?.thumbnail?.path) {
        const getThumbnail = `${API}/image-streaming?imagePath=${lecture?.thumbnail?.path}&authorization=${getCookie('token') ?? ''}`;
        lecture.thumbnail = getThumbnail;
      } else {
        lecture.thumbnail = '';
      }
      lecture.studyPhase = STUDY_PHASES.find((phase) => phase.value === lecture?.studyPhase)?.label ?? '';
    }

    return getRespone;
  } catch (error: any) {
    return [];
  }
};
