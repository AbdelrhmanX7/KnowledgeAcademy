import { useMutation } from "@tanstack/react-query";
import { login, signup } from "../APIs";

export const useLogin = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) => login(body),
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) => signup(body),
  });
};
