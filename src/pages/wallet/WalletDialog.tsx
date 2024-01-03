import { useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WalletIcon from '@mui/icons-material/Wallet';
import { useAddBalance } from '@/Services/Hooks';
import { Button, Input } from '@/UI';
import toast from 'react-hot-toast';
import { GetInvalidateQueries } from '@/Services/InvalidateQueries';

const WalletDialog = ({ onClose }: { onClose?: () => void }) => {
  const [rechargeCode, setRechargeCode] = useState<string>('');
  const { mutateAsync: addBalanceFn, isPending } = useAddBalance();
  const { invalidateEWalletQuery } = GetInvalidateQueries();

  return (
    <div className='max-w-[450px]'>
      <DialogContent>
        <Input
          value={rechargeCode}
          onChange={(e) => setRechargeCode(e.target.value)}
          placeholder='اكتب كود الشحن'
          showCount
          className='text-2xl'
          maxLength={16}
          minLength={16}
        />
      </DialogContent>
      <DialogActions className='text-center flex justify-center'>
        <Button
          onClick={async () => {
            try {
              await addBalanceFn({ rechargeCode });
              toast.success('تم الشحن بنجاح');
              invalidateEWalletQuery();
              setRechargeCode('');
              onClose && onClose();
            } catch (error: any) {
              toast.error(error?.response?.data?.message);
              invalidateEWalletQuery();
            }
          }}
          isLoading={isPending}
          disabled={rechargeCode.length !== 16 || isPending}
          className='w-[220px]'
        >
          <div className='flex justify-center items-center gap-2'>
            اتمام عملية الدفع <WalletIcon />
          </div>
        </Button>
      </DialogActions>
    </div>
  );
};

export default WalletDialog;
