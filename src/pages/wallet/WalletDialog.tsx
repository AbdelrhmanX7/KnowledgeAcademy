import { useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WalletIcon from '@mui/icons-material/Wallet';
import { useAddBalance } from '@/services/hooks';
import { Button, Input } from '@/UI';
import { useGetInvalidateQueries } from '@/services/invalidateQueries';
import { message } from 'antd';

const WalletDialog = ({ onClose }: { onClose?: () => void }) => {
  const [rechargeCode, setRechargeCode] = useState<string>('');
  const { mutateAsync: addBalanceFn, isPending } = useAddBalance();
  const { invalidateEWalletQuery } = useGetInvalidateQueries();

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
              message.success('تم الشحن بنجاح');
              setRechargeCode('');
              onClose && onClose();
            } catch (error: any) {
              message.error(error?.response?.data?.message);
            }
            invalidateEWalletQuery();
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
