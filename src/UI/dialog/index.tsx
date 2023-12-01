import React, { ReactNode, useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Dialog from '@mui/material/Dialog';
import { Button } from '../../UI/Button';
interface ModilProps {
  children: ReactNode;
  openDialog: boolean;
  handleCloseDialog: () => void;
}

const Modil: React.FC<ModilProps> = ({ children, openDialog, handleCloseDialog }) => {
  const localStorageUser = useReadLocalStorage<any>('user');
  const [user, setUser] = useState<any>();
  useEffect(() => setUser(localStorageUser), [localStorageUser]);

  return (
    <Dialog
      onMouseDown={(e) => e.stopPropagation()}
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <div style={{ direction: 'rtl' }}>
        <Button className='m-2 w-10' danger onClick={handleCloseDialog}>
          x
        </Button>
      </div>
      <div className='text-center'>{children}</div>
    </Dialog>
  );
};

export default Modil;
