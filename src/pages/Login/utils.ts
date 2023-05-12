export interface InputConfig {
  type: 'password' | 'default';
  name: string;
  label: string;
  placeholder: string;
  class?: string;
}

export const inputConfig: InputConfig[] = [
  {
    type: 'default',
    name: 'email',
    label: 'Email',
    placeholder: 'Insert your email'
  },
  {
    name: 'password',
    placeholder: 'Insert your password',
    label: 'Password',
    type: 'password'
  }
];
