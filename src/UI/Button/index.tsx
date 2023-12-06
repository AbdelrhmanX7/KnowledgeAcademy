import React, { forwardRef } from 'react';
import { Button as ButtomComp } from 'antd';
import { ButtonComponentProps } from './type';
import { classNames } from '@/utils';

export const Button = forwardRef<HTMLButtonElement, ButtonComponentProps>(function Button(
  { type = 'primary', isLoading, children, className, ...props },
  ref,
) {
  return (
    <ButtomComp
      ref={ref}
      className={classNames('h-fit font-medium text-lg p-2', type === 'primary' && 'bg-[#1677ff]', className)}
      loading={isLoading}
      type={type}
      {...props}
    >
      {isLoading ? <></> : children}
    </ButtomComp>
  );
});

export default Button;
