import axios from 'axios';
import { API } from '.';

export const getEWallet = () => {
  return axios.get(`${API}/e-wallet`).then((res) => res.data);
};

export const addBalance = (body: { rechargeCode: string }) => {
  return axios.post(`${API}/add-balance`, body).then((res) => res.data);
};
