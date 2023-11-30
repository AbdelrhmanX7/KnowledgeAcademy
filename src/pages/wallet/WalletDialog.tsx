import { useState, useEffect } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WalletIcon from '@mui/icons-material/Wallet';
import { useAddBalance, useGetEWallet } from '@/Services/Hooks';
import { Button, Input } from '@/UI';
import toast from 'react-hot-toast';
import { GetInvalidateQueries } from '@/Services/InvalidateQueries';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useUserContext } from '@/context/Context';
import CircularProgress from '@mui/material/CircularProgress';
const WalletDialog: React.FC = () => {
  const localStorageUser = useReadLocalStorage<any>('user');
  const [user, setUser] = useState<any>();
  useEffect(() => setUser(localStorageUser), []);

  const [rechargeCode, setRechargeCode] = useState<string>('');
  const { mutateAsync: addBalanceFn } = useAddBalance();
  const { invalidateEWalletQuery } = GetInvalidateQueries();
  const { handleClose } = useUserContext();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <h3 id='alert-dialog-title' className='m-2' style={{ direction: 'rtl' }}>
        <AccountBalanceWalletOutlinedIcon className=' text-blue-600 m-2' />
        شحن المحفظة !
      </h3>

      <DialogContent>
        <Input
          value={rechargeCode}
          onChange={(e) => setRechargeCode(e.target.value)}
          label='كود الشحن'
          placeholder='اكتب كود الشحن'
          showCount
          maxLength={16}
          minLength={16}
          onMouseDown={(e) => e.stopPropagation()} // هنا إيقاف انتشار الحدث
        />
      </DialogContent>
      <DialogActions className='text-center mb-3 flex justify-center'>
        <Button
          onClick={async () => {
            setIsLoading(true); // ابدأ عملية لودينج

            try {
              await addBalanceFn({ rechargeCode });
              toast.success('تم الشحن بنجاح');
              invalidateEWalletQuery();
            } catch (error: any) {
              toast.error(error?.response?.data?.message);

              invalidateEWalletQuery();
            }
            handleClose();
            setRechargeCode('');

            setIsLoading(false); // توقف عملية لودينج
          }}
          disabled={rechargeCode.length !== 16 || isLoading}
          className='w-fit'
        >
          {isLoading ? (
            <div className='loading-indicator'>
              <CircularProgress />
            </div>
          ) : (
            <div>
              {' '}
              اتمام عملية الدفع <WalletIcon className='mx-2' />
            </div>
          )}
        </Button>
      </DialogActions>
    </>
  );
};

export default WalletDialog;
