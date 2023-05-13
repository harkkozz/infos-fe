import React from 'react';

import { Form, Select } from 'antd';
import { InputConfig } from 'utils/types/input/input';

export const inputConfig: InputConfig[] = [
  {
    type: 'default',
    name: 'companyName',
    label: 'Company name',
    placeholder: 'Insert Company name',
    rules: [
      {
        type: 'string'
      },
      { required: true, message: 'Company name is required' }
    ]
  },
  {
    type: 'default',
    name: 'email',
    label: 'Email',
    placeholder: 'Insert your email',
    rules: [
      {
        type: 'email',
        message: 'Invalid email input'
      },
      { required: true, message: 'Email input is required' }
    ]
  },
  {
    type: 'default',
    name: 'state',
    label: 'State',
    placeholder: 'Insert State',
    rules: [
      {
        type: 'string'
      },
      { required: true, message: 'State is required' }
    ]
  },
  {
    type: 'default',
    name: 'city',
    label: 'City',
    placeholder: 'Insert City',
    rules: [
      {
        type: 'string'
      },
      { required: true, message: 'City is required' }
    ]
  },
  {
    type: 'default',
    name: 'phoneNumber',
    label: 'Phone number',
    placeholder: 'Insert Phone number',
    inputProps: {
      addonBefore: (
        <Form.Item name="prefix" noStyle>
          <Select>
            <Select.Option value="381">381</Select.Option>
            <Select.Option value="382">382</Select.Option>
          </Select>
        </Form.Item>
      )
    },
    rules: [
      {
        type: 'string'
      },
      { required: true, message: 'Phone number is required' }
    ]
  }
];
