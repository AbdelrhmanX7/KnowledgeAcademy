import React, { useEffect, useState, useRef } from 'react';
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

import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WalletDialog from '@/pages/wallet/WalletDialog';
import { useOnClickOutside } from 'usehooks-ts';
import Modil from '@/UI/dialog';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [user, setUser] = useLocalStorage<any>('user', {});
  const [userData, setUserData] = useState<any>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useGetEWallet();

  useEffect(() => setUserData(user), [user]);

  const [login, setLogin] = useState(false);

  const handleOpen = () => {
    setLogin(true);
  };

  const handleClose = () => {
    setLogin(false);
  };

  useOnClickOutside(containerRef, handleClose);

  const handleLinkClick = () => {
    setLogin(false); // عند الضغط على أي لينك داخل الـ div، سيتم إغلاقه
  };

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
                <AccountCircleIcon onClick={handleOpen} className='text-blue-500 cursor-pointer' />
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
          {login && (
            <div
              ref={containerRef}
              id='container'
              className='absolute right-[3%] top-[30%] p-4 w-[300px] bg-white  gap-7 mt-10 border rounded-lg shadow-md'
              style={{ direction: 'rtl' }}
            >
              <div className='grid'>
                <div className='text-black font-bold text-xl'>
                  <span className='m-2 font-bold text-sm flex w-9/10'>اهلا: {userData?.username}</span>
                </div>
                <span className='font-bold m-4 text-lg'>
                  <Link className='no-underline inline-flex' href='/profile' onClick={handleLinkClick}>
                    <AccountCircleIcon className='text-blue-500 ml-2' />
                    <h5 className='text-gray-700'>الملف الشخصي</h5>
                  </Link>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                      <WalletOutlinedIcon className='text-blue-500 ml-2 mt-2' />
                      <h6 className='m-1 '> رصيدك : </h6>
                      <h6 className='m-1 '>{isLoading ? 'Loading...' : `جنية ${data?.eWallet?.balance}`}</h6>
                    </div>
                    <Button onClick={handleClickOpen}>اشحن !</Button>
                    <Modil openDialog={openDialog} handleCloseDialog={handleCloseDialog}>
                      <WalletDialog handleCloseDialog={handleCloseDialog} />
                    </Modil>
                  </div>
                  <Link className='link no-underline inline-flex mt-4' href='/wallet' onClick={handleLinkClick}>
                    <AccountBalanceWalletOutlinedIcon className='text-blue-500 ml-2' />
                    <h6 className='text-gray-700'> المحفظة الالكترونية </h6>
                  </Link>

                  <Link className='link no-underline inline-flex mt-4' href='/' onClick={handleLinkClick}>
                    <HomeIcon className='text-blue-500 ml-2' />
                    <h6 className='text-gray-700'>الصفحة الرئيسية</h6>
                  </Link>
                </span>

                <Link href='/login' className='w-[100%]'>
                  <Button
                    onClick={() => {
                      setUser({});
                      setCookie('token', '');
                      handleLinkClick();
                    }}
                    danger
                    className='w-[100%]'
                  >
                    cb تسجيل خروج
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
