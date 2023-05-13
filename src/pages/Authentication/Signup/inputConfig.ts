import { InputConfig } from 'utils/types/input/input';

export const inputConfig: InputConfig[] = [
  {
    type: 'default',
    name: 'name',
    label: 'Full name',
    placeholder: 'Insert your full name',
    rules: [
      {
        type: 'string',
        message: 'Invalid name'
      },
      { required: true, message: 'Name is required' },
      { min: 4 }
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
    name: 'password',
    placeholder: 'Insert your password',
    label: 'Password',
    type: 'password',
    formItemHasFeedback: true,
    rules: [{ type: 'string' }, { required: true, message: 'Password is required' }, { min: 5 }]
  },
  {
    name: 'confirm',
    placeholder: 'Confirm your password',
    label: 'Confirm password',
    type: 'password',
    formItemHasFeedback: true,
    rules: [
      {
        required: true,
        message: 'Please confirm your password!'
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('The two passwords that you entered do not match!'));
        }
      })
    ]
  }
];
