import React, { useMemo } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { Col, Row } from 'antd';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

import { GetCompanyById } from 'apollo/queries/company/getCompanyById';
import { EditCompany } from 'apollo/queries/company/updateCompany';
import CustomForm from 'components/CustomForm';
import MainLayout from 'layouts/MainLayout';
import { useUserStorage } from 'store/user';
import { Company } from 'utils/types/company';

import { inputConfig } from './inputConfig';

const CompanyEdit: React.FC = () => {
  const { id } = useParams<{ slug: string; id: string }>();
  const { user } = useUserStorage();

  const { data, loading, error } = useQuery(GetCompanyById, { variables: { id } });
  const [updateCompany] = useMutation(EditCompany);

  const handleUpdateCompany = async (
    values: Omit<Company, 'slug' | 'createdAt' | 'updatedAt' | 'id' | '__typename'>
  ) => {
    try {
      await updateCompany({
        variables: {
          id,
          company: { ...values, userId: user?.id }
        }
      });

      toast.success('Updated successfully');
    } catch (error) {
      if (error instanceof Error) toast.error(error.cause as string);
    }
  };

  const companyInitValues: Omit<Company, 'slug' | 'userId' | 'createdAt' | 'updatedAt' | 'id' | '__typename'> = useMemo(
    () => ({
      companyName: data?.getCompanyById?.companyName,
      areaCode: data?.getCompanyById?.areaCode,
      phoneNumber: data?.getCompanyById?.phoneNumber,
      city: data?.getCompanyById?.city,
      state: data?.getCompanyById?.state,
      email: data?.getCompanyById?.email
    }),
    [data?.getCompanyById]
  );

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <MainLayout>
      <Row justify="center">
        <h1>Edit {data?.getCompanyById?.companyName}</h1>
      </Row>
      {!loading && (
        <Row justify="center">
          <Col xs={24} md={16} lg={14}>
            <CustomForm
              name={`edit-company-${id}`}
              initValues={{ ...companyInitValues }}
              layout="vertical"
              size="large"
              onFinish={handleUpdateCompany}
              inputFields={inputConfig}
              submitButtonText="Update"
            />
          </Col>
        </Row>
      )}
    </MainLayout>
  );
};

export default CompanyEdit;
