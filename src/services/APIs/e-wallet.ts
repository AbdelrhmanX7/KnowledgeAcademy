import axios from 'axios';
import { API } from '.';

export const getEWallet = async () => {
  return axios.get(`${API}/e-wallet`).then((res) => res.data);
};

export const addBalance = async (body: { rechargeCode: string }) => {
  return axios.post(`${API}/add-balance`, body).then((res) => res.data);
};

export const buyLecture = async (body: { lectureId: string }) => {
  return axios.post(`${API}/buy-lecture`, body).then((res) => res.data);
};
