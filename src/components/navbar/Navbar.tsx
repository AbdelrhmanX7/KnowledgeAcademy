import React, { useEffect, useState, useRef, MouseEvent } from 'react';
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

import { Modal, TheMenu } from '@/UI';

interface NavbarProps {
  handleClickOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [user, setUser] = useLocalStorage<any>('user', {});
  const [userData, setUserData] = useState<any>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useGetEWallet();

  useEffect(() => setUserData(user), [user]);

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalContentClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
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
                <div onClick={handleClick}>
                  <AccountCircleIcon className='text-blue-500 cursor-pointer' />
                </div>
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
          <TheMenu handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} open={open}>
            <div
              ref={containerRef}
              id='container'
              className=' p-4 w-[300px] bg-white  gap-7  '
              style={{ direction: 'rtl' }}
            >
              <div className='grid'>
                <div className='text-black font-bold text-xl'>
                  <span className='m-2 font-bold text-sm flex w-9/10'>اهلا: {userData?.username}</span>
                </div>
                <span className='font-bold m-4 text-lg'>
                  <Link className='no-underline inline-flex' href='/profile'>
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
                    <Modal openDialog={openDialog} handleCloseDialog={handleCloseDialog}>
                      <WalletDialog
                        handleCloseDialog={handleCloseDialog}
                        handleModalContentClick={handleModalContentClick}
                      />
                    </Modal>
                  </div>
                  <Link className='link no-underline inline-flex mt-4' href='/wallet'>
                    <AccountBalanceWalletOutlinedIcon className='text-blue-500 ml-2' />
                    <h6 className='text-gray-700'> المحفظة الالكترونية </h6>
                  </Link>

                  <Link className='link no-underline inline-flex mt-4' href='/'>
                    <HomeIcon className='text-blue-500 ml-2' />
                    <h6 className='text-gray-700'>الصفحة الرئيسية</h6>
                  </Link>
                </span>

                <Link href='/login' className='w-[100%]'>
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
              </div>
            </div>
          </TheMenu>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
