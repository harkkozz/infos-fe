import React, { useRef, useState } from 'react';

import { Button, Form } from 'antd';

import CustomInput from 'components/CustomInput/CustomInput';

interface IProps {
  formType: string;
  inputConfig: any[];
  buttonText: string;
  hasSubmitButton?: boolean;
  onFormSubmit: (arg: any) => void;
}

const CustomForm: React.FC<IProps> = ({ formType, inputConfig, buttonText, hasSubmitButton = false, onFormSubmit }) => {
  const [form] = Form.useForm();
  const ref = useRef();

  return (
    <Form ref={ref} labelCol={{ span: 4 }} form={form} onFinish={onFormSubmit}>
      {inputConfig.map((input: any) => (
        <Form.Item key={`${formType}-${input.name}`} name={input.name} label={input.label}>
          <CustomInput type={input.type} inputWrapperClass={input.class} placeholder={input.placeholder} />
        </Form.Item>
      ))}
      {hasSubmitButton && (
        <Form.Item>
          <Button type="default" htmlType="submit">
            {buttonText}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default CustomForm;
