import React, { useRef, useState } from 'react';
import { Dropdown } from 'antd';
import { classNames } from '@/utils';
import Button from '../Button';
import { useOnClickOutside } from 'usehooks-ts';
import { MenuPropsType } from './type';

export const Menu = ({ children, className, label = 'label', labelClassName = '' }: MenuPropsType) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <Dropdown
      open={open}
      className='w-fit z-[9999]'
      dropdownRender={() => (
        <div
          dir='rtl'
          ref={ref}
          className={classNames(
            'bg-white border rounded-lg flex flex-col gap-1 p-2 w-full hover:[&>div]:bg-gray-200 [&>*]:rounded-md [&>*]:p-3 [&>div]:cursor-pointer',
            className,
          )}
        >
          {children}
        </div>
      )}
    >
      <Button
        ref={buttonRef}
        className={classNames(labelClassName)}
        type='default'
        onMouseDown={(event) => event.stopPropagation()}
        onClick={() => setOpen(!open)}
      >
        {label}
      </Button>
    </Dropdown>
  );
};

export default Menu;
