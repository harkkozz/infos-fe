import React from 'react';

import { Button, Form } from 'antd';

import CustomInput from 'components/CustomInput/CustomInput';

interface IProps {
  formType: string;
  formWrapperClass?: string;
  inputConfig: any[];
  buttonText: string;
  hasSubmitButton?: boolean;
  onFormSubmit: (arg: any) => void;
}

const CustomForm: React.FC<IProps> = ({
  formType,
  inputConfig,
  buttonText,
  hasSubmitButton = false,
  formWrapperClass = '',
  onFormSubmit
}) => {
  const [form] = Form.useForm();

  return (
    <div className={formWrapperClass}>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} form={form} onFinish={onFormSubmit} size="large">
        {inputConfig.map((input: any) => (
          <Form.Item key={`${formType}-${input.name}`} name={input.name} label={input.label}>
            <CustomInput type={input.type} inputWrapperClass={input.class} placeholder={input.placeholder} />
          </Form.Item>
        ))}
        {hasSubmitButton && (
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="default" htmlType="submit">
              {buttonText}
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default CustomForm;
