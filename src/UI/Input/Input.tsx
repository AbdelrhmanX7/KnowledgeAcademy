import React, { forwardRef } from 'react';
import { Input as AntdInput, InputRef } from 'antd';
import { NormalInputProps } from './type';
import { classNames } from '../../utils';

export const Input = forwardRef<InputRef, NormalInputProps>(function Input(
  { label, className, ...props }: NormalInputProps,
  ref,
) {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <p dir='rtl' className='text-2xl font-semibold'>
          {label}
        </p>
      )}
      <AntdInput
        dir='rtl'
        ref={ref}
        size='large'
        allowClear
        className={classNames(' font-medium h-14 text-lg', className)}
        {...props}
      />
    </div>
  );
});

export default Input;
