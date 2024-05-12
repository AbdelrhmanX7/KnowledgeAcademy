import { STUDY_PHASES } from '@/constants';
import { Button, Input, Select } from '@/UI';
import { Form } from 'antd';
import React from 'react';

export default function Teachers() {
  return (
    <div>
      <Form variant='filled' style={{ maxWidth: 600 }}>
        <Form.Item label='Input' name='Input' rules={[{ required: true, message: 'Please input!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Select' name='Select' rules={[{ required: true, message: 'Please input!' }]}>
          <Select label='الصف الدراسي' options={STUDY_PHASES} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
