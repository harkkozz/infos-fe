import React, { useState } from 'react';

import { Button, Form } from 'antd';

import CustomInput from './CustomInput/CustomInput';

interface IProps {
  formType: string;
  inputConfig: any[];
  buttonText: string;
  onFormSubmit: (arg: any) => void;
}

type LayoutType = Parameters<typeof Form>[0]['layout'];

const CustomForm: React.FC<IProps> = ({ formType, inputConfig, buttonText, onFormSubmit }) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout = formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout = formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  return (
    <Form
      {...formItemLayout}
      form={form}
      layout={formLayout}
      onValuesChange={onFormLayoutChange}
      onFinish={onFormSubmit}
      initialValues={{ layout: formLayout }}
    >
      {inputConfig.map((input: any) => (
        <Form.Item key={`${formType}-${input.name}`} name={input.name} label={input.label}>
          <CustomInput type={input.type} inputWrapperClass={input.class} placeholder={input.placeholder} />
        </Form.Item>
      ))}
      <Form.Item {...buttonItemLayout}>
        <Button htmlType="submit">{buttonText}</Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
