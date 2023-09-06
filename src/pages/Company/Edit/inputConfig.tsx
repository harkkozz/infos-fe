import React from 'react';

import { Form, Select } from 'antd';

import { InputConfig } from 'utils/types/input/input';

export const inputConfig: InputConfig[] = [
  {
    inputType: 'default',
    name: 'companyName',
    label: 'Company name',
    placeholder: 'Insert Company name',
    inputProps: {
      allowClear: true
    },
    rules: [
      {
        type: 'string'
      },
      { required: true, message: 'Company name is required' }
    ]
  },
  {
    inputType: 'default',
    name: 'email',
    label: 'Email',
    placeholder: 'Insert your email',
    inputProps: {
      allowClear: true
    },
    rules: [
      {
        type: 'email',
        message: 'Invalid email input'
      },
      { required: true, message: 'Email input is required' }
    ]
  },
  {
    inputType: 'default',
    name: 'state',
    label: 'State',
    placeholder: 'Insert State',
    inputProps: {
      allowClear: true
    },
    rules: [
      {
        type: 'string'
      },
      { required: true, message: 'State is required' }
    ]
  },
  {
    inputType: 'default',
    name: 'city',
    label: 'City',
    placeholder: 'Insert City',
    inputProps: {
      allowClear: true
    },
    rules: [
      {
        type: 'string'
      },
      { required: true, message: 'City is required' }
    ]
  },
  {
    inputType: 'default',
    name: 'phoneNumber',
    label: 'Phone number',
    placeholder: 'Insert Phone number',
    inputProps: {
      allowClear: true,
      addonBefore: (
        <Form.Item name="areaCode" noStyle>
          <Select>
            <Select.Option value="381">381</Select.Option>
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
