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
        className={classNames('font-medium h-14 text-lg', className)}
        {...props}
      />
    </div>
  );
};

export default EmailInput;
