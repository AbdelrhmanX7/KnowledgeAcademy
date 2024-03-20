import axios from "axios";
import { API } from ".";

export const uploadFiles = (body: { files: any }) => {
  return axios.post(`${API}/upload`, body).then((res) => res.data);
};

export const deleteFile = (body: { name: string }) => { 
  return axios.delete(`${API}/upload`, { data: body }).then((res) => res.data);
};