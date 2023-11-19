import axios from "axios";
import { API } from ".";

export const login = (body: { email: string; password: string }) => {
  return axios.post(`${API}/login`, body).then((res) => res.data);
};

export const signup = (body: { email: string; password: string }) => {
  return axios.post(`${API}/signup`, body).then((res) => res.data);
};
