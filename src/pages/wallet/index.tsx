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
    <div className='mt-[150px] mb-[150px]' style={{ direction: 'rtl' }}>
      <Container maxWidth='lg' className='gap-7 border rounded-lg shadow-md p-6 mt-[120px] mb-[50px] w-[90%]'>
        <div className='flex items-center justify-center'>
          <div className='gap-7 w-[300px] mt-10 border rounded-full shadow-md h-12 justify-center w-[30%] mb-5 flex items-center'>
            <AccountBalanceWalletOutlinedIcon className=' text-blue-600' />
            <h3>المحفظة الإلكترونية </h3>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-end'>
          <div className='border h-[300px]'>
            <div className='justify-center w-[100%] '>
              <div className='' style={{ textAlign: 'center' }}>
                <h3 className='m-2'>الرصيد الحالي </h3>
                <hr />
                <h3 className='m-2'>{isLoading ? <CircularProgress /> : ` ${data?.eWallet?.balance} جنية`}</h3>
              </div>
              <div className='m-3  text-center'>
                <Button onClick={() => setOpenDialog(true)} danger>
                  {' '}
                  اشحن محفظتك الان !{' '}
                </Button>

                <Modal open={openDialog} onClose={() => setOpenDialog(false)}>
                  <WalletDialog onClose={() => setOpenDialog(false)} />
                </Modal>
              </div>
              <p className='text-right font-inter text-gray-600 text-xl font-normal p-2'>
                يمكنك شحن رصيد محفظتك بوسائل الدفع التي ندعمها لتتمكن من استخدام محفظتك في الشراء داخل المنصة
              </p>
            </div>
          </div>
          <div className='w-full md:w-[60%] md:mr-[100px] h-[300px] mt-8 border rounded-lg shadow-md'>
            <h3 className='text-center my-5'> سجل عمليات الدفع !</h3>

            <div className='w-[90%] m-auto'>
              <p className='w-full mx-auto text-center overflow-y-auto h-48'>
                {JSON.stringify(data?.eWallet?.transactions)} .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Wallet;
