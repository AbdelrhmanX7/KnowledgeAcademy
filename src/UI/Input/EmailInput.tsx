import React from 'react';
import Input from './Input';
import { classNames } from '../../utils';
import { NormalInputProps } from './type';

export const EmailInput = ({ className, label, ...props }: NormalInputProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <Input
        label={label}
        type='email'
        allowClear
        placeholder='abdelrhman.example222@gmail.com'
        className={classNames('font-medium h-14 text-lg', className)}
        {...props}
      />
    </div>
  );
};

export default EmailInput;
