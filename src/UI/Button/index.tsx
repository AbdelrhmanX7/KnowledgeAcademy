import React from 'react';
import { Button as ButtomComp } from 'antd';
import { ButtonComponentProps } from './type';
import { classNames } from '@/utils';

export const Button = ({ type = 'primary', isLoading, children, ...props }: ButtonComponentProps) => {
  return (
    <ButtomComp
      className={classNames('h-fit font-medium text-lg py-2 px-3', type === 'primary' && 'bg-[#1677ff]')}
      loading={isLoading}
      type={type}
      {...props}
    >
      {children}
    </ButtomComp>
  );
};

export default Button;
