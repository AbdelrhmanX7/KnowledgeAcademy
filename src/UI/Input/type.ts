import { InputProps } from 'antd';
import { TextAreaProps } from 'antd/es/input';

export interface PasswordInputProps extends InputProps {
  confirmPassword?: boolean;
  label?: string;
}
export interface NormalInputProps extends InputProps {
  label?: string;
}

export interface TextAreaComponentProps extends TextAreaProps {
  label?: string;
}
