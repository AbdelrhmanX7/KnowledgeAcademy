import React, { ReactNode, useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Dialog from '@mui/material/Dialog';
import { Button } from '../../UI/Button';
interface ModalProps {
  children: ReactNode;
  openDialog: boolean;
  handleCloseDialog: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, openDialog, handleCloseDialog }) => {
  const localStorageUser = useReadLocalStorage<any>('user');
  const [, setUser] = useState<any>();
  useEffect(() => setUser(localStorageUser), [localStorageUser]);

  return (
    <Dialog
      onMouseDown={(e) => e.stopPropagation()}
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <div style={{ direction: 'rtl' }} className='flex'>
        <Button className='m-2 w-' danger onClick={handleCloseDialog}>
          x
        </Button>
        <h4 className='m-5 text-blue-500'> Knowledge Academy</h4>
      </div>
      <div className='text-center'>{children}</div>
    </Dialog>
  );
};

export default Modal;
