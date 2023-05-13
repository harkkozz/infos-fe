import { InputProps } from 'antd';
import { Rule } from 'antd/es/form';

export type InputType = 'password' | 'default';

export interface InputConfig {
  type: InputType;
  name: string;
  label: string;
  placeholder: string;
  rules: Rule[];
  class?: string;
  inputProps?: InputProps;
  formItemHasFeedback?: boolean;
}
