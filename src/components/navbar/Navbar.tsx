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
import { useUserContext } from '@/context/Context';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [user, setUser] = useLocalStorage<any>('user', {});
  const [userData, setUserData] = useState<any>({});
  const { isLoggedIn, handleOpen, handleClose } = useUserContext();
  useEffect(() => setUserData(user), [user]);

  const handleLogout = () => {
    setUser({});
    setCookie('token', '');
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
          {isLoggedIn && (
            <div
              onClick={handleClose}
              className='absolute right-[3%] top-[30%] p-4 w-[230px] bg-white  gap-7 mt-10 border rounded-lg shadow-md'
              style={{ direction: 'rtl' }}
            >
              <div className='grid'>
                <div className='text-black font-bold text-xl'>
                  <span className='m-2 font-bold text-sm flex w-9/10'>اهلا: {userData?.username}</span>
                </div>
                <span className='font-bold m-4 text-lg'>
                  <Link className='no-underline inline-flex' href='/profile'>
                    <AccountCircleIcon className='text-blue-500 ml-2' />
                    <h5 className='text-gray-700'>حسابى</h5>
                  </Link>

                  <Link className='link no-underline inline-flex mt-4' href='/'>
                    <PersonalVideoIcon className='text-blue-500 ml-2' />
                    <h6 className='text-gray-700'> كورساتى ....</h6>
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
          )}
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
