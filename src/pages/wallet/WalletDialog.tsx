import { useState } from 'react';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WalletIcon from '@mui/icons-material/Wallet';
import { useAddBalance } from '@/Services/Hooks';
import { Button, Input } from '@/UI';
import toast from 'react-hot-toast';
import { GetInvalidateQueries } from '@/Services/InvalidateQueries';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CircularProgress from '@mui/material/CircularProgress';

interface WalletDialogProps {
  handleCloseDialog: () => void;
  handleModalContentClick: () => void;
}

const WalletDialog: React.FC<WalletDialogProps> = ({ handleCloseDialog, handleModalContentClick }) => {
  const [rechargeCode, setRechargeCode] = useState<string>('');
  const { mutateAsync: addBalanceFn } = useAddBalance();
  const { invalidateEWalletQuery } = GetInvalidateQueries();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div onClick={handleModalContentClick}>
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

            setRechargeCode('');
            handleCloseDialog();
            setIsLoading(false); // توقف عملية لودينج
          }}
          disabled={rechargeCode.length !== 16 || isLoading}
          className='w-[220px]'
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
    </div>
  );
};

export default WalletDialog;
