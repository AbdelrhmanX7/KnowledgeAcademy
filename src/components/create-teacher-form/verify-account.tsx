import { useGetUserData } from '@/hooks';
import { useResendVerificationCode, useSendVerificationCode } from '@/services/hooks';
import { Input, Button } from '@/UI';
import { message } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const VerifyAccount = () => {
  const [verifyCode, setVerifyCode] = useState<string>('');
  const { mutateAsync: sendVerificationCodeFn, isPending } = useSendVerificationCode();
  const { email } = useGetUserData();
  const router = useRouter();
  return (
    <div className='w-full h-fit mt-20 mb-6 max-w-[550px] mx-auto flex flex-col gap-6 px-4 py-6 rounded-lg sm:border border-0'>
      <div>
        <p className='text-2xl font-medium'>كود التاكيد </p>
        <p className='text-[#787878]'>تم ارسال كود التاكيد الي بريدك الالكتروني</p>
        <Input onChange={(e) => setVerifyCode(e.target.value)} className='w-11/12  mt-4' placeholder='ادخل الكود' />
        <ResendButton />
      </div>
      <Button
        onClick={async () => {
          try {
            await sendVerificationCodeFn({ email, code: verifyCode });
            message.success('تم تاكيد الحساب بنجاح');
            router.push('/');
          } catch (error) {
            message.error('حدث خطأ اثناء تاكيد الحساب');
          }
        }}
        disabled={verifyCode.length < 6 || isPending}
        isLoading={isPending}
        className='w-fit'
      >
        تاكيد الحساب
      </Button>
    </div>
  );
};

function ResendButton() {
  const [coldDown, setColdDown] = useState<boolean>(false);
  const { mutateAsync: resendVerificationCodeFn } = useResendVerificationCode();
  const { email } = useGetUserData();
  const [timer, setTimer] = useState<number>(60);

  useEffect(() => {
    if (coldDown) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [coldDown]);

  return (
    <Button
      onClick={() => {
        if (!coldDown) {
          resendVerificationCodeFn(email)
            .then(() => {
              message.success('تم اعادة ارسال الكود');
            })
            .catch(() => {
              message.error('حدث خطأ اثناء اعادة ارسال الكود');
            });
        }
        setColdDown(true);
        setTimeout(() => {
          setColdDown(false);
        }, 60000);
      }}
      disabled={coldDown}
      className='text-sm text-blue-400'
      type='text'
    >
      <p>
        اعادة ارسال الكود
        {coldDown && <span> ({timer})</span>}
      </p>
    </Button>
  );
}

export default VerifyAccount;
