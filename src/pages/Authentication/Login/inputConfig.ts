import { InputConfig } from 'utils/types/input/input';

export const inputConfig: InputConfig[] = [
  {
    inputType: 'default',
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
    inputType: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Insert your password',
    formItemHasFeedback: true,
    rules: [{ type: 'string' }, { required: true, message: 'Password is required' }, { min: 5 }]
  }
];
