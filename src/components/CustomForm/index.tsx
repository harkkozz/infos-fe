import React from 'react';

import { Button, Form } from 'antd';
import { FormProps } from 'antd/es/form/Form';
import { Store as FormFieldValues } from 'antd/es/form/interface';
import { InputConfig } from 'utils/types/input/input';

import CustomInput from 'components/CustomInput';

interface Props extends FormProps {
  inputFields: InputConfig[];
  submitButtonClass?: string;
  submitButtonText: string;
  initValues?: FormFieldValues;
}

const CustomForm: React.FC<Props> = ({
  onFinish,
  layout,
  size,
  inputFields,
  submitButtonClass = '',
  submitButtonText,
  initValues
}) => {
  return (
    <Form layout={layout} onFinish={onFinish} size={size} initialValues={{ ...initValues }}>
      {inputFields.map((input) => (
        <Form.Item
          key={`login-${input.name}`}
          name={input.name}
          label={input.label}
          rules={input.rules}
          hasFeedback={input.formItemHasFeedback}
        >
          <CustomInput
            type={input.type}
            inputWrapperClass={input.class}
            placeholder={input.placeholder}
            {...input.inputProps}
          />
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="default" htmlType="submit" className={submitButtonClass}>
          {submitButtonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
