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

export function formatVideoDuration(timeInSeconds: number) {
  if (!timeInSeconds) return 'N/A';
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  const seconds = timeInSeconds - hours * 3600 - minutes * 60;

  if (!hours && !minutes) return `${seconds.toFixed(0)} ثانية`;
  if (!hours) return `${minutes}:${seconds.toFixed(0)} دقيقة`;

  return `${hours}:${minutes}:${seconds.toFixed(0)} ساعة`;
}
