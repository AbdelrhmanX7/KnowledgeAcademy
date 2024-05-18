import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';
import HomeIcon from '@mui/icons-material/Home';
import { setCookie } from 'cookies-next';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useGetEWallet } from '@/services/hooks';
import { AiOutlineUser } from 'react-icons/ai';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WalletDialog from '@/pages/wallet/WalletDialog';
import { Modal, Menu, Button } from '@/UI';
import { useGetInvalidateQueries } from '@/services/invalidateQueries';
import { FaChalkboardTeacher } from 'react-icons/fa';
const Navbar = () => {
  const [user, setUser] = useLocalStorage<any>('user', {});
  const [userData, setUserData] = useState<any>({});
  const { data, isLoading } = useGetEWallet();

  const { invalidateEWalletQuery } = useGetInvalidateQueries();

  useEffect(() => {
    setUserData(user);
    if (user?.username) {
      invalidateEWalletQuery();
    }
  }, [user]);

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <AppBar className='bg-white sticky top-0 shadow-none border-b'>
      <Toolbar>
        <Typography className='text-blue-600' variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Link href='/'>Knowledge Academy</Link>
        </Typography>
        <div className='flex gap-4'>
          {userData?.username ? (
            <Menu
              labelClassName='py-2'
              label={<AiOutlineUser className='text-blue-500 cursor-pointer' />}
              className='font-bold m-4 text-lg'
            >
              <div className='hover:bg-black'>{userData?.username}</div>
              <div>
                <Link className='no-underline inline-flex w-full' href='/profile'>
                  <AccountCircleIcon className='text-blue-500 ml-2' />
                  <h5 className='text-gray-700'>الملف الشخصي</h5>
                </Link>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex' }}>
                  <WalletOutlinedIcon className='text-blue-500 ml-2' />
                  <h6 className='m-1 '> رصيدك : </h6>
                  <h6 className='m-1 '>{isLoading ? 'Loading...' : `جنية ${data?.eWallet?.balance}`}</h6>
                </div>
                <Button onClick={() => setOpenDialog(true)}>اشحن</Button>
                <Modal open={openDialog} onClose={() => setOpenDialog(false)}>
                  <WalletDialog onClose={() => setOpenDialog(false)} />
                </Modal>
              </div>
              <div>
                <Link className='link no-underline inline-flex w-full' href='/wallet'>
                  <AccountBalanceWalletOutlinedIcon className='text-blue-500 ml-2' />
                  <h6 className='text-gray-700'> المحفظة الالكترونية </h6>
                </Link>
              </div>

              <div>
                <Link className='flex items-center link no-underline w-full' href='/teachers'>
                  <FaChalkboardTeacher className='text-blue-500 ml-2' />
                  <h6 className='text-gray-700'>المدرسين</h6>
                </Link>
              </div>

              <div>
                <Link className='link no-underline inline-flex w-full' href='/'>
                  <HomeIcon className='text-blue-500 ml-2' />
                  <h6 className='text-gray-700'>الصفحة الرئيسية</h6>
                </Link>
              </div>
              <Link href='/login' className='!p-0'>
                <Button
                  onClick={() => {
                    setUser({});
                    setCookie('token', '');
                  }}
                  danger
                  className='w-full'
                >
                  تسجيل خروج
                </Button>
              </Link>
            </Menu>
          ) : (
            <>
              <Link className='!p-0' href='/login'>
                <Button>تسجيل دخول</Button>
              </Link>
              <Link className='!p-0' href='/signup'>
                <Button type='default'>تسجيل</Button>
              </Link>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
