import Container from '@mui/material/Container';
import { useReadLocalStorage } from 'usehooks-ts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { useEffect, useState } from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ProfileItem from './ProfileItem';
const Profile = () => {
  const localStorageUser = useReadLocalStorage<any>('user');
  const [user, setUser] = useState<any>();
  useEffect(() => setUser(localStorageUser), []);
  console.log(user);
  return (
    <div className='mt-[50px]'>
      <Container maxWidth='md' className='gap-7 border rounded-lg shadow-md p-6 mt-[120px] mb-[50px] w-[90%]'>
        <div className='flex items-center justify-center'>
          <div className='gap-7 mt-10 border rounded-full shadow-md h-12 justify-center w-[30%] mb-5 flex items-center'>
            <h3>ملف المستخدم </h3>
            <AccountCircleIcon className='m-2 text-blue-600' />
          </div>
        </div>
        <div style={{ direction: 'rtl' }}>
          <hr />
          <ProfileItem
            icon={<AccountCircleOutlinedIcon className='text-blue-500 m-2' />}
            title='اسم الطالب'
            value={user?.username}
          />
          <hr />

          <ProfileItem
            icon={<PhoneEnabledIcon className='text-blue-500 m-2' />}
            title='رقم الهاتف'
            value={user?.phone}
          />
          <hr />
          <ProfileItem
            icon={<AttachEmailOutlinedIcon className='text-blue-500 m-2' />}
            title='البريد الالكترونى'
            value={user?.email}
          />
          <hr />
          <ProfileItem
            icon={<SchoolOutlinedIcon className='text-blue-500 m-2' />}
            title='الصف الدراسى'
            value={user?.name}
          />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
