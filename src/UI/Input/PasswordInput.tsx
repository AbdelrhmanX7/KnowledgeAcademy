import React, { forwardRef } from 'react';
import { Input, InputRef } from 'antd';
import { PasswordInputProps } from './type';
import { classNames } from '../../utils';
export const PasswordInput = forwardRef<InputRef, PasswordInputProps>(function PasswordInput(
  { className, label, ...props }: PasswordInputProps,
  ref,
) {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <p dir='rtl' className='text-2xl font-semibold'>
          {label}
        </p>
      )}

      <Input.Password
        type='password'
        allowClear
        className={classNames('font-medium h-14 text-lg', className)}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default PasswordInput;
