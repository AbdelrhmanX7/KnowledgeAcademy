import { useMutation } from '@tanstack/react-query';
import {
  createStudentAccount,
  createVerificationCode,
  login,
  resendVerificationCode,
  sendVerificationCode,
  signup,
} from '../APIs';

export const useLogin = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string; isTeacher: boolean }) => login(body),
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) => signup(body),
  });
};

export const useCreateStudentAccount = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) => createStudentAccount(body),
  });
};

export const useCreateVerificationCode = () => {
  return useMutation({
    mutationFn: (email: string) => createVerificationCode(email),
  });
};

export const useSendVerificationCode = () => {
  return useMutation({
    mutationFn: (body: { email: string; code: string }) => sendVerificationCode(body),
  });
};

export const useResendVerificationCode = () => {
  return useMutation({
    mutationFn: (email: string) => resendVerificationCode(email),
  });
};
