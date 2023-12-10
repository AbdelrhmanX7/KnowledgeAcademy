import React, { useState } from 'react';
import Link from 'next/link';
import { useCreateStudentAccount } from '@/Services/Hooks';
import toast from 'react-hot-toast';
import { setCookie } from 'cookies-next';
import { useLocalStorage } from 'usehooks-ts';
import { useRouter } from 'next/router';
import { Button, EmailInput, Input, PasswordInput, Select } from '@/UI';
import { STUDY_PHASES } from '@/Constants';

export default function SignUp() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
    studyPhase: '',
  });

  const { firstName, lastName, username, email, phone, password, passwordConfirmation, studyPhase } = formState;

  const { mutateAsync: signupFn, isPending } = useCreateStudentAccount();

  const [, setUserData] = useLocalStorage('user', {});

  function validation() {
    if (!username || !email || !phone || !password || !passwordConfirmation || !firstName || !lastName || !studyPhase) {
      return false;
    }
    return true;
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col p-6 gap-6 w-[500px] mb-10 mt-32 rounded-lg border shadow-sm text-slate-700'>
        <h1 className='text-4xl font-semibold text-center mb-3 text-black'> انشاء حساب جديد</h1>
        <div className='flex flex-row-reverse gap-6'>
          <Input
            value={firstName}
            onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
            label='الاسم الاول'
          />
          <Input
            value={lastName}
            onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
            label='الاسم الاخير'
          />
        </div>
        <Input
          value={username}
          onChange={(e) => setFormState({ ...formState, username: e.target.value })}
          label='اسم المستخدم'
        />
        <Input
          label='رقم الهاتف'
          value={phone}
          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
        />
        <Select
          label='الصف الدراسي'
          onChange={(value) => setFormState({ ...formState, studyPhase: value })}
          options={STUDY_PHASES}
        />
        <EmailInput
          label='بريد الاكتروني'
          value={email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        />
        <PasswordInput
          label='كلمة المرور'
          value={password}
          onChange={(e) => setFormState({ ...formState, password: e.target.value })}
        />
        <PasswordInput
          label='تاكيد كلمة المرور'
          confirmPassword
          value={passwordConfirmation}
          onChange={(e) => setFormState({ ...formState, passwordConfirmation: e.target.value })}
        />
        <div className='flex justify-center '>
          <Button
            loading={isPending}
            disabled={!validation()}
            onClick={async () => {
              try {
                const res = await signupFn(formState);
                setCookie('token', res?.token);
                setUserData(res?.user);
                toast.success('تم تسجيل الدخول بنجاح');
                router.push('/');
              } catch (error: any) {
                toast.error(JSON.stringify(error?.response?.data));
              }
            }}
          >
            انشاء حساب جديد
          </Button>
        </div>
        <div className='flex m-5' style={{ direction: 'rtl' }}>
          <p className='m-1 text-[#00000099] font-normal'> يوجد لديك حساب بالفعل ؟</p>
          <Link href='/login'>
            <span className='text-xl font-semibold text-[#3da3f6] m-1'> ادخل إلى حسابك الآن !</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
