import Container from '@mui/material/Container';
import { useReadLocalStorage } from 'usehooks-ts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import { useEffect, useState } from 'react';
import { useAddBalance, useGetEWallet } from '@/Services/Hooks';
import { Button, Input } from '@/UI';
import toast from 'react-hot-toast';
import { GetInvalidateQueries } from '@/Services/InvalidateQueries';


const Profile = () => {
  const localStorageUser = useReadLocalStorage<any>('user');
  const [user, setUser] = useState<any>();
  useEffect(() => setUser(localStorageUser), []);
  const { data, isLoading } = useGetEWallet();
  const [rechargeCode, setRechargeCode] = useState<any>('');
  const { mutateAsync: addBalanceFn } = useAddBalance();
  const { invalidateEWalletQuery } = GetInvalidateQueries();
  return (
    <div className='mt-[50px]'>
      <Container maxWidth='md' className='gap-7 border rounded-lg shadow-md p-6 mt-[120px] mb-[50px] w-[90%]'>
        <div className='flex items-center justify-center'>
          <div className='gap-7 mt-10 border rounded-full shadow-md h-12 justify-center w-[30%] mb-5 flex items-center'>
            <h3>ملف المستخدم </h3>
            <AccountCircleIcon className='m-2 text-blue-600' />
          </div>
        </div>
        <div className='text-center'>
          <h3 className='font text-base mb-3'> {user?.username}</h3>
          <hr />
          <div>
            <h3 className='font text-base '>
              {user?.phone}
              <PhoneIcon className='m-2 text-blue-600' />
            </h3>
            <h3 className='font mb-3'>
              {user?.email}
              <AlternateEmailTwoToneIcon className='m-2 text-blue-600' />
            </h3>
            <hr />
            <div>
              <h3>الرصيد</h3>
              <h3>{isLoading ? 'Loading...' : `جنية ${data?.eWallet?.balance}`}</h3>
              <div className='flex flex-col gap-6'>
                <Input
                  value={rechargeCode}
                  onChange={(e) => setRechargeCode(e.target.value)}
                  label='كود الشحن'
                  placeholder='اكتب كود شحن'
                  showCount
                  maxLength={16}
                  minLength={16}
                />
                <Button
                  onClick={async () => {
                    try {
                      await addBalanceFn({ rechargeCode });
                      toast.success('تم الشحن بنجاح');
                      invalidateEWalletQuery();
                    } catch (error: any) {
                      toast.error(error?.response?.data?.message);
                      invalidateEWalletQuery();
                    }
                  }}
                  disabled={rechargeCode?.length !== 16}
                  className='w-fit'
                >
                  ادفع
                </Button>
              </div>
              <h3>Transactions</h3>
              <p>{JSON.stringify(data?.eWallet?.transactions)}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
