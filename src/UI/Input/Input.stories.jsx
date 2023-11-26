import React from 'react';
import Input from './Input';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { MdAddLink } from 'react-icons/md';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'UI/Input',
  component: Input,
};

function Template(args) {
  return (
    <div className='container'>
      <div className='flex flex-col gap-6'>
        <Input {...args} />
        <EmailInput />
        <PasswordInput />
        <Input status='error' />
        <Input status='warning' />
        <Input label='INPUT_WITH_LABEL' />
        <Input label='INPUT_WITH_LABEL_AND_ICON' prefix={<MdAddLink />} />
      </div>
    </div>
  );
}

export const InputElement = Template.bind({});
