import axios from 'axios';
import { API } from '.';

export const login = (body: { email: string; password: string; isTeacher: boolean }) =>
  axios.post(`${API}/login`, body).then((res) => res.data);

export const signup = (body: { email: string; password: string }) => {
  return axios.post(`${API}/signup`, body).then((res) => res.data);
};

export const createStudentAccount = (body: any) => {
  return axios.post(`${API}/create-student`, body).then((res) => res.data);
};

export const createVerificationCode = (email: string) =>
  axios
    .post(`${API}/create-verification-code`, {
      email,
    })
    .then((res) => res.data);

export const sendVerificationCode = (body: { email: string; code: string }) =>
  axios.post(`${API}/verification-code`, body).then((res) => res.data);

export const resendVerificationCode = (email: string) =>
  axios.post(`${API}/resend-verification-code`, { email }).then((res) => res.data);
