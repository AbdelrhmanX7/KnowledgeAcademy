import { useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { User } from './type';
import { DEFAULT_USER_DATA } from '@/constants';

export const useGetUserData = () => {
  const user = useReadLocalStorage<User>('user');
  const [userData, setUserData] = useState<User>(user ?? DEFAULT_USER_DATA);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);
  return userData;
};
