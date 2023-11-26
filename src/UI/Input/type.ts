import { InputProps } from 'antd';

export interface PasswordInputProps extends InputProps {
  confirmPassword?: boolean;
  label?: string;
}
export interface NormalInputProps extends InputProps {
  label?: string;
}
