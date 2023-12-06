import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Button } from '../Button';
import { MdClose } from 'react-icons/md';
import { ModalPropsType } from './type';

export const Modal = ({ children, open, title = 'شحن المحفظة', onClose }: ModalPropsType) => {
  return (
    <Dialog
      onMouseDown={(e) => e.stopPropagation()}
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <div dir='rtl' className='flex justify-between items-center w-full p-6'>
        <p className='text-4xl font-semibold'>{title}</p>
        <Button type='default' danger onClick={onClose}>
          <MdClose />
        </Button>
      </div>
      <div className='text-center pb-6'>{children}</div>
    </Dialog>
  );
};

export default Modal;
