import { useState } from 'react';
import Container from '@mui/material/Container';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Button } from '@/UI';
import { useGetEWallet } from '@/Services/Hooks';
import WalletDialog from './WalletDialog';
import { Modal } from '@/UI';
import CircularProgress from '@mui/material/CircularProgress';

const Wallet = () => {
  const { data, isLoading } = useGetEWallet();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className='mt-[150px] mb-[150px]'>
      <Container maxWidth='md' className='gap-7 border rounded-lg shadow-md p-6 mt-[120px] mb-[50px] w-[90%]'>
        <div className='flex items-center justify-center'>
          <div className='gap-7 mt-10 border rounded-full shadow-md h-12 justify-center w-[30%] mb-5 flex items-center'>
            <h3>المحفظة الإلكترونية </h3>
            <AccountBalanceWalletOutlinedIcon className=' text-blue-600' />
          </div>
        </div>
        <div>
          <div className='' style={{ textAlign: 'center' }}>
            <h3 className='m-2'>الرصيد الحالي </h3>
            <h3>{isLoading ? <CircularProgress /> : `جنية ${data?.eWallet?.balance}`}</h3>
          </div>
          <div style={{ textAlign: 'center' }} className='m-3'>
            <Button onClick={() => setOpenDialog(true)} danger>
              {' '}
              ! اشحن محفظتك الان{' '}
            </Button>
            <Modal open={openDialog} onClose={() => setOpenDialog(false)}>
              <WalletDialog onClose={() => setOpenDialog(false)} />
            </Modal>
          </div>
          <h3 className='text-center mt-5'>! سجل عمليات الدفع </h3>
          <div className='w-full'>
            <p className='w-[90%] mx-auto text-center overflow-y-auto h-[200px]'>
              {JSON.stringify(data?.eWallet?.transactions)}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Wallet;
