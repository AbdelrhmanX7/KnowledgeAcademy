import { useState } from 'react';
import Container from '@mui/material/Container';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Button, Table } from '@/UI';
import { useGetEWallet } from '@/services/hooks';
import WalletDialog from './WalletDialog';
import { Modal } from '@/UI';
import CircularProgress from '@mui/material/CircularProgress';
import { walletTableColumn } from '@/Constants';

const Wallet = () => {
  const { data, isLoading } = useGetEWallet();
  const [openDialog, setOpenDialog] = useState(false);
  console.log(data);
  return (
    <div className='mt-[150px] mb-[150px]'>
      <Container maxWidth='lg' className='gap-7 border rounded-lg shadow-md p-6 mt-[120px] mb-[50px] w-full'>
        <div className='flex items-center justify-center'>
          <div className='gap-7 mt-10 border rounded-full shadow-md h-12 justify-center w-[30%] mb-5 flex items-center'>
            <h3>المحفظة الإلكترونية </h3>
            <AccountBalanceWalletOutlinedIcon className=' text-blue-600' />
          </div>
        </div>
        <div className='text-center'>
          <div>
            <h3 className='m-2'>الرصيد الحالي </h3>
            <h3>{isLoading ? <CircularProgress /> : `جنية ${data?.eWallet?.balance}`}</h3>
          </div>
          <div className='m-3'>
            <Button onClick={() => setOpenDialog(true)}>اشحن محفظتك الان </Button>
            <Modal open={openDialog} onClose={() => setOpenDialog(false)}>
              <WalletDialog onClose={() => setOpenDialog(false)} />
            </Modal>
          </div>
          <h3 className='text-center mt-5'>سجل عمليات الدفع </h3>
          <Table data={data?.eWallet?.transactions ?? []} columns={walletTableColumn} />
        </div>
      </Container>
    </div>
  );
};

export default Wallet;
