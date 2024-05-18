import { getCookie } from 'cookies-next';
import { API } from '.';

export const imageStreamingHandler = (imagePath: string) => {
  let getIamgeUrl = '';
  if (imagePath) {
    getIamgeUrl = `${API}/image-streaming?imagePath=${imagePath}&authorization=${getCookie('token') ?? ''}`;
  }
  return getIamgeUrl;
};
