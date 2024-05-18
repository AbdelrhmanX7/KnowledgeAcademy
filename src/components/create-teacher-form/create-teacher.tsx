import { STUDY_PHASES, SUBJECTS } from '@/constants';
import { useCreateTeacher } from '@/services/hooks/useTeacher';
import { Button, CheckboxGroup, EmailInput, Input, PasswordInput, Select, TextAreaInput } from '@/UI';
import { Form, message } from 'antd';
import { setCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const CreateTeacher = ({ goNextStep }: { goNextStep?: () => void }) => {
  const { mutateAsync: createTeacherFn, isPending } = useCreateTeacher();
  const [form] = Form.useForm();

  const [submittable, setSubmittable] = useState<boolean>(false);

  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const [, setUserData] = useLocalStorage('user', {});

  return (
    <div className='h-fit mt-20 mb-6 px-4 py-6 rounded-lg flex justify-center items-center mx-auto sm:max-w-[550px] max-w-none w-full sm:border border-0'>
      <Form
        disabled={isPending}
        form={form}
        name='validateOnly'
        variant='filled'
        className='w-full flex flex-col gap-6'
      >
        <Form.Item name='username' rules={[{ required: true, message: 'يجب ادخال اسم مستخدم' }]}>
          <Input placeholder='عبدالرحمن كمال' label='اسم مستخدم' />
        </Form.Item>

        <Form.Item name='description'>
          <TextAreaInput
            placeholder='مش لاقي كلام اقولوا بس مفروض دة مكان ل مدرس انوا يكتب شرح بسيط عن نفسوا'
            label='وصف'
            rows={4}
          />
        </Form.Item>

        <Form.Item name='email' rules={[{ required: true, message: 'يجب ادخال بريد الكتروني', type: 'email' }]}>
          <EmailInput label='بريد الاكتروني' />
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

        <Form.Item
          name='subjects'
          rules={[{ required: true, type: 'array', min: 1, message: 'يجب اختيار مادة واحدة علي الاقل' }]}
        >
          <Select placeholder='لغة العربية' label='المواد الدراسية' mode='multiple' options={SUBJECTS} />
        </Form.Item>

        <Form.Item name='studyPhase' rules={[{ required: true, message: 'يجب اختيار صف دراسي واحد علي الاقل' }]}>
          <CheckboxGroup label='الصفوف الدراسية' options={STUDY_PHASES} />
        </Form.Item>

        <Form.Item>
          <Button
            isLoading={isPending}
            onClick={async () => {
              try {
                const res = await createTeacherFn({
                  ...values,
                });
                if (res?.user) {
                  setCookie('token', res?.token);
                  setUserData(res?.user);
                  await message.success('تم انشاء الحساب بنجاح');
                  goNextStep && goNextStep();
                } else {
                  await message.error('حدث خطأ اثناء انشاء الحساب');
                }
              } catch (error: any) {
                console.log(error);
                await message.error('حدث خطأ اثناء انشاء الحساب');
              }
            }}
            disabled={!submittable || isPending}
            type='primary'
            htmlType='button'
          >
            انشاء حساب جديد
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTeacher;
