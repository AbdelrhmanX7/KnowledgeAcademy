import { ReactNode, useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Dialog from '@mui/material/Dialog';

import { useUserContext } from '@/context/Context';

interface ModilProps {
  children: any;
  openDialog: boolean;
}

export const Modil: React.FC<ModilProps> = ({ children }) => {
  const localStorageUser = useReadLocalStorage<any>('user');
  const [user, setUser] = useState<any>();
  useEffect(() => setUser(localStorageUser), [localStorageUser]);

  const { openDialog, handleClose } = useUserContext();

  return (
    <Dialog
      onMouseDown={(e) => e.stopPropagation()}
      open={openDialog}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      className='text-center'
    >
      {children}
    </Dialog>
  );
};

export default Modil;
