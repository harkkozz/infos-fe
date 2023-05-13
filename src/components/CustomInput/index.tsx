import React from 'react';

import { Input, InputProps } from 'antd';
import { InputType } from 'utils/types/input/input';

interface Props extends InputProps {
  type: InputType;
  inputWrapperClass?: string;
}

const inputTypes = {
  default: Input,
  password: Input.Password
};

const CustomInput: React.FC<Props> = ({ type, inputWrapperClass, ...inputProps }) => {
  const InputComponent = inputTypes[type] || null;

  return (
    <div className={inputWrapperClass}>
      <InputComponent {...inputProps} />
    </div>
  );
};

export default CustomInput;
