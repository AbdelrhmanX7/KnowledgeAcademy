import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Button } from '../../UI/Button';
import { useLocalStorage } from 'usehooks-ts';
import HomeIcon from '@mui/icons-material/Home';
import { setCookie } from 'cookies-next';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useGetEWallet } from '@/Services/Hooks';
import { AiOutlineUser } from 'react-icons/ai';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WalletDialog from '@/pages/wallet/WalletDialog';

import { Modal, Menu } from '@/UI';

const Navbar = () => {
  const [user, setUser] = useLocalStorage<any>('user', {});
  const [userData, setUserData] = useState<any>({});
  const { data, isLoading } = useGetEWallet();

  useEffect(() => setUserData(user), [user]);

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' className='bg-white'>
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
                    <Button onClick={() => setOpenDialog(true)}>اشحن !</Button>
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
                    <Link className='link no-underline inline-flex w-full' href='/'>
                      <HomeIcon className='text-blue-500 ml-2' />
                      <h6 className='text-gray-700'>الصفحة الرئيسية</h6>
                    </Link>
                  </div>
                  <Link href='/' className='w-[100%]'>
                    <Button
                      onClick={() => {
                        setUser({});
                        setCookie('token', '');
                      }}
                      danger
                      className='w-[100%]'
                    >
                      تسجيل خروج
                    </Button>
                  </Link>
                </Menu>
              ) : (
                <>
                  <Link href='/login'>
                    <Button>تسجيل دخول</Button>
                  </Link>
                  <Link href='/signup'>
                    <Button type='default'>تسجيل</Button>
                  </Link>
                </>
              )}
            </div>
          </Toolbar>
          {/* <Menu /> */}
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
