import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCreateStudentAccount } from '@/services/hooks';
import { setCookie } from 'cookies-next';
import { useLocalStorage } from 'usehooks-ts';
import { useRouter } from 'next/router';
import { Button, EmailInput, Input, PasswordInput, Select } from '@/UI';
import { STUDY_PHASES } from '@/constants';
import { Form, message } from 'antd';

export default function SignUp() {
  const router = useRouter();

  const { mutateAsync: signupFn, isPending } = useCreateStudentAccount();

  const [, setUserData] = useLocalStorage('user', {});

  const [form] = Form.useForm();

  const [submittable, setSubmittable] = useState<boolean>(false);

  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <div className='flex justify-center items-center'>
      <Form
        disabled={isPending}
        form={form}
        name='validateOnly'
        variant='filled'
        className='flex flex-col p-6 gap-6 w-[500px] mb-10 mt-32 rounded-lg border shadow-sm text-slate-700'
      >
        <h1 className='text-4xl font-semibold text-center mb-3 text-black'> انشاء حساب جديد</h1>
        <div className='flex flex-row gap-6'>
          <Form.Item name={'firstName'} rules={[{ required: true, message: 'يجب ادخال الاسم الاول' }]}>
            <Input label='الاسم الاول' />
          </Form.Item>
          <Form.Item name={'lastName'} rules={[{ required: true, message: 'يجب ادخال الاسم الاخير' }]}>
            <Input label='الاسم الاخير' />
          </Form.Item>
        </div>
        <Form.Item name={'username'} rules={[{ required: true, message: 'يجب ادخال الاسم المستخدم' }]}>
          <Input label='اسم مستخدم' />
        </Form.Item>
        <Form.Item
          name='phoneNumber'
          rules={[
            { required: true, message: 'يجب ادخل رقم الهاتف' },
            { type: 'string', min: 11, max: 11, warningOnly: true, message: 'يجب ان يتكون رقم الهاتف من 11 رقم' },
          ]}
        >
          <Input placeholder='01000000000' maxLength={11} label='رقم الهاتف' />
        </Form.Item>
        <Form.Item name='studyPhase' rules={[{ required: true, min: 1, message: 'يجب اختيار الصف الدراسي' }]}>
          <Select label='الصف الدراسي' options={STUDY_PHASES} />
        </Form.Item>
        <Form.Item name='email' rules={[{ required: true, message: 'يجب ادخال بريد الكتروني', type: 'email' }]}>
          <EmailInput label='بريد الاكتروني' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            { required: true, message: 'يجب ادخال كلمة المرور' },
            { type: 'string', min: 6, message: 'يجب ان تكون كلمة المرور من 6 احرف على الاقل' },
          ]}
        >
          <PasswordInput label='كلمة مرور' />
        </Form.Item>
        <Form.Item
          dependencies={['password']}
          name='passwordConfirmation'
          rules={[
            { required: true, message: 'يجب تاكيد كلمة المرور' },
            { type: 'string', min: 6, message: 'يجب ان تكون كلمة المرور من 6 احرف على الاقل' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('كلمة المرور غير متطابقة'));
              },
            }),
          ]}
        >
          <PasswordInput label='تاكيد كلمة مرور' confirmPassword />
        </Form.Item>
        <div className='flex justify-center '>
          <Button
            loading={isPending}
            disabled={!submittable || isPending}
            onClick={async () => {
              try {
                const res = await signupFn(values);
                setCookie('token', res?.token);
                setUserData(res?.user);
                message.success('تم تسجيل الدخول بنجاح');
                router.push('/');
              } catch (error: any) {
                message.error(JSON.stringify(error?.response?.data));
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
      </Form>
    </div>
  );
}
