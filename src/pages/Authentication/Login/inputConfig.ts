import { InputConfig } from 'utils/types/input/input';

export const inputConfig: InputConfig[] = [
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
  }
];
