import React from 'react';

import { Button, Col, Form, Row } from 'antd';

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
      <Row justify={'center'}>
        <Col xs={22} md={20}>
          <Form layout="vertical" form={form} onFinish={onFormSubmit} size="large">
            {inputConfig.map((input: any) => (
              <Form.Item key={`${formType}-${input.name}`} name={input.name} label={input.label}>
                <CustomInput type={input.type} inputWrapperClass={input.class} placeholder={input.placeholder} />
              </Form.Item>
            ))}
            {hasSubmitButton && (
              <Form.Item>
                <Row>
                  <Button type="default" htmlType="submit">
                    {buttonText}
                  </Button>
                </Row>
              </Form.Item>
            )}
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CustomForm;
