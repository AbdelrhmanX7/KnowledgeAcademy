import React, { forwardRef } from 'react';
import { Checkbox } from 'antd';
import { CheckboxComponentProps } from './type';

export const CheckboxGroup = forwardRef<any, CheckboxComponentProps>(function CheckboxGroup({ label, ...props }, ref) {
  return (
    <div dir='rtl' className='flex flex-col gap-2'>
      {label && (
        <p dir='rtl' className='text-2xl font-semibold'>
          {label}
        </p>
      )}
      <Checkbox.Group ref={ref} {...props} />
    </div>
  );
});

export default CheckboxGroup;
