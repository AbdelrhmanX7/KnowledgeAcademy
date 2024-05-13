import axios from 'axios';
import { API } from '.';
import { CreateTeacherType } from '../type';
import { STUDY_PHASES } from '@/constants';

export const createTeacher = async (data: CreateTeacherType) => {
  try {
    const getRespone = await axios.post(`${API}/create-teacher`, data).then((res) => res.data);
    return getRespone;
  } catch (error) {
    console.log(error);
  }
};

export const getTeachers = async ({ studyPhase }: { studyPhase: string }) => {
  try {
    const getRespone = await axios.get(`${API}/get-teachers?studyPhase=${studyPhase}`).then((res) => res.data);
    return getRespone;
  } catch (error) {
    console.log(error);
  }
};

export const getTeacherLectures = async ({ id, studyPhase }: { id?: string; studyPhase?: string }) => {
  try {
    const getRespone = await axios
      .get(`${API}/get-teacher-lectures?teacherId=${id}&studyPhase=${studyPhase}`)
      .then((res) => res.data);

    for (const lecture of getRespone ?? []) {
      if (lecture?.thumbnail?.path) {
        const getThumbnail = await axios
          .get(`${API}/${lecture.thumbnail.path}`, {
            responseType: 'blob',
          })
          .then((res) => URL.createObjectURL(res.data));
        lecture.thumbnail = getThumbnail;
      } else {
        lecture.thumbnail = '';
      }
      lecture.studyPhase = STUDY_PHASES.find((phase) => phase.value === lecture?.studyPhase)?.label ?? '';
    }

    return getRespone;
  } catch (error) {
    console.log(error);
  }
};
