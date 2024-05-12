import { twMerge } from 'tailwind-merge';
import { FileType } from './type';
export const classNames = (...classes: any) => twMerge(...classes);

export const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
