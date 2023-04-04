import React from 'react';

import { Input, InputProps } from 'antd';

interface IProps extends InputProps {
  type: 'default' | 'password';
  inputWrapperClass?: string;
}

const inputTypes = {
  default: Input,
  password: Input.Password
};

const CustomInput: React.FC<IProps> = ({ type, inputWrapperClass, ...inputProps }) => {
  const InputComponent = inputTypes[type] || null;

  return (
    <div className={inputWrapperClass}>
      <InputComponent {...inputProps} />
    </div>
  );
};

export default CustomInput;
