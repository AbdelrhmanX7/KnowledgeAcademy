import React, { forwardRef } from 'react';
import { Input } from 'antd';

import { TextAreaComponentProps } from './type';

export const Textarea = forwardRef<any, TextAreaComponentProps>(function Textarea({ label, ...props }, ref) {
  return (
    <div dir='rtl' className='flex flex-col gap-2'>
      {label && (
        <p dir='rtl' className='text-2xl font-semibold'>
          {label}
        </p>
      )}
      <Input.TextArea ref={ref} {...props} />
    </div>
  );
});

export default Textarea;
