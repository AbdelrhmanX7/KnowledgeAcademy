import React from 'react';
import { Select as SelectComp } from 'antd';
import { SelectComponentProps } from './type';

export const Select = ({ label, ...props }: SelectComponentProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <p dir='rtl' className='text-2xl font-semibold'>
          {label}
        </p>
      )}
      <SelectComp
        {...props}
        className='w-full [&_.ant-select-selector]:!text-lg  [&_.ant-select-selector]:!font-medium font-medium h-14 text-lg'
        allowClear
      />
    </div>
  );
};

export default Select;
