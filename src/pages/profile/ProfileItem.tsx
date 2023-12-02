import React, { ReactNode, useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Dialog from '@mui/material/Dialog';
import { Button, EmailInput, Input, PasswordInput, Select, Modal } from '@/UI';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
interface ProfileItemProps {
  icon: ReactNode;
  title: string;
  value: string | number | undefined;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ icon, title, value }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  return (
    <>
      <div className='my-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h4>
            {icon} {title}
          </h4>
          <h3 className='font text-base m-2'> {value}</h3>
        </div>
        <div>
          <Button onClick={handleOpenEditModal}>
            <EditOutlinedIcon />
          </Button>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal openDialog={openEditModal} handleCloseDialog={handleCloseEditModal}>
        <div style={{ direction: 'rtl' }} className='w-[350px] '>
          <Input id='edit-input' label={title} defaultValue={value} className='w-[300px] m-auto' />

          <Button className='m-3 w-' danger onClick={handleCloseEditModal}>
            إلغاء
          </Button>
          <Button className='m-3 w-' onClick={handleCloseEditModal}>
            حفظ
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ProfileItem;
