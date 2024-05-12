import React, { useState } from 'react';
import Link from 'next/link';
import { useLogin } from '@/services/hooks';
import { useLocalStorage } from 'usehooks-ts';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { Button, EmailInput, PasswordInput } from '@/UI';
import { Checkbox, message } from 'antd';

type LoginFormType = {
  email: string;
  password: string;
  isTeacher: boolean;
};

export default function Login() {
  const router = useRouter();
  const [formState, setFormState] = useState<LoginFormType>({
    email: '',
    password: '',
    isTeacher: false,
  });
  const [, setUserData] = useLocalStorage('user', {});
  const { mutateAsync: loginFn, isPending } = useLogin();
  const { email, password } = formState;
  return (
    <div dir='rtl' className='flex justify-center items-center h-screen'>
      <div className='w-[400px] p-6 flex flex-col gap-7 mt-10 border rounded-lg shadow-md'>
        <div className='flex justify-center'>
          <h1>تسجيل دخول</h1>
        </div>
        <EmailInput
          label='بريد الاكتروني'
          value={email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        />
        <PasswordInput
          label='كلمة مرور'
          value={password}
          onChange={(e) => setFormState({ ...formState, password: e.target.value })}
        />
        <Checkbox onChange={(e) => setFormState({ ...formState, isTeacher: e.target.checked })} className='text-lg'>
          تسجيل دخول كمدرس
        </Checkbox>
        <Button
          isLoading={isPending}
          disabled={!email || !password}
          type='primary'
          onClick={async () => {
            try {
              const res = await loginFn(formState);
              setCookie('token', res?.token);
              setUserData(res?.user);
              message.success('تم تسجيل الدخول بنجاح');
              router.push('/');
            } catch (error: any) {
              message.error(error?.response?.data);
            }
          }}
        >
          تسجيل الدخول
        </Button>
        <Link className='text-lg font-medium underline w-fit' href='/signup'>
          انشاء حساب جديد !
        </Link>
      </div>
    </div>
  );
}
