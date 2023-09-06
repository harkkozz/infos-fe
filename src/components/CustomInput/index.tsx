import React from 'react';

import { Input, InputProps } from 'antd';

import { InputType } from 'utils/types/input/input';

interface Props extends InputProps {
  inputType: InputType;
  inputWrapperClass?: string;
}

const inputTypes = {
  default: Input,
  password: Input.Password
};

const CustomInput: React.FC<Props> = ({ inputType, inputWrapperClass, ...inputProps }) => {
  const InputComponent = inputTypes[inputType];

  return (
    <div className={inputWrapperClass}>
      <InputComponent {...inputProps} />
    </div>
  );
};

export default CustomInput;
