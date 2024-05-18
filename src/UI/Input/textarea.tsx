import React, { forwardRef } from 'react';
import { Input } from 'antd';
import { TextAreaComponentProps } from './type';
import { classNames } from '@/utils';
import { TextAreaRef } from 'antd/es/input/TextArea';

const { TextArea } = Input;

export const TextAreaInput = forwardRef<TextAreaRef, TextAreaComponentProps>(function Input(
  { label, className, ...props }: TextAreaComponentProps,
  ref,
) {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <p dir='rtl' className='text-2xl font-semibold'>
          {label}
        </p>
      )}
      <TextArea
        ref={ref}
        allowClear
        placeholder='abdelrhman.example222@gmail.com'
        className={classNames('font-medium text-lg', className)}
        {...props}
      />
    </div>
  );
});

export default TextAreaInput;
